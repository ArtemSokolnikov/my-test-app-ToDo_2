import React, {useState, useEffect} from 'react';
import TaskForm from "./components/TaskForm";
import TaskList from "./components/TaskList";

const App = () => {
    const initialTasks = JSON.parse(localStorage.getItem('tasks'));
    const [tasks, setTasks] = useState(initialTasks||[]);

    const handleTaskAdd = (title) => {
        const newTask = {
            id: Date.now(),
            title: title,
            completed: false,
        };
        setTasks((prevTasks) => [...prevTasks, newTask]);
    };

    const handleTaskToggle = (id) => {
        setTasks((prevTasks) =>
            prevTasks.map((task) => {
                if (task.id === id) {
                    return {...task, completed: !task.completed};
                }
                return task;
            })
        );
    };

    const handleTaskRemove = ()=>{
        setTasks(prevTasks =>prevTasks.slice(0,-1))
    }

    const handleTaskItemRemove = (id) => {
        setTasks((prevTasks) => prevTasks.filter((task) => task.id !== id));
    };

    useEffect(() => {
        const storedTasks = localStorage.getItem('tasks');
        console.log('storedTasks',storedTasks)
        if (storedTasks) {
            setTasks(JSON.parse(storedTasks));
        }
    }, []);

    useEffect(() => {
        localStorage.setItem('tasks', JSON.stringify(tasks));
    }, [tasks]);

    return (
        <div>
            <h1>ToDo</h1>
            <TaskForm handleTaskAdd={handleTaskAdd} handleTaskRemove = {handleTaskRemove} />
            <TaskList tasks={tasks} handleTaskToggle={handleTaskToggle} handleTaskItemRemove={handleTaskItemRemove}/>
        </div>
    );
};

export default App;