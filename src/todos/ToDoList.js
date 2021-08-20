import React from 'react';
import { connect } from 'react-redux';
import ToDoListItem from './ToDoListItem';
import NewToDoForm from './NewToDoForm';
import { completeToDo, removeToDo } from './actions.js'

import './ToDoList.css';

const ToDoList = ({ todos = [], onRemovePressed, onCompletePressed }) => (
    <div className="list-wrapper">
        <NewToDoForm />
        {todos.map(todo => <ToDoListItem todo={todo} onRemovePressed={onRemovePressed} onCompletePressed={onCompletePressed} />)}
    </div>
);

const mapStateToProps = state => ({
    todos: state.todos
});

const mapDispatchToProps = dispatch => ({
    onRemovePressed: text => dispatch(removeToDo(text)),
    onCompletePressed: text => dispatch(completeToDo(text))
});

export default connect(mapStateToProps, mapDispatchToProps)(ToDoList);