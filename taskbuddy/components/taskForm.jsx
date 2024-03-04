import React, { useState } from 'react';

const TaskForm = () => {
    const [title, setTitle] = useState('');
    const [completed, setCompleted] = useState(false);
    const [dueDate, setDueDate] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
        // Perform CRUD operation here (create or update)
        // You can use the values of title, completed, and dueDate to interact with the database
    };

    return (
        <form onSubmit={handleSubmit}>
            <label>
                Task Title:
                <input
                    type="text"
                    value={title}
                    onChange={(e) => setTitle(e.target.value)}
                />
            </label>
            <label>
                Completion Status:
                <input
                    type="checkbox"
                    checked={completed}
                    onChange={(e) => setCompleted(e.target.checked)}
                />
            </label>
            <label>
                Due Date:
                <input
                    type="date"
                    value={dueDate}
                    onChange={(e) => setDueDate(e.target.value)}
                />
            </label>
            <button type="submit">Submit</button>
        </form>
    );
};

export default TaskForm;