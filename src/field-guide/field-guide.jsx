import React from 'react';
import './field-guide.css';
import { ListItem } from './list-item';
import { ListComponent } from './list-component';
// import '../app.css';

// import './list-component';
// import './list-item';

export function Field_Guide({ taskList, addTask, increaseInventory }) {
    // export function Field_Guide() {
    const [list, setList] = React.useState([]);
    const [task, setTask] = React.useState("");
    const [trigger, setTrigger] = React.useState(0);

    // Demonstrates calling a service asynchronously so that
    // React can properly update state objects with the results.
    React.useEffect(() => {
      fetch('/api/tasks')
        .then((response) => response.json())
        .then((list) => {
          setList(list);
        });
    }, [trigger]);

    const handleChange = (event) => {
        setTask(event.target.value);
    };

    const handleSubmit = (event) => {
        event.preventDefault(); // Prevent page reload

        const newTask = new ListItem(task);
        // addTask(newTask)
        saveTask(newTask);
        setTask("");

        setTrigger(trigger + 1);
    };

    async function saveTask(newTask) {
        // const date = new Date().toLocaleDateString();
        // const newScore = { name: userName, score: score, date: date };

        await fetch('/api/tasks', {
            method: 'POST',
            headers: { 'content-type': 'application/json' },
            body: JSON.stringify(newTask),
        });

        // Let other players know the game has concluded
        // GameNotifier.broadcastEvent(userName, GameEvent.End, newScore);
    }

    return (
        // <main className="container-fluid bg-secondary text-center">
        <main className='field-guide-main'>
            <div className="list">
                {list.map((listItem) => (
                    <ListComponent listItem={listItem} increaseInventory={increaseInventory} trigger={trigger} setTrigger={setTrigger} />
                ))}
            </div>

            <div className="tools">
                <h3>New Task</h3>

                <form onSubmit={handleSubmit} onChange={handleChange}>
                    <textarea
                        name="task"
                        rows="21"
                        cols="30"
                        value={task}
                        onChange={handleChange}
                    />
                    <br />
                    <input type="submit" className="btn action" />
                </form>
            </div>
        </main>
    );
}