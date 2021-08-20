import React, { useState } from 'react';
import { connect  } from 'react-redux';
import { createToDo } from './actions.js'
import './NewToDoForm.css';

const NewToDoForm = ({ todos, onCreatePressed }) => {
    const [inputValue, setInputValue] = useState('');
    return (
        <div className="new-todo-form">
            <input 
                className="new-todo-input" 
                type="text"
                placeholder="Enter new to do item here"
                value={inputValue}
                onChange={e => setInputValue(e.target.value)} />
            <button 
                onClick={() => {
                    const isDulpicateText = todos.some(todo => todo.text === inputValue);
                    if(!isDulpicateText) {
                        onCreatePressed(inputValue);
                        setInputValue(''); 
                    }
                }}
                className="new-todo-button">
                Create To Do
            </button>
        </div>
    );
};

const mapStateToProps = state => ({
    todos: state.todos
});

const mapDispatchToProps = dispatch => ({
    onCreatePressed: text => dispatch(createToDo(text))
});

export default connect(mapStateToProps, mapDispatchToProps)(NewToDoForm);