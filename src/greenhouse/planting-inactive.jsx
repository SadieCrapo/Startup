import React from "react";

export function PlantingInactive({plantList, oldFoodInventory, decreaseInventoryFromFeeding, setPlantingActive}) {
    // const [food, setFood] = React.useState(localStorage.getItem('food') || 0);
    // const [water, setWater] = React.useState(localStorage.getItem('water') || 0);
    const [plants, setPlants] = React.useState([]);
    const [foodInventory, setFoodInventory] = React.useState({});

    React.useEffect(() => {
      fetch('/api/plants')
        .then((response) => response.json())
        .then((plants) => {
          setPlants(plants);
        });
    });

    React.useEffect(() => {
        fetch('/api/inventory/food')
        .then((response) => response.json())
        .then((foodInventory) => {
            setFoodInventory(foodInventory);
        });
    });

    const PlantComponent = ({ plant }) => {
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
            // setFood(food - 1);
            // localStorage.setItem('food', food);
            growAll();
        }
    }

    function waterAll() {
        if (foodInventory.water > 0) {
            decreaseInventory("water");
            // setWater(water - 1);
            // localStorage.setItem('water', water);
            growAll();
        }
    }

    async function decreaseInventory(foodType) {
        foodInventory[foodType] = foodInventory[foodType] - 1;

        await fetch('/api/inventory/food', {
            method: 'PUT',
            headers: { 'content-type': 'application/json' },
            // body: JSON.stringify(plantData),
            body: JSON.stringify(foodInventory),
        });
    }

    function growAll() {
        for (let index = 0; index < plants.length; index++) {
            const plant = plants[index];
            plant.grow();
        }
        updatePlants(plants);
    }

    async function updatePlants(plants) {
        await fetch('/api/plants', {
            method: 'PUT',
            headers: { 'content-type': 'application/json' },
            body: JSON.stringify(plants),
        });
    }

    return (
        // <main className='greenhouse-main'>
        <div className="inactive-parent">
            <div className="shelves">
                {plants.map((plant) => (
                <PlantComponent plant={plant} />
                ))}
            </div>
            <div className="tools">
                    <button onClick={setPlantingActive} className="action-button btn action">Plant</button>
                    <button onClick={feedAll} className="action-button btn action">Feed</button>
                    <button onClick={waterAll} className="action-button btn action">Water</button>
            </div>
        </div>
        // </main>
    );
}