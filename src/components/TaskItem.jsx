import React from "react";

const TaskItem = ({ task, handleTaskToggle,handleTaskItemRemove }) => {
    return (
        <div>
            <label>
                <input
                    type="checkbox"
                    checked={task.completed}
                    onChange={() => handleTaskToggle(task.id)}
                />
                {task.title}
            </label>
            <button onClick={()=>handleTaskItemRemove(task.id)}>Delete item</button>
        </div>
    );
};

export default TaskItem;