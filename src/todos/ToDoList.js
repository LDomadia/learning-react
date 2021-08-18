import React from 'react';
import ToDoListItem from './ToDoListItem';
import NewToDoForm from './NewToDoForm';

import './ToDoList.css';

const ToDoList = ({ todos = [{ text: "No"}, { text: "Hello my name is Leena Domadia and I am short and stout and have dark skin and black hair and I'm strange, Dr. Strange"}] }) => (
    <div className="list-wrapper">
        <NewToDoForm />
        {todos.map(todo => <ToDoListItem todo={todo} />)}
    </div>
);

export default ToDoList;