import React from "react";
import "./register-form.css";

export const RegisterForm = ({label, onChangeForm, onSubmitForm}) => {
    return (
        <form className="col s12">
            <div className="row">
                <div className="input-field col s6 form">
                    <i className="material-icons prefix">mode_edit</i>
                    <input
                        type="text"
                        id="icon_prefix2"
                        className="materialize-textarea"
                        value={label}
                        onChange={event => onChangeForm(event.target.value)}
                        onKeyDown={onSubmitForm}
                    >
                    </input>
                    <label htmlFor="icon_prefix2"> </label>
                </div>
            </div>
        </form>
    )
};