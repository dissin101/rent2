import React from 'react';
import './Registration.css';
import { Link } from 'react-router-dom';

const Registration = () => {
  return (
    <div className="row justify-content-center">
      <div className="col-md-6">
        <div className="card">
          <header className="card-header">
            <Link
              to="/login"
              className="float-right btn btn-outline-primary mt-1"
            >
              Авторизация
            </Link>
            <h4 className="card-title mt-2">Регистрация</h4>
          </header>
          <article className="card-body">
            <form>
              <div className="form-row">
                <div className="col form-group">
                  <label>Имя </label>
                  <input type="text" className="form-control" placeholder="" />
                </div>
                <div className="col form-group">
                  <label>Фамилия</label>
                  <input type="text" className="form-control" placeholder=" " />
                </div>
              </div>
              <div className="form-group">
                <label>Email</label>
                <input type="email" className="form-control" placeholder="" />
              </div>
              <div className="form-group">
                <label className="form-check form-check-inline">
                  <input
                    className="form-check-input"
                    type="radio"
                    name="gender"
                    value="option1"
                  />
                  <span className="form-check-label"> Муж. </span>
                </label>
                <label className="form-check form-check-inline">
                  <input
                    className="form-check-input"
                    type="radio"
                    name="gender"
                    value="option2"
                  />
                  <span className="form-check-label"> Жен.</span>
                </label>
              </div>
              <div className="form-row">
                <div className="form-group col-md-6">
                  <label>Город</label>
                  <select id="inputState" className="form-control">
                    <option> Выберите...</option>
                    <option>Алматы</option>
                    <option>Нур-Султан</option>
                    <option selected="">Караганда</option>
                    <option>Шымкент</option>
                    <option>Актау</option>
                    <option>Актобе</option>
                    <option>Атырау</option>
                    <option>Усть-Каменогорск</option>
                    <option>Павлодар</option>
                    <option>Уральск</option>
                    <option>Семей</option>
                    <option>Тараз</option>
                    <option>Кокшетау</option>
                    <option>Петропавловск</option>
                  </select>
                </div>
              </div>
              <div className="form-group">
                <label>Придумайте пароль</label>
                <input className="form-control" type="password" />
              </div>
              <div className="form-group">
                <button type="submit" className="btn btn-primary btn-block">
                  Зарегистрироваться
                </button>
              </div>
            </form>
          </article>
          <div className="border-top card-body text-center">
            У вас уже есть аккаунт?
            <Link to="/login"> Авторизация</Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Registration;
