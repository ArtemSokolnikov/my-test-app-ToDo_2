import React, {useState} from "react";
import TaskList from "./TaskList";

const TaskForm = ({ handleTaskAdd, handleTaskRemove }) => {
    const [title, setTitle] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
        if (title.trim() === '') {
            return;
        }
        handleTaskAdd(title);
        setTitle('');
    };
    return (
        <form onSubmit={handleSubmit}>
            <input
                type="text"
                value={title}
                onChange={(e) => setTitle(e.target.value)}
                placeholder="Insert task"
            />
            <button type="submit">Add task</button>
            <button onClick={handleTaskRemove}>Delete task</button>
        </form>
    );
};

export default TaskForm;