import React, { useState } from 'react';

import { publications } from '../../constants';
import { FeaturedDeals, AllDeals } from '../../components';
import './Sale.css';

const Sale = () => {
  const [searchInput, setSearchInput] = useState('');

  return (
    <div className="container-sale">
      <h1> Популярные предложения </h1>
      <div className="container-top-deals">
        <FeaturedDeals />
        <FeaturedDeals />
        <FeaturedDeals />
      </div>

      <h1> Все объявления</h1>
      <div>
        <nav className="navbar navbar-expand-lg navbar-dark bg-dark sale-filter">
          <form className="form-inline">
            <input
              className="form-control mr-sm-2"
              type="search"
              placeholder="Караганда"
              aria-label="Search"
              value={searchInput}
              onChange={e => setSearchInput(e.target.value)}
            />
            <button className="btn btn-success my-2 my-sm-0" type="submit">
              Найти
            </button>
          </form>
        </nav>
      </div>

      <div className="container-all-deals">
        {publications
          .filter(
            ({ mainInfo, country }) =>
              mainInfo.includes(searchInput) || country.includes(searchInput)
          )
          .map(publication => (
            <AllDeals
              key={publication.id}
              mainInfo={publication.mainInfo}
              firstImage={publication.firstImage}
              floor={publication.floor}
              price={publication.price}
              watches={publication.watches}
              country={publication.country}
            />
          ))}
      </div>
    </div>
  );
};

export default Sale;
