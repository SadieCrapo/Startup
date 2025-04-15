import React from 'react';
import './backpack.css';

export function Backpack({ oldPlantInventory, oldPotInventory, oldFoodInventory }) {
    const [plantInventory, setPlantInventory] = React.useState({});
    const [potInventory, setPotInventory] = React.useState({});
    const [foodInventory, setFoodInventory] = React.useState({});

    React.useEffect(() => {
        fetch('/api/inventory/plants')
        .then((response) => response.json())
        .then((plantInventory) => {
            setPlantInventory(plantInventory);
        });
    });

    React.useEffect(() => {
        fetch('/api/inventory/pots')
        .then((response) => response.json())
        .then((potInventory) => {
            setPotInventory(potInventory);
        });
    });

    React.useEffect(() => {
        fetch('/api/inventory/food')
        .then((response) => response.json())
        .then((foodInventory) => {
            setFoodInventory(foodInventory);
        });
    });

    return (
        // <main className="container-fluid bg-secondary text-center">
        <main className='backpack-main'>
            <div className="shelves">
                <div className="item">
                    <img src="./images/placeholder.png" height="200" alt="A laceleaf plant" />
                    <p>Laceleaf x{plantInventory.laceleaf}</p>
                </div>
                <div className="item">
                    <img src="./images/placeholder.png" height="200" alt="A daisy" />
                    <p>Daisy x{plantInventory.daisy}</p>
                </div>
                <div className="item">
                    <img src="./images/placeholder.png" height="200" alt="A monstera plant" />
                    <p>Monstera x{plantInventory.monstera}</p>
                </div>
                <div className="item">
                    <img src="./images/terracotta/terracotta-pot.png" height="200" alt="A terracotta pot" />
                    <p>Terracotta x{potInventory.terracotta}</p>
                </div>
                <div className="item">
                    <img src="./images/hanging/hanging-pot.png" height="200" alt="A hanging planter" />
                    <p>Hanging x{potInventory.hanging}</p>
                </div>
                <div className="item">
                    <img src="./images/marble/marble-pot.png" height="200" alt="A marble pot" />
                    <p>Marble x{potInventory.marble}</p>
                </div>
                <div className="item">
                    <img src="./images/placeholder.png" height="200" alt="A watering can" />
                    <p>Water x{foodInventory.water}</p>
                </div>
                <div className="item">
                    <img src="./images/placeholder.png" height="200" alt="A bag of plant food" />
                    <p>Food x{foodInventory.food}</p>
                </div>
            </div>
        </main>
    );
}