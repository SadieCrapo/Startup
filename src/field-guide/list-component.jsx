import React from 'react';
import './list-item';

export const ListComponent = ({ listItem, oldIncreaseInventory }) => {
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

    function onCheck(listItem) {
        listItem.toggleComplete();
        updateTask(listItem);
        generateRandomKeys();
    }

    function generateRandomKeys() {
        const plantTypes = ["daisy", "monstera", "laceleaf"];
        var plant = plantTypes[Math.floor(Math.random() * plantTypes.length)];

        const potTypes = ["terracotta", "marble", "hanging"];
        var pot = potTypes[Math.floor(Math.random() * plantTypes.length)];

        increaseInventory(plant, pot);
    }

    async function updateTask(newTask) {
        // const date = new Date().toLocaleDateString();
        // const newScore = { name: userName, score: score, date: date };

        await fetch('/api/tasks', {
            method: 'PUT',
            headers: { 'content-type': 'application/json' },
            body: JSON.stringify(newTask),
        });

        // Let other players know the game has concluded
        // GameNotifier.broadcastEvent(userName, GameEvent.End, newScore);
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

        // <div className={`todo-item ${item.completed ? "completed" : ""}`}>
        //     <input
        //         type="checkbox"
        //         checked={item.completed}
        //         onChange={() => onToggle(item)}
        //     />
        //     <span>{item.text}</span>
        // </div>
    );
};