import React, {useState} from 'react';
import { FeaturedDeals, AllDeals } from '../../components';
import './Sale.css'

const Sale = (props) => {

    const [searchInput, setSearchInput] = useState('');
    const handleChange = val => {
        setSearchInput(val);
    }

    let filter;
    if( searchInput === "" ){
        filter = props.publications[0].sale.map((sale) => {

            return (
                <AllDeals 
                    key={sale.id}
                    mainInfo={sale.mainInfo}
                    firstImage={sale.firstImage}
                    floor={sale.floor}
                    price={sale.price}
                    watches={sale.watches}
                    country={sale.country}
                />
            )
        })
    } else {
        filter = props.publications[0].sale.map((sale) => {
            if( sale.mainInfo.includes(searchInput) || sale.country.includes(searchInput)){
                return (
                    <AllDeals 
                        key={sale.id}
                        mainInfo={sale.mainInfo}
                        firstImage={sale.firstImage}
                        floor={sale.floor}
                        price={sale.price}
                        watches={sale.watches}
                        country={sale.country}
                    />
                )
            }
        })
    }

    return (
        <div className="container-sale">
            <h1>Популярные предложения</h1>
            <div className="container-top-deals">
                <FeaturedDeals />
                <FeaturedDeals />
                <FeaturedDeals />
            </div>
            <h1>Все объявления</h1>

            <div>
                <nav className="navbar navbar-expand-lg navbar-dark bg-dark sale-filter">
                    <form className="form-inline">
                        <input className="form-control mr-sm-2" type="search" placeholder="Караганда" aria-label="Search" value={searchInput} onChange={(e) => handleChange(e.target.value)}/>
                        <button className="btn btn-success my-2 my-sm-0" type="submit">Найти</button>
                    </form>
                </nav>
            </div>
            <div className="container-all-deals">
                {filter}
            </div>
        </div>
    )
}

export default Sale;