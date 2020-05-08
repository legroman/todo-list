import {
    ADD_TODO,
    DELETE_TODO,
    FETCH_TODO_LIST,
    REQUEST_TODO_LIST,
    UPDATE_TODO_DONE,
    UPDATE_TODO_IMPORTANT, UPDATE_TODO_LABEL
} from "../types";
import {hideLoader, showLoader} from "../loader/actions";
import {showAlert} from "../alert/actions";

export const setNewTodo = todo => {
    return{
        type: ADD_TODO,
        payload: todo
    }
};

export const deleteTodo = todo => {
    return{
        type: DELETE_TODO,
        payload: todo
    }
};

export const updateTodoLabel = (label, key) => {
  return{
      type: UPDATE_TODO_LABEL,
      payload: label,
      key: key
  }
};

export const updateTodoDone = (todo, key) => {
    return{
        type: UPDATE_TODO_DONE,
        payload: todo,
        key: key
    }
};

export const updateTodoImportant = (todo, key) => {
    return{
        type: UPDATE_TODO_IMPORTANT,
        payload: todo,
        key: key
    }
};

export const requestTodoList = () => {
  return {
      type: REQUEST_TODO_LIST,
  }
};

// export const fetchTodoList = () => {
//     return async dispatch => {
//         try {
//             dispatch(showLoader(true));
//             const response = await fetch('https://jsonplaceholder.typicode.com/todos/?_limit=9');
//             const json = await response.json();
//             const todoList = await json.map(todo => ({label: todo.title, important: false, done: todo.completed, id: todo.id}));
//             setTimeout(() => {
//                 dispatch({type: FETCH_TODO_LIST, payload: todoList});
//                 dispatch(hideLoader(false));
//             },2000);
//         }catch (e) {
//             dispatch(showAlert("Something went wrong!!!"));
//             dispatch(hideLoader(false))
//         }
//     }
// };