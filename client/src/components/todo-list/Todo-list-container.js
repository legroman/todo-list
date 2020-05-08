import React, {Component} from "react";
import {connect} from "react-redux";
import {TodoList} from "./Todo-list";
import {requestTodoList, setNewTodo, deleteTodo} from "../../store/todo-list/actions";
import {setCurrentTodoList, setCurrentPage} from "../../store/pagination/actions";

class TodoListContainer extends Component {
    componentDidMount = () => {
        this.props.requestTodoList()};

    todoList = () => {
        const {todoList, term, filter} = this.props;

        switch (filter) {
            case "Active":
                return todoList.filter(todo => {
                    if (!todo.done && term.trim()) {
                        return todo.label.toLowerCase().indexOf(term) !== -1
                    } else
                        return !todo.done;
                });
            case "Done":
                return todoList.filter(todo => {
                    if (todo.done && term.trim()) {
                        return todo.label.toLowerCase().indexOf(term) !== -1
                    } else
                        return todo.done;
                });
            case "Marked":
                return todoList.filter(todo => {
                    if (todo.important && term.trim()) {
                        return todo.label.toLowerCase().indexOf(term) !== -1
                    } else
                        return todo.important;
                });
            default:
                return todoList.filter(todo => {
                    if (term.trim()) {
                        return todo.label.toLowerCase().indexOf(term) !== -1
                    } else
                        return todo;
                });
        }
    };

    componentDidUpdate(prevProps, prevState, snapshot) {
        this.props.setCurrentTodoList(this.todoList());
        if (prevProps.filter !== this.props.filter) {
            if (
                this.props.filter === "All" ||
                this.props.filter === "Done" ||
                this.props.filter === "Active" ||
                this.props.filter === "Marked"
            )
                this.props.setCurrentPage(1);
        }
    }

    currentTodoList = () => {
        const todoList = this.todoList();
        const indexOfLastTodo = this.props.currentPage * this.props.todoListPerPage;
        const indexOfFirstTodo = indexOfLastTodo - this.props.todoListPerPage;
        return todoList.slice(indexOfFirstTodo, indexOfLastTodo);
    };

    render() {
        return <TodoList
            todoList={this.currentTodoList()}
            isEmpty={!this.props.todoList.length}
            loader={this.props.loader}
            alert={this.props.alertText.length}
        />
    }
}

const mapStateToProps = state => {
    return {
        todoList: state.todoList.todoList,
        filter: state.navigation.filter,
        term: state.searchForm.term,
        loader: state.loader.loader,
        alertText: state.alertText.alertText,
        currentPage: state.pagination.currentPage,
        todoListPerPage: state.pagination.todoListPerPage
    }
};

const mapDispatchToProps = {
    setNewTodo,
    deleteTodo,
    requestTodoList,
    setCurrentTodoList,
    setCurrentPage
};

export default connect(mapStateToProps, mapDispatchToProps)(TodoListContainer);