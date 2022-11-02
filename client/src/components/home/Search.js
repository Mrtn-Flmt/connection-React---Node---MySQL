import React from 'react';

const Search = () => {
    return (
        <nav className="navbar bg-primary">
            <div class="container">
                
            <form className="row col-12 col-sm-12 col-md-12 justify-content-center m-0">
                <div className="row col-xs-12 col-sm-12 col-md-5 p-3">
                    <input className="form-control" type="search" placeholder="Quoi ?" aria-label="Search" />
                </div>
                <div className="row col-xs-12 col-sm-12 col-md-5 p-3">
                    <input className="form-control" type="search" placeholder="Où ?" aria-label="Search" />
                </div>
                <div className="d-flex justify-content-center">
                    <button className="btn btn-dark m-2 p-2" type="submit">Search</button>
                </div>
            </form>
            </div>
        </nav>
    );
};

export default Search;