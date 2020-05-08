import React from "react";
import TodoItemContainer from "../todo-item/Todo-item-container";
import {Loader} from "../loader/Loader"
import {Alert} from "../alert/Alert";
import "./todo-list.css";

export const TodoList = ({loader, alert, isEmpty, todoList}) => {
    return (alert ?
            <Alert/>
            : loader ?
                <Loader/>
                : isEmpty ?
                    <div className="row blockEmpty">
                        <div className="col s12 m5">
                            <div className="card-panel teal">
                                <span className="white-text no-todo">This to-do list is empty.</span>
                            </div>
                        </div>
                    </div>
                    : !todoList.length ?
                        <div className="is-empty"><h3>¯\_(ツ)_/¯</h3></div>
                        :
                        <div className="todo-list">
                            <ul className="collection with-header">
                                {todoList.map(todo => <TodoItemContainer todo={todo} key={todo.key}/>)}
                            </ul>
                        </div>

    )
};