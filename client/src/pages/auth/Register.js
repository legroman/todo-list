import React from "react";
import {Link} from "react-router-dom";
import "./auth.css";

export const Register = (
    {
        username,
        password,
        confirmPassword,
        onchangeUser,
        onchangePassword,
        onchangeConfirmPassword,
        onSubmitForm
    }) => {
    return (
        <div className="auth">
            <img src="https://goo.su/0Qxu" alt="logo"/>
            <div className="row">
                <div className="col s6 offset-s3 z-depth-1 inner" id="panell">
                    <h3 id="title">Register Form</h3>
                    <form onSubmit={onSubmitForm}>
                        <div className="input-field" id="username">
                            <i className="material-icons prefix">account_circle</i>
                            <input
                                id="icon_username"
                                type="text"
                                className="validate"
                                value={username}
                                onChange={event => onchangeUser(event.target.value)}
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
                                onChange={event => onchangePassword(event.target.value)}
                            />
                            <label htmlFor="icon_password">Password</label>
                        </div>
                        <div className="input-field" id="password">
                            <i className="material-icons prefix">lock_outline</i>
                            <input
                                id="icon_confirm-password"
                                type="password"
                                className="validate"
                                value={confirmPassword}
                                onChange={event => onchangeConfirmPassword(event.target.value)}
                            />
                            <label htmlFor="icon_confirm-password">Confirm password</label>
                        </div>
                        <div>
                            <button
                                className="btn waves-effect waves-light"
                                id="loginbtn"
                                type="submit"
                            >
                                Sing Up
                            </button>
                            <p className="new-account">
                                <Link to="/login" className="a">Already have an account?</Link>
                            </p>
                        </div>
                    </form>
                </div>
            </div>

        </div>
    )
};