import React from "react";
import {Link} from "react-router-dom";
import "./navigation.css";
import SearchPanelContainer from "../search-panel/Search-panel-container";

export const Navigation = ({onClickAll, onClickDone, onClickActive, onClickMarked}) => {
    return (
        <div className="navigation">
            <div>
                <button
                    className="btn waves-effect waves-light"
                    type="submit"
                    onClick={onClickAll}
                >
                    ALL
                </button>
                <button
                    className="btn waves-effect waves-light"
                    type="submit"
                    onClick={onClickDone}
                >
                    DONE
                </button>
                <button
                    className="btn waves-effect waves-light"
                    type="submit"
                    onClick={onClickActive}
                >
                    ACTIVE
                </button>
                <button
                    className="btn waves-effect waves-light"
                    type="submit"
                    onClick={onClickMarked}
                >
                    MARKED
                </button>

                {/*<Link to="modal-form" className="btn-floating btn-large waves-effect waves-light yellow darken-4">*/}
                {/*    <i className="material-icons">add</i></Link>*/}

            </div>
            <div><SearchPanelContainer/></div>
        </div>
    )
};