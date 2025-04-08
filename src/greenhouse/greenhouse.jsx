import React from 'react';
import './greenhouse.css';
import './plant';
import { PlantingState } from './plantingState';
import { PlantingActive } from './planting-active';
import { PlantingInactive } from './planting-inactive';
// import '../app.css';

export function Greenhouse({ plants, plantingState, plantInventory, potInventory, foodInventory, decreaseInventoryFromFeeding, decreaseInventoryFromPlanting, addPlant, setPlantingActive, setPlantingInactive }) {
    // const [food, setFood] = React.useState(localStorage.getItem('food') || 0);
    // const [water, setWater] = React.useState(localStorage.getItem('water') || 0);
    // const [plants, setPlants] = React.useState([]);
    // localStorage.setItem('plants', plants);
    // localStorage.setItem('plants', [])
    // plantList = localStorage.getItem('plants')
    // setUserName(userName);

    // const PlantComponent = ({ plant }) => {
    //     return (
    //         <div className="plant">
    //             <img src={plant.imageUrl} alt="A plant growing in a pot" />
    //         </div>
    //     );
    // };

    // function feedAll() {
    //     if (food > 0) {
    //         setFood(food - 1);
    //         localStorage.setItem('food', food);
    //         growAll();
    //     }
    // }

    // function waterAll() {
    //     if (water > 0) {
    //         setWater(water - 1);
    //         localStorage.setItem('water', water);
    //         growAll();
    //     }
    // }

    // function growAll() {
    //     for (let index = 0; index < plants.length; index++) {
    //         const plant = plants[index];
    //         plant.grow();
    //     }
    // }

    return (
        <main className='greenhouse-main'>
            {plantingState === PlantingState.Inactive && (
                <PlantingInactive
                    plants={plants}
                    foodInventory={foodInventory}
                    decreaseInventoryFromFeeding={decreaseInventoryFromFeeding}
                    setPlantingActive={setPlantingActive}
            // onLogout={() => {
            //     onAuthChange(userName, AuthState.Unauthenticated);
            // }}
                />
            )}
            {plantingState === PlantingState.Active && (
                <PlantingActive
                    // plants={plants}
                    plantInventory={plantInventory}
                    potInventory={potInventory}
                    decreaseInventoryFromPlanting={decreaseInventoryFromPlanting}
                    addPlant={addPlant}
                    setPlantingInactive={setPlantingInactive}
        // onLogin={(loginUsername) => {
        //     onAuthChange(loginUsername, AuthState.Authenticated);
        // }}
                />
            )}
        </main>
    );
}

// <main className="container-fluid bg-secondary text-center">
// <main className='greenhouse-main'>
//         <div className="shelves">
//             {plants.map((plant) => (
//             <PlantComponent plant={plant} />
//             ))}
//         </div>
{/* <div className="shelves">
            <div className="plant">
                <img alt="A plant growing in a pot" />
            </div>
            <div className="plant">
                <img alt="A plant growing in a pot" />
            </div>
            <div className="plant">
                <img alt="A plant growing in a pot" />
            </div>
            <div className="plant">
                <img alt="A plant growing in a pot" />
            </div>
            <div className="plant">
                <img alt="A plant growing in a pot" />
            </div>
            <div className="plant">
                <img alt="A plant growing in a pot" />
            </div>
            <div className="plant">
                <img alt="A plant growing in a pot" />
            </div>
            <div className="plant">
                <img alt="A plant growing in a pot" />
            </div>
            <div className="plant">
                <img alt="A plant growing in a pot" />
            </div>
            <div className="plant">
                <img alt="A plant growing in a pot" />
            </div>
            <div className="plant">
                <img alt="A plant growing in a pot" />
            </div>
            <div className="plant">
                <img alt="A plant growing in a pot" />
            </div>
        </div> */}

{/* <div className="tools">
            <button className="action-button btn action">Plant</button>
            <button onClick={feedAll} className="action-button btn action">Feed</button>
            <button onClick={waterAll} className="action-button btn action">Water</button>
        </div>
    </main> */}
//     );
// }