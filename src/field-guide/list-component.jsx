import React from 'react';
import './list-item';
import { ListItem } from './list-item';

export const ListComponent = ({ listItem, oldIncreaseInventory, trigger, setTrigger }) => {
    const [plantInventory, setPlantInventory] = React.useState({});
    const [potInventory, setPotInventory] = React.useState({});
    const [foodInventory, setFoodInventory] = React.useState({});

    React.useEffect(() => {
        fetch('/api/inventory/plants')
        .then((response) => response.json())
        .then((plantInventory) => {
            setPlantInventory(plantInventory);
        });
    }, []);

    React.useEffect(() => {
        fetch('/api/inventory/pots')
        .then((response) => response.json())
        .then((potInventory) => {
            setPotInventory(potInventory);
        });
    }, []);

    React.useEffect(() => {
        fetch('/api/inventory/food')
        .then((response) => response.json())
        .then((foodInventory) => {
            setFoodInventory(foodInventory);
        });
    }, []);

    function onCheck(listItem) {
        // console.log('in onCheck - listItem = ', listItem);
        // console.log(listItem instanceof ListItem);
        const task = new ListItem(listItem.text);
        task.toggleComplete();
        updateTask(task);
        generateRandomKeys();
        setTrigger(trigger + 1);
    }

    function generateRandomKeys() {
        const plantTypes = ["daisy", "monstera", "laceleaf"];
        var plant = plantTypes[Math.floor(Math.random() * plantTypes.length)];

        const potTypes = ["terracotta", "marble", "hanging"];
        var pot = potTypes[Math.floor(Math.random() * plantTypes.length)];

        increaseInventory(plant, pot);
    }

    async function updateTask(newTask) {
        await fetch('/api/tasks', {
            method: 'PUT',
            headers: { 'content-type': 'application/json' },
            body: JSON.stringify(newTask),
        });
    }

    async function increaseInventory(plantType, potType) {
        const plantQuantity = plantInventory[plantType] + 1;
        const potQuantity = potInventory[potType] + 1;

        foodInventory["water"] = foodInventory["water"] + 1 || 1;
        foodInventory["food"] = foodInventory["food"] + 1 || 1;

        await fetch('/api/inventory/plants', {
            method: 'PUT',
            headers: { 'content-type': 'application/json' },
            body: JSON.stringify({ plantType, plantQuantity }),
        });

        await fetch('/api/inventory/pots', {
            method: 'PUT',
            headers: { 'content-type': 'application/json' },
            body: JSON.stringify({ potType, potQuantity }),
        });

        await fetch('/api/inventory/food', {
            method: 'PUT',
            headers: { 'content-type': 'application/json' },
            body: JSON.stringify(foodInventory),
        });
    }
      
    return (
        <div className="list-item">
            <p>
                {/* <input type="checkbox" checked /> */}
                <input
                    type="checkbox"
                    checked={listItem.completed}
                    onChange={() => onCheck(listItem)}
                    // onChange={() => onToggle(listItem)}
                />
                <span className={listItem.completed ? "completed-task list-item-text" : "list-item-text"}>{listItem.text}</span>
                <br />
                {listItem.completed && <span>Completed by {listItem.completedUser}</span>}
            </p>
            {/* <img src={plant.imageUrl} alt="A plant growing in a pot" /> */}
        </div>
    );
};