import React from 'react';
import './FeaturedDeals.css';

const FeaturedDeals = () => {
  return (
    <div className="container-featured-deals">
      <div className="row" id="ads">
        <div className="card rounded">
          <div className="card-image">
            <span className="card-notify-badge">Караганда</span>
            <a href="#" className="card-notify-year">
              Подробнее
            </a>
            <img
              className="img-fluid"
              src="https://i.ytimg.com/vi/c0fvhMgKtkY/maxresdefault.jpg"
              alt="Alternate Text"
            />
          </div>
          <div className="card-image-overlay">
            <span className="card-detail-badge">Этаж 2\3</span>
            <span className="card-detail-badge">Цена: 28,000,000.00</span>
            <span className="card-detail-badge">Комнаты: 4</span>
          </div>
          <div className="card-body text-center">
            <div className="ad-title">
              <h5>Honda Accord LX</h5>
            </div>
            <a className="ad-btn" href="#">
              View
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FeaturedDeals;
