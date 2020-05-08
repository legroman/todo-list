import React from "react";
import {Link} from "react-router-dom";
import "./header.css";

export const Header = () => {
    const onclickLogout = async () => {
        await window.location.reload();
        await localStorage.clear();
    };
    return (

        <div className="header">
            <div className="logout">

                <Link to="/login" onClick={onclickLogout}>
                    {/*<img className="logout"*/}
                    {/*     src="https://cdn0.iconfinder.com/data/icons/large-glossy-icons/512/Logout.png"*/}
                    {/*     alt="logout"/>*/}
                    {/*<i className="large material-icons">directions_walk</i>*/}
                    <button className="btn-floating btn-large waves-effect waves-light red">
                        <i className="large material-icons">close</i>
                    </button>
                </Link>

            </div>
            <div className="logo"><img className="logo-img" src="https://goo.su/0QrR" alt=""/></div>
        </div>
    )
};

// https://www.homesteadletters.com/wp-content/uploads/2010/07/yck7BoXcE.jpeg
// directions_run