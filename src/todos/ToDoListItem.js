import React from 'react';
import './ToDoListItem.css';

const ToDoListItem = ({ todo, onRemovePressed }) => (
    <div className="list-item-container">
        <h3>{todo.text}</h3>
        <div className="button-container">
            <button className="completed-button">Mark as Completed</button>
            <button onClick={() => onRemovePressed(todo.text)} className="remove-button">Remove</button>
        </div>
    </div>
);

export default ToDoListItem;