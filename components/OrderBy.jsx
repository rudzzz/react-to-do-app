import React from "react";

const OrderBy = ({filters, setFilters, setOrderBy}) => {
    return (
        <div className="orderBy">
            <h2>Options:</h2>
            <div className="orderBy-options">
                <div className="status">
                    <p>Status:</p>
                    <select value={filters} onChange={ (event) => setFilters(event.target.value)}>
                        <option value="All">All</option>
                        <option value="Completed">Completed</option>
                        <option value="Uncompleted">Uncompleted</option>
                    </select>
                </div>
                <div>
                    <p>Order By:</p>
                    <button onClick={ () => setOrderBy("ASC") }>ASC</button>
                    <button onClick={ () => setOrderBy("DESC") }>DESC</button>
                </div>
            </div>
        </div>
    )
}

export default OrderBy;