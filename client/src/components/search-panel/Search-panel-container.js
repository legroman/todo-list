import React, {Component} from "react";
import {connect} from "react-redux";
import {SearchPanel} from "./Search-panel";
import {setSearchTerm} from "../../store/search-panel/actions";

class SearchPanelContainer extends Component{
    handleChange = event => this.props.setSearchTerm(event);

    render() {
        return <SearchPanel
            onChangeSearch={this.handleChange}
            term={this.props.term}/>;
    }
}

const mapStateToProps = state => {
    return {
        term: state.searchForm.term
    }
};

const mapDispatchToProps = {
    setSearchTerm
};

export default connect(mapStateToProps, mapDispatchToProps)(SearchPanelContainer);