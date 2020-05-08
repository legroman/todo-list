import {
    ADD_TODO,
    DELETE_TODO,
    FETCH_TODO_LIST,
    UPDATE_TODO_DONE,
    UPDATE_TODO_IMPORTANT,
    UPDATE_TODO_LABEL
} from "../types";

// const defaultState = {
//     todoList: [
//         {
//             label: "Drink some coffee",
//             important: false,
//             done: true,
//             id: 1
//         },
//         {
//             label: "Drink any milk",
//             important: false,
//             done: false,
//             id: 2
//         },
//         {
//             label: "Go to the cinema",
//             important: false,
//             done: false,
//             id: 3
//         }
//     ]
// };

const defaultState = {
    todoList: []
};



export const todoListReducer = (state = defaultState, action) => {
    switch (action.type) {
        case ADD_TODO:
            return {
                ...state, todoList: [...state.todoList, action.payload]
            };
        case DELETE_TODO:
            return {
                ...state, todoList: action.payload
            };
        case UPDATE_TODO_LABEL:
            return {
                ...state, todoList: state.todoList.map(todo => {
                    if (todo.key === action.key) return {...todo, label: action.payload};
                    return todo
                })
            };
        case UPDATE_TODO_DONE:
            return {
                ...state, todoList: state.todoList.map(todo => {
                    if (todo.key === action.key) return {...todo, done: !todo.done};
                    return todo
                })
            };
        case UPDATE_TODO_IMPORTANT:
            return {
                ...state, todoList: state.todoList.map(todo => {
                    if (todo.key === action.key) return {...todo, important: !todo.important};
                    return todo
                })
            };
        case FETCH_TODO_LIST:
            return {
                ...state, todoList: action.payload
            };
        default:
            return state
    }
};