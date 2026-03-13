import React, {useState } from 'react';

const TaskManager = () => {
    const [tasks, setTasks] = useState([]);
    const [value, setValue] = useState('');
    const [priority, setPriority] = useState('');
    const [view, setView] = useState(false);
    const options = ['Low', 'Medium', 'High'];
    const [warning, setWarning] = useState('');

    const handleChange = (e) => {
        setValue(e.target.value);
    };

    const handlePriorityChange = (e) => {
        setPriority(e.target.value);
    };

    const handleSubmit = (e) => {
        e.preventDefault();

        if (priority === '') {
            setWarning('Set the priority of the task');
            return;
        }

        const task = value.trim().toLowerCase();
        if (!task) return;

        setWarning('');
        setTasks((prevTasks) => [...prevTasks, {
            text: task,
             priority: priority
            }]);
        setValue('');
        setPriority('');
        setView(true);
    };

    return (
        <div>
            <form onSubmit={handleSubmit}>
                <input type="text" placeholder="Enter the Task : " value={value}  onChange={handleChange}/>
                <select id="priority" value={priority} onChange={handlePriorityChange}>
                    <option value="">Select an option</option>
                    {options.map((option) => (
                        <option key={option} value={option}>
                            {option}
                        </option>
                    ))}
                </select>
                <button type="submit">Add Task</button>
                {warning !== '' && <p> {warning} </p>}
                {view && (
                    <div>
                        {tasks.map((task, index) => (
                            <p key={index}>
                                {task.text} ({task.priority})
                            </p>
                        ))}
                    </div>
                )}
            </form>
        </div>
    );
};

export default TaskManager;