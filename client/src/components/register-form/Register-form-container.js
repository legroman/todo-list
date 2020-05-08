import React, {Component} from "react";
import {connect} from "react-redux";
import axios from "axios";
import {RegisterForm} from "./Register-form";
import {setNewTodo} from "../../store/todo-list/actions";
import {setRegisterForm, setLabelKey} from "../../store/register-form/actions";
import {updateTodoLabel} from "../../store/todo-list/actions";

class RegisterFormContainer extends Component {
    setDate = () => {
        const date = new Date();
        const day = date.getDate() < 10 ? `0${date.getDay()}` :date.getDate();
        const month = date.getMonth() < 10 ? `0${date.getMonth()}` :date.getMonth();
        const hours = date.getHours() < 10 ? `0${date.getHours()}` :date.getHours();
        const minutes = date.getMinutes() < 10 ? `0${date.getMinutes()}` :date.getMinutes();
        return `${day}-${month}-${date.getFullYear()} ${hours}:${minutes}`
    };

    handleChange = event => this.props.setRegisterForm(event);

    handleSubmit = event => {
        if (event.key === 'Enter') {
            event.preventDefault();


            if (this.props.updateKey) {
                const [todo] = this.props.todoList.filter(todo => todo.key === this.props.updateKey);
                this.props.updateTodoLabel(this.props.form, todo.key);
                const updatedTodo = {
                  label: this.props.form,
                  important: todo.important,
                  done: todo.done,
                  todoCreatedAt: todo.todoCreatedAt,
                  key: todo.key
                };
                axios.post('/api/todo-list/update/label', updatedTodo)
                    .then(res => console.log(res.data))
                    .catch(err => console.log(err.message));
                this.props.setLabelKey(0);
                this.props.setRegisterForm('');
                return
            }

            const newTodo = {
                label: this.props.form,
                important: false,
                done: false,
                todoCreatedAt: this.setDate(),
                key: Date.now()
            };

            if (newTodo.label && newTodo.label.length < 110) this.props.setNewTodo(newTodo);

            this.props.setRegisterForm('');

            const userData = JSON.parse(localStorage.getItem('userData'));

            axios.post('/api/todo-list/add', newTodo, {headers: {"Authorization": `Bearer ${userData.token}`}})
                .then(res => console.log(res.data))
                .catch(err => window.M.toast({html: err.response.data.message}))
        }
    };

    render() {
        return <RegisterForm
            onChangeForm={this.handleChange}
            onSubmitForm={this.handleSubmit}
            label={this.props.form}
        />;
    }
}

const mapStateToProps = state => {
    return {
        todoList: state.todoList.todoList,
        form: state.TodoForm.label,
        updateKey: state.TodoForm.updateKey
    }
};

const mapDispatchToProps = {
    setNewTodo,
    setRegisterForm,
    updateTodoLabel,
    setLabelKey
};

export default connect(mapStateToProps, mapDispatchToProps)(RegisterFormContainer);