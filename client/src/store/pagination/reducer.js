import {CURRENT_PAGE, FILTERED_TODO_LIST} from "../types";

const defaultState = {
    currentTodoList: [],
    currentPage: 1,
    todoListPerPage: 10
};

export const paginationReducer = (state = defaultState, action) => {
    switch (action.type) {
        case CURRENT_PAGE:
            return {
                ...state, currentPage: action.payload
            };
        case FILTERED_TODO_LIST:
            return {
                ...state, currentTodoList: action.payload
            };
        default:
            return state;
    }
};
