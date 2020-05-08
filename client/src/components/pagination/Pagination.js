import React from "react";
import "./pagination.css";

export const Pagination = ({pageNumbers, paginate, currentPage}) => {
    return (
        <div className="wrapper">
            <ul className="pagination">
                {pageNumbers.map(page =>
                    <li className={currentPage === page ? "active  red lighten-2" : "waves-effect"} key={page}>
                        <a onClick={() => paginate(page)}>{page}</a></li>)}
            </ul>
        </div>
    )
};