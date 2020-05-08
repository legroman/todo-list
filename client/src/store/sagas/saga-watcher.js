import {takeEvery, put, call} from "redux-saga/effects";
import axios from "axios";
import {FETCH_TODO_LIST, REQUEST_TODO_LIST} from "../../store/types";
import {hideLoader, showLoader} from "../loader/actions";
import {showAlert} from "../alert/actions";

export function* sagaWatcher() {
    yield takeEvery(REQUEST_TODO_LIST, sagaWorker);
}

function* sagaWorker() {
    try {
        yield put(showLoader(true));
        const payload = yield call(fetchTodoList);
        yield put({type: FETCH_TODO_LIST, payload});
        yield put(hideLoader(false));
    } catch (e) {
        yield put(showAlert("Something went wrong!!!"));
        yield put(hideLoader(false));
    }
}

const fetchTodoList = () => {
    const userData = JSON.parse(localStorage.getItem('userData'));

    return axios.get(
        '/api/todo-list', { headers: {"Authorization" : `Bearer ${userData.token}`} })
        .then(res => res.data)
        .then(res => res.map(todo => (
            {
                label: todo.label,
                important: todo.important,
                done: todo.done,
                todoCreatedAt: todo.todoCreatedAt,
                key: todo.key
            })))
    // return fetch('https://jsonplaceholder.typicode.com/todos/?_limit=9')
    //     .then(response => response.json())
    //     .then(json => json.map(todo => ({label: todo.title, important: false, done: todo.completed, id: todo.id})))
};
