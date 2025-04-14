import React from 'react';
import './list-item';

export const ListComponent = ({ listItem, increaseInventory }) => {
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

        await fetch('/tasks', {
            method: 'PUT',
            headers: { 'content-type': 'application/json' },
            body: JSON.stringify(newTask),
        });

        // Let other players know the game has concluded
        // GameNotifier.broadcastEvent(userName, GameEvent.End, newScore);
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