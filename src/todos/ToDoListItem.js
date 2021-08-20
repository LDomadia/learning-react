import React from 'react';
import './ToDoListItem.css';

const ToDoListItem = ({ todo, onRemovePressed, onCompletePressed }) => (
    <div className="list-item-container">
        <h3>{todo.text}</h3>
        <div className="button-container">
            {todo.isCompleted ? null : 
                <button onClick={() => onCompletePressed(todo.text)} className="completed-button">Mark as Completed</button>}
            <button onClick={() => onRemovePressed(todo.text)} className="remove-button">Remove</button>
        </div>
    </div>
);

export default ToDoListItem;