import React from 'react';

const ToDoListItem = ({ todo }) => (
    <div className="list-item-container">
        <h3>{todo.text}</h3>
        <div className="button-container">
            <button className="completed-button">Mark as Completed</button>
            <button className="remove-button">Remove</button>
        </div>
    </div>
);

export default ToDoListItem;