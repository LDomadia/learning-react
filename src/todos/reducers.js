import { CREATE_TODO, REMOVE_TODO } from './actions.js';

export const todos = (state = [], action) => {
    const { type, payload} = action;

    switch (type) {
        case CREATE_TODO: {
            const { text } = payload;
            const newToDo = {
                text,
                isComplete = false,
            };
            return state.concat(newToDo);
        }
        case REMOVE_TODO: {
            const { text } = payload;
            return state.filter(todo => todo.text !== text);
        }
        default: {
            return state;
        }
    }
}