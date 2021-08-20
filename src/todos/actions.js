export const CREATE_TODO = 'CREATE_TODO';
export const createToDo = text => ({
    type: CREATE_TODO,
    payload: { text }
});

export const REMOVE_TODO = 'REMOVE_TODO';
export const removeToDo = text => ({
    type: REMOVE_TODO,
    payload: { text }
});

export const COMPLETE_TODO = 'COMPLETE_TODO';
export const completeToDo = text => ({
    type: COMPLETE_TODO,
    payload: { text }
});