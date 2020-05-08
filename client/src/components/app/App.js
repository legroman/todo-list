import React, {Component} from 'react';
import {BrowserRouter as Router} from "react-router-dom";
import {connect} from "react-redux";
import {useRoutes} from "../../routes";
import {logout, login} from "../../store/user/actions";
import './app.css';

class App extends Component {
    componentDidUpdate(prevProps, prevState, snapshot) {
        localStorage.setItem('userData', JSON.stringify(this.props.user));

    }

    render() {
        return (
            <Router>
                <div className="App container">
                    {useRoutes(this.props.isAuthenticated || !!localStorage.getItem('userData'))}
                </div>
            </Router>
        );
    }
}

const mapStateToProps = state => {
    return {
        user: state.user,
        isAuthenticated: state.user.isAuthenticated
    }
};

const mapDispatchToProps = {
    login,
    logout
};

export default connect(mapStateToProps, mapDispatchToProps)(App);
