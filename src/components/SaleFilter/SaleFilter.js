import React, { useState } from 'react';
import './SaleFilter.css';

const SaleFilter = ({ SearchRes }) => {
  /* return (
        <div>
            <nav className="navbar navbar-expand-lg navbar-dark bg-dark sale-filter">
            <form class="form-inline">
                <input class="form-control mr-sm-2" type="search" placeholder="Караганда" aria-label="Search"/>
                <button class="btn btn-success my-2 my-sm-0" type="submit">Найти</button>
            </form>
            </nav>
        </div>
    ) */

  const [searchInput, setSearchInput] = useState('');
  const handleChange = val => {
    setSearchInput(val);
    console.log(val);
  };

  return (
    <div>
      <nav className="navbar navbar-expand-lg navbar-dark bg-dark sale-filter">
        <form className="form-inline">
          <input
            className="form-control mr-sm-2"
            type="search"
            placeholder="Караганда"
            aria-label="Search"
            value={searchInput}
            onChange={e => handleChange(e.target.value)}
          />
          <button className="btn btn-success my-2 my-sm-0" type="submit">
            Найти
          </button>
        </form>
      </nav>
    </div>
  );
};

export default SaleFilter;
