import React from 'react';
import './AllDeals.css';

const AllDeals = (props) => {

    return(
        <div className="publication-wrapper card rounded">
            <div className="pictures-wrapper">
                <img src={props.firstImage} />
                <img src={props.firstImage} />
                <img src={props.firstImage} />
                <div className="publication-description">
                    <h1>{props.mainInfo}</h1>
                   <p>Город: {props.country}</p>
                    <p>Цена: {props.price}</p>
                    <p>Этаж: {props.floor}</p>
                    <a href="#">Подробнее</a>
            </div>
            </div>
        </div>
    )
}

export default AllDeals;