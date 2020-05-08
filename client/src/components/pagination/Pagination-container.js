import React, {Component} from "react";
import {connect} from "react-redux";
import {Pagination} from "./Pagination";
import {setCurrentPage} from "../../store/pagination/actions";

class PaginationContainer extends Component {
    getPageNumbers = () => {
        const {currentTodoList, todoListPerPage} = this.props;
        const pageNumbers = [];

        for (let i = 1; i <= Math.ceil(currentTodoList.length / todoListPerPage); i++) {
            pageNumbers.push(i);
        }
        return pageNumbers.length > 1 ?  pageNumbers : [];
    };

    handlePaginate = page => {
        this.props.setCurrentPage(page)
    };

    render() {
        return <Pagination
            pageNumbers={this.getPageNumbers()}
            paginate={this.handlePaginate}
            currentPage={this.props.currentPage}
        />;
    }
}

const mapStateToProps = state => {
    return {
        currentTodoList: state.pagination.currentTodoList,
        todoListPerPage: state.pagination.todoListPerPage,
        currentPage: state.pagination.currentPage
    }
};

const mapDispatchToProps = {
    setCurrentPage
};

export default connect(mapStateToProps, mapDispatchToProps)(PaginationContainer);