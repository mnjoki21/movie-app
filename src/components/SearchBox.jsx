import React from "react";

const SearchBox = (props) => {
    return (
        <div >
            <input className="form-control"
                value={props.value}
                onChange={(event) => props.setSearchvalue(event.target.value)}
                placeholder="Type to search ...">
                
            </input>
        </div>

    )
}

export default SearchBox;
