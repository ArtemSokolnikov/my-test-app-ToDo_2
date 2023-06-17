import React from 'react';
import TaskItem from "./TaskItem";

const TaskList = ({ tasks, handleTaskToggle, handleTaskItemRemove }) => {

    return (
        <div>
            {tasks.map((task) => (
                <TaskItem key={task.id} task={task} handleTaskToggle={handleTaskToggle} handleTaskItemRemove = {handleTaskItemRemove}  />
            ))}
        </div>
    );
};

export default TaskList;
