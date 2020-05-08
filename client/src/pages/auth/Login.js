import React from "react";
import {Link} from "react-router-dom";
import "./auth.css";

export const Login = ({username, password, onChangeUser, onChangePassword, onSubmitForm}) => {
    return (
        <div>
            <img src="https://goo.su/0Qxu" alt="logo"/>
            <div className="auth">
                <div className="row">
                    <div className="col s6 offset-s3 z-depth-1 inner" id="panell">
                        <h3 id="title">Login Form</h3>
                        <form onSubmit={onSubmitForm}>
                            <div className="input-field" id="username">
                                <i className="material-icons prefix">account_circle</i>
                                <input
                                    id="icon_username"
                                    type="text"
                                    className="validate"
                                    value={username}
                                    onChange={event => onChangeUser(event.target.value)}
                                />
                                <label htmlFor="icon_username">Username</label>
                            </div>
                            <div className="input-field" id="password">
                                <i className="material-icons prefix">lock_outline</i>
                                <input
                                    id="icon_password"
                                    type="password"
                                    className="validate"
                                    value={password}
                                    onChange={event => onChangePassword(event.target.value)}
                                />
                                <label htmlFor="icon_password">Password</label>
                            </div>
                            <div>
                                <button
                                    className="btn waves-effect waves-light"
                                    id="loginbtn"
                                    type="submit"
                                    name="action"
                                >
                                    Sing In
                                </button>
                                <p className="new-account">
                                    <Link to="/register" className="a">Don't have an account?</Link>
                                </p>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    )
};