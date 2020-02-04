import React from 'react';
import './Navbar.css'
import {NavLink} from 'react-router-dom';

const Navbar = () => {

    return (
        <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
            <NavLink to="/" className="navbar-brand">Logotype</NavLink>

            <div className="collapse navbar-collapse">
                <ul className="navbar-nav mr-auto mt-2 mt-lg-0">
                    <li className="nav-item">
                        <NavLink exact to="/sale" className="nav-link">Продажа</NavLink>
                    </li>
                    <li className="nav-item">
                        <NavLink to="/rent" className="nav-link">Аренда</NavLink>
                    </li>
                    <li className="nav-item">
                        <NavLink to="/news" className="nav-link">Новости</NavLink>
                    </li>
                    <li className="nav-item">
                        <NavLink to="/add-publication" className="nav-link">Подать объявление</NavLink>
                    </li>
                </ul>
                <div className="form-inline my-2 my-lg-0">
                    <NavLink to="/personal-panel" className="btn btn-success my-2 my-sm-0">Личный кабинет</NavLink>
                    <NavLink to="/registration" className="btn btn-primary my-2 my-sm-0">Регистрация</NavLink>
                </div>
            </div>
        </nav>
    )
}

export default Navbar;