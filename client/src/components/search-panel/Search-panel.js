import React from "react";
import "./search-panel.css";

export const SearchPanel = ({term, onChangeSearch}) => {
    return (
        <form className="col s12">

            <div className="input-field col s6">
                <i className="material-icons prefix">search</i>
                <textarea
                    id="icon_prefix4"
                    className="materialize-textarea"
                    value={term}
                    onChange={event => onChangeSearch(event.target.value)}
                >
                </textarea>
                <label htmlFor="icon_prefix4">search</label>

            </div>
        </form>
    )
};

// youtube_searched_for
//fa fa-search