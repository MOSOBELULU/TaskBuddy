import React from 'react';

const TaskList = ({ tasks }) => {
    return (
        <div>
            {tasks.map((task) => (
                <div key={task.id}>
                    <h3>{task.title}</h3>
                    <p>Completed: {task.completed ? 'Yes' : 'No'}</p>
                   
                </div>
            ))}
        </div>
    );
};

export default TaskList;