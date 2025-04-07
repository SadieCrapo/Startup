import React from "react";

export function PlantingInactive({plants, foodInventory, decreaseInventoryFromFeeding, setPlantingActive}) {
    // const [food, setFood] = React.useState(localStorage.getItem('food') || 0);
    // const [water, setWater] = React.useState(localStorage.getItem('water') || 0);

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

    //         <div className="plant">
    //         {/* <img src={plant.imageUrl} */}
    //         <img src="./images/placeholder.png"
    // onError={(e) => {
    //     e.target.src = "./images/placeholder.png";
    // }}
    //             alt="A new plant growing in a pot"
    //         />
    //         </div>
        );
    };

    function feedAll() {
        if (foodInventory.food > 0) {
            decreaseInventoryFromFeeding("food");
            // setFood(food - 1);
            // localStorage.setItem('food', food);
            growAll();
        }
    }

    function waterAll() {
        if (foodInventory.water > 0) {
            decreaseInventoryFromFeeding("water");
            // setWater(water - 1);
            // localStorage.setItem('water', water);
            growAll();
        }
    }

    function growAll() {
        for (let index = 0; index < plants.length; index++) {
            const plant = plants[index];
            plant.grow();
        }
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