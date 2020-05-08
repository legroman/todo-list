import React from "react";
import "./todo-item.css";

export const TodoItem = (
    {label, keyID, done, important, onClickDone, onClickImportant, onClickDelete, onClickUpdate, createdAt}
    ) => {
    return (
        <li>
            <div className={done ? "todo done" : "todo"}>

                <div className="text">
                    <label>
                        <input
                            type="checkbox"
                            checked={done}
                            onChange={() => onClickDone(keyID)}
                        />
                        <span className={important ? "todo-text important" : "todo-text"}>{label}</span>
                    </label><br/>
                    <i className="date d">{createdAt}</i>
                    {/*<i className="Tiny material-icons xxx" title="Этот текст будет показан при наведении">date_range</i>*/}
                </div>

                <div>
                    <i
                        className="material-icons Dark purple-text"
                        onClick={() => onClickUpdate(keyID)}
                    >
                        edit
                    </i>
                    <i
                        className="material-icons Dark blue-text"
                        onClick={() => onClickImportant(keyID)}
                    >
                        {important ? "star" : "star_border"}
                    </i>
                    <i
                        className="material-icons red-text"
                        onClick={() => onClickDelete(keyID)}
                    >
                        delete
                    </i>
                </div>
            </div>
        </li>
    )
};

