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
        // .then((response) => response.text())
        // .then((responseText) => console.log(responseText))
        .then((plantInventory) => {
            setPlantInventory(plantInventory);
            // console.log(plantInventory);
        });
    }, []);

    React.useEffect(() => {
        fetch('/api/inventory/pots')
        .then((response) => response.json())
        // .then((response) => response.text())
        // .then((responseText) => console.log(responseText))
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

    async function onCheck(listItem) {
        const task = new ListItem(listItem._id, listItem.text, listItem.completed, listItem.completedUser);
        task.toggleComplete();
        // console.log(task);
        // console.log(task.completed);
        await updateTask(task);

        generateRandomKeys();

        trigger = trigger + 1;
        setTrigger(trigger);
    }

    function generateRandomKeys() {
        const plantTypes = ["daisy", "monstera", "laceleaf"];
        var plant = plantTypes[Math.floor(Math.random() * plantTypes.length)];

        const potTypes = ["terracotta", "marble", "hanging"];
        var pot = potTypes[Math.floor(Math.random() * plantTypes.length)];

        increaseInventory(plant, pot);
    }

    async function updateTask(newTask) {
        // console.log(newTask);
        const response = await fetch('/api/tasks', {
            method: 'PUT',
            headers: { 'content-type': 'application/json' },
            body: JSON.stringify(newTask),
        });
        // console.log('Trigger:', trigger);
        // trigger = trigger + 1;
        // console.log('Updated trigger:', trigger);
        // setTrigger(trigger);

        // console.log(trigger);
        // trigger = trigger + 1;
        // setTrigger(trigger);
        // setTrigger(prev => prev + 1);
    }

    async function increaseInventory(plantType, potType) {
        const plantQuantity = plantInventory[plantType] + 1;
        const potQuantity = potInventory[potType] + 1;

        console.log('Plant type:', plantType);
        console.log('Plant quantity:', plantQuantity);
        console.log('Pot type:', potType);
        console.log('Pot quantity:', potQuantity);

        foodInventory["water"] = foodInventory["water"] + 1 || 1;
        foodInventory["food"] = foodInventory["food"] + 1 || 1;

        console.log(foodInventory["water"]);

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
                <input
                    type="checkbox"
                    checked={listItem.completed}
                    onChange={() => onCheck(listItem)}
                />
                <span className={listItem.completed ? "completed-task list-item-text" : "list-item-text"}>{listItem.text}</span>
                <br />
                {listItem.completed && <span>Completed by {listItem.completedUser}</span>}
            </p>
        </div>
    );
};