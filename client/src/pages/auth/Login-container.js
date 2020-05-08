import React, {Component} from "react";
import {connect} from "react-redux";
import axios from "axios";
import {Login} from "./Login";
import {login, logout} from "../../store/user/actions";
import {setUsername, setPassword} from "../../store/auth-register/actions";

class LoginContainer extends Component {
    handleChangeUsername = event => this.props.setUsername(event);
    handleChangePassword = event => this.props.setPassword(event);

    handleOnSubmit = event => {
        event.preventDefault();
        const {username, password} = this.props.singIn;

        const user = {username, password};

        axios.post('/api/login', user)
            .then(res => {
                this.props.login({...res.data, isAuthenticated: true});
                this.props.setUsername("");
                this.props.setPassword("");
            })
            .catch(err => window.M.toast({html: err.response.data.message}));
    };

    render() {
        const {username, password} = this.props.singIn;
        return <Login
            username={username}
            password={password}
            onSubmitForm={this.handleOnSubmit}
            onChangeUser={this.handleChangeUsername}
            onChangePassword={this.handleChangePassword}
        />;
    }
}

const mapStateToProps = state => {
    return {
        singIn: state.registerForm,
        message: state.message
    }
};

const mapDispatchToProps = {
    setUsername,
    setPassword,
    login,
    logout
};

export default connect(mapStateToProps, mapDispatchToProps)(LoginContainer);