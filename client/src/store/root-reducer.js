import {combineReducers} from "redux";
import {todoListReducer} from "./todo-list/reducer";
import {registerFormReducer} from "./register-form/reducer";
import {navigationReducer} from "./navigation/reducer";
import {searchFormReducer} from "./search-panel/reducer";
import {loaderReducer} from "./loader/reducer";
import {alertReducer} from "./alert/reducer";
import {registerReducer} from "./auth-register/reducer";
import {messageReducer} from "./message/reducer";
import {userReducer} from "./user/reducer";
import {paginationReducer} from "./pagination/reducer";

export default combineReducers({
    todoList: todoListReducer,
    navigation: navigationReducer,
    TodoForm: registerFormReducer,
    searchForm: searchFormReducer,
    loader: loaderReducer,
    alertText: alertReducer,
    registerForm: registerReducer,
    message: messageReducer,
    user: userReducer,
    pagination: paginationReducer
})