import React, {Component} from "react";
import {connect} from "react-redux";
import axios from "axios";
import {Register} from "./Register";
import {setUsername, setPassword, setConfirmPassword} from "../../store/auth-register/actions";
import {setMessage} from "../../store/message/actions";

class RegisterContainer extends Component {
    handleChangeUsername = event => this.props.setUsername(event);
    handleChangePassword = event => this.props.setPassword(event);
    handleChangeConfirmPassword = event => this.props.setConfirmPassword(event);

    handleOnSubmit = event => {
        event.preventDefault();
        const {username, password, confirmPassword} = this.props.singUp;

        const newUser = {username, password, confirmPassword};

        axios.post('/api/register', newUser)
            .then(res => {
                window.M.toast({html: res.data.message});

                this.props.setUsername("");
                this.props.setPassword("");
                this.props.setConfirmPassword("");

                setTimeout(() => {
                    window.location = 'http://localhost:3000/login';
                }, 2000);
            })
            .catch(err => window.M.toast({html: err.response.data.message}));


        this.props.setMessage("test test");
    };

    render() {
        const {username, password, confirmPassword} = this.props.singUp;
        return <Register
            username={username}
            password={password}
            confirmPassword={confirmPassword}
            onSubmitForm={this.handleOnSubmit}
            onchangeUser={this.handleChangeUsername}
            onchangePassword={this.handleChangePassword}
            onchangeConfirmPassword={this.handleChangeConfirmPassword}
        />;
    }
}

const mapStateToProps = state => {
    return {
        singUp: state.registerForm,
        message: state.message
    }
};

const mapDispatchToProps = {
    setUsername,
    setPassword,
    setConfirmPassword,
    setMessage
};

export default connect(mapStateToProps, mapDispatchToProps)(RegisterContainer);