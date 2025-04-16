import React from 'react';
import './greenhouse.css';
import './plant';
import { PlantingState } from './plantingState';
import { PlantingActive } from './planting-active';
import { PlantingInactive } from './planting-inactive';

export function Greenhouse({ plants, plantingState, plantInventory, potInventory, foodInventory, decreaseInventoryFromFeeding, decreaseInventoryFromPlanting, addPlant, setPlantingActive, setPlantingInactive }) {
    const [quoteList, setQuoteList] = React.useState([]);
    React.useEffect(() => {
        fetch('/api/quotes')
            .then((res) => res.json())
            .then((data) => fillQuoteList(data));
    }, []);

    function fillQuoteList(data) {
        const quotes = data.map((quote) => JSON.stringify(quote));
        setQuoteList(quotes); // update React state
        localStorage.setItem('quoteList', JSON.stringify(quotes));
    }

    // localStorage.setItem('quoteList', quoteList);

    return (
        <main className='greenhouse-main'>
            {plantingState === PlantingState.Inactive && (
                <PlantingInactive
                    plants={plants}
                    foodInventory={foodInventory}
                    decreaseInventoryFromFeeding={decreaseInventoryFromFeeding}
                    setPlantingActive={setPlantingActive}
                />
            )}
            {plantingState === PlantingState.Active && (
                <PlantingActive
                    plantInventory={plantInventory}
                    potInventory={potInventory}
                    decreaseInventoryFromPlanting={decreaseInventoryFromPlanting}
                    addPlant={addPlant}
                    setPlantingInactive={setPlantingInactive}
                />
            )}
        </main>
    );
}