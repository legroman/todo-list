import React, {Component} from "react";
import {connect} from "react-redux";
import {Navigation} from "./Navigation";
import {setNavigationFilter} from "../../store/navigation/actions";

class NavigationContainer extends Component{
    handleClickAll = event => this.props.setNavigationFilter("All");

    handleClickDone = event => this.props.setNavigationFilter("Done");

    handleClickActive = event => this.props.setNavigationFilter("Active");

    handleClickMarked = event => this.props.setNavigationFilter("Marked");

    render() {
        return <Navigation
            onClickAll={this.handleClickAll}
            onClickDone={this.handleClickDone}
            onClickActive={this.handleClickActive}
            onClickMarked={this.handleClickMarked}
        />;
    }
}

const mapStateToProps = state => {
    return {}
};

const mapDispatchToProps = {
    setNavigationFilter
};

export default connect(mapStateToProps, mapDispatchToProps)(NavigationContainer);
