import React from "react";
import {Switch, Route, Redirect} from "react-router-dom";
import {Header} from "./components/header/Header";
import NavigationContainer from "./components/navigation/Navigation-container";
import TodoListContainer from "./components/todo-list/Todo-list-container";
import FormTodoContainer from "./components/register-form/Register-form-container";
import RegisterContainer from "./pages/auth/Register-container";
import LoginContainer from "./pages/auth/Login-container";
import PaginationContainer from "./components/pagination/Pagination-container";

export const useRoutes = (isAuthenticated) => {
    if (isAuthenticated) {
        return (
            <Switch>
                <Route path="/todo-list" exact>
                    <div>
                        <Header/>
                        <NavigationContainer/>
                        <TodoListContainer/>
                        <FormTodoContainer/>
                        <PaginationContainer/>
                    </div>
                </Route>
                <Redirect to="/todo-list"/>
            </Switch>
        )
    }
    return (
        <Switch>
            <Route path="/login" exact component={LoginContainer}/>
            <Route path="/register" exact component={RegisterContainer}/>
            <Redirect to="/login"/>
        </Switch>
    )
};