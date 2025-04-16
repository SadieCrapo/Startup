import React from "react";

import { Monstera } from "./plant";
import { Daisy } from "./plant";
import { Laceleaf } from "./plant";

export function PlantingInactive({ plantList, oldFoodInventory, decreaseInventoryFromFeeding, setPlantingActive }) {
    const [plants, setPlants] = React.useState([]);
    const [foodInventory, setFoodInventory] = React.useState({});

    const [quoteList, setQuoteList] = React.useState(localStorage.getItem('quoteList') || []);
    const [quote, setQuote] = React.useState('Loading...');
    const [quoteAuthor, setQuoteAuthor] = React.useState('unknown');

    const [refreshKey, setRefreshKey] = React.useState(0);

    React.useEffect(() => {
        var quotes = JSON.parse(quoteList);
        if (quotes && quotes.length > 0) {
            const index = Math.floor(Math.random() * quotes.length);
            const rawQuote = JSON.parse(quotes[index]);
            setQuote(rawQuote.q);
            setQuoteAuthor(rawQuote.a);
        }
    }, [quoteList]);

    React.useEffect(() => {
        fetch('/api/plants')
            .then((response) => response.json())
            .then((plants) => {
                setPlants(plants);
            });
    }, []);

    React.useEffect(() => {
        fetch('/api/inventory/food')
            .then((response) => response.json())
            .then((foodInventory) => {
                setFoodInventory(foodInventory);
            });
    }, []);

    const PlantComponent = ({ plant }) => {
        console.log(plant.URL);
        return (
            <div className="plant">
                <img src={plant.URL}
                    onError={(e) => {
                        e.target.src = "/images/placeholder.png";
                    }}
                    alt="A plant growing in a pot"
                    height="200"
                />
            </div>
        );
    };

    function feedAll() {
        if (foodInventory.food > 0) {
            decreaseInventory("food");
            growAll();
        }
    }

    function waterAll() {
        if (foodInventory.water > 0) {
            decreaseInventory("water");
            growAll();
        }
    }

    async function decreaseInventory(foodType) {
        foodInventory[foodType] = foodInventory[foodType] - 1;

        await fetch('/api/inventory/food', {
            method: 'PUT',
            headers: { 'content-type': 'application/json' },
            body: JSON.stringify(foodInventory),
        });
    }

    function growAll() {
        for (let index = 0; index < plants.length; index++) {
            const rawPlant = plants[index];
            var plant;
            switch (rawPlant.plantType) {
                case "daisy": plant = new Daisy(rawPlant.potType, rawPlant.age, rawPlant.URL);
                    break;
                case "monstera": plant = new Monstera(rawPlant.potType, rawPlant.age, rawPlant.URL);
                    break;
                case "laceleaf": plant = new Laceleaf(rawPlant.potType, rawPlant.age, rawPlant.URL);
                    break;
            }
            plant.grow();
            plants[index] = plant;
        }
        updatePlants(plants);
        handleRefresh();
    }

    async function updatePlants(plants) {
        await fetch('/api/plants', {
            method: 'PUT',
            headers: { 'content-type': 'application/json' },
            body: JSON.stringify(plants),
        });
    }

    const handleRefresh = () => {
        setRefreshKey(prevKey => prevKey + 1);  // Update the refreshKey to trigger a re-render
    };

    return (
        <div className="inactive-parent">
            <div className="shelf-container">
                <div className="shelves" key={refreshKey}>
                    {plants.map((plant) => (
                        <PlantComponent plant={plant} />
                    ))}
                </div>
                <div className="quote-container">
                    <h5 className="quote">
                    {quote}
                    <br />
                    — {quoteAuthor}
                    </h5>
                    <div className="acknowledment">
                    Inspirational quotes provided by <a href="https://zenquotes.io/" target="_blank">ZenQuotes API</a>
                    </div>
                </div>
            </div>
            <div className="tools">
                <button onClick={setPlantingActive} className="action-button btn action">Plant</button>
                <button onClick={feedAll} className="action-button btn action">Feed</button>
                <button onClick={waterAll} className="action-button btn action">Water</button>
            </div>
        </div>
    );
}