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

    React.useEffect(() => {
      fetch('/api/tasks')
        .then((response) => response.json())
        .then((list) => {            
            // const simplifiedList = list.map(item => item.task);
            // setList(simplifiedList);
            console.log(trigger);
            setList(list);
        });
    }, [trigger]);

    const handleChange = (event) => {
        setTask(event.target.value);
    };

    const handleSubmit = async (event) => {
        event.preventDefault(); // Prevent page reload

        // const newTask = new ListItem(task);
        // saveTask(newTask);
        await saveTask(task);
        // console.log(JSON.stringify(newTask));
        setTask("");

        setTrigger(prev => prev + 1);
    };

    async function saveTask(newTask) {
        // console.log(newTask);
        // const response = await fetch('/api/tasks', {
        await fetch('/api/tasks', {
            method: 'POST',
            headers: { 'content-type': 'application/json' },
            body: JSON.stringify({ text: newTask }),
            // body: newTask,
        });
        // setTrigger(prev => prev + 1);
        // const responseText = await response.text();
        // console.log('Response body:', responseText);
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