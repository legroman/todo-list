import React, {Component} from "react";
import {connect} from "react-redux";
import axios from "axios";
import {TodoItem} from "./Todo-item";
import {setRegisterForm, setLabelKey} from "../../store/register-form/actions";
import {setNewTodo, deleteTodo, updateTodoDone, updateTodoImportant} from "../../store/todo-list/actions";

class TodoItemContainer extends Component {
    handleDone = key => {
        const [todo] = this.props.todoList.filter(todo => todo.key === key);
        if (todo) this.props.updateTodoDone({...todo, done: !todo.done}, todo.key);

        axios.post('/api/todo-list/update/done', todo)
            .then(res => console.log(res.data))
            .catch(err => console.log(err.message))
    };

    handleImportant = key => {
        const [todo] = this.props.todoList.filter(todo => todo.key === key);
        if (todo) this.props.updateTodoImportant({...todo, important: !todo.important}, todo.key);

        axios.post('/api/todo-list/update/important', todo)
            .then(res => console.log(res.data))
            .catch(err => console.log(err.message))
    };

    handleDelete = key => {
        axios.delete('/api/todo-list/' + key)
            .then(res => console.log(res.data));

        const todo = this.props.todoList.filter(todo => todo.key !== key);

        this.props.deleteTodo(todo);
    };

    handleUpdate = key => {
      const [todo] = this.props.todoList.filter(todo => todo.key === key);
      this.props.setLabelKey(todo.key);
      this.props.setRegisterForm(todo.label);
    };

    render() {
        const {todo: {label, important, done, key, todoCreatedAt}} = this.props;
        return <TodoItem
            label={label}
            keyID={key}
            done={done}
            important={important}
            createdAt={todoCreatedAt}
            onClickDone={this.handleDone}
            onClickDelete={this.handleDelete}
            onClickUpdate={this.handleUpdate}
            onClickImportant={this.handleImportant}
        />;
    }
}

const mapStateToProps = state => {
    return {
        todoList: state.todoList.todoList,
        label: state.TodoForm.label
    }
};

const mapDispatchToProps = {
    setNewTodo,
    deleteTodo,
    updateTodoDone,
    updateTodoImportant,
    setRegisterForm,
    setLabelKey
};

export default connect(mapStateToProps, mapDispatchToProps)(TodoItemContainer);