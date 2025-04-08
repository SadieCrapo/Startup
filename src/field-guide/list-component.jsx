import React from 'react';
import './list-item';

export const ListComponent = ({ listItem, increaseInventory }) => {
    function onCheck(listItem) {
        listItem.toggleComplete();
        generateRandomKeys();
    }

    function generateRandomKeys() {
        const plantTypes = ["daisy", "monstera", "laceleaf"];
        var plant = plantTypes[Math.floor(Math.random() * plantTypes.length)];

        const potTypes = ["terracotta", "marble", "hanging"];
        var pot = potTypes[Math.floor(Math.random() * plantTypes.length)];

        increaseInventory(plant, pot);
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