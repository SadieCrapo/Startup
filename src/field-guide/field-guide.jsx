import React from 'react';
import './field-guide.css';
import { ListItem } from './list-item';
import { ListComponent } from './list-component';
// import '../app.css';

// import './list-component';
// import './list-item';

export function Field_Guide({list, addTask, increaseInventory}) {
// export function Field_Guide() {
    const [task, setTask] = React.useState("");

    const handleChange = (event) => {
        setTask(event.target.value);
    };

    const handleSubmit = (event) => {
        event.preventDefault(); // Prevent page reload
        console.log("Submitted message:", task);

        const newTask = new ListItem(task);
        // list.push(newTask);
        // setList(list);
        addTask(newTask)
        setTask("");
        // localStorage.setItem('list', list);
    };

    return (
        // <main className="container-fluid bg-secondary text-center">
        <main className='field-guide-main'>
            <div className="list">
                {list.map((listItem) => (
                    <ListComponent listItem={listItem} increaseInventory={increaseInventory} />
                ))}

                {/* <div className="list-item">
                    <p>
                        <input type="checkbox" value="checkbox1" />
                        Fold Laundry
                    </p>
                </div>

                <div className="list-item">
                    <p>
                        <input type="checkbox" value="checkbox1" />
                        Grocery Shopping
                    </p>
                </div>

                <div className="list-item">
                    <p>
                        <input type="checkbox" value="checkbox1" checked />
                        <s>Study</s>
                        <br />
                        Completed by MysteryUser
                    </p>
                </div>

                <div className="list-item">
                    <p>
                        <input type="checkbox" value="checkbox1" checked />
                        <s>Wash Dishes</s>
                        <br />
                        Completed by SecretUser16
                    </p>
                </div> */}
            </div>

            <div className="tools">
                <h3>New Task</h3>
                
                {/* <form action="/action_page.php"> */}
                <form onSubmit={handleSubmit} onChange={handleChange}>
                    <textarea
                        name="task"
                        rows="21"
                        cols="30"
                        value={task}
                        onChange={handleChange}
                        // onChange={setTask(event.target.value)} // Update state on input
                    />
                    <br />
                    <input type="submit" className="btn action" />
                </form>

                {/* <div>{list}</div> */}

                {/* <textarea name="message" rows="21" cols="30"></textarea>
                <br></br>
                <input type="submit" className="btn action" /> */}
                {/* </form> */}

                {/* <button className="action-button btn action">New Task</button> */}
            </div>
        </main>
    );
}