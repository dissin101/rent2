import React from 'react';
import { Link } from 'react-router-dom';

const Login = () => {

    return (
        <div className="row justify-content-center">
            <div className="col-md-6">
                <div className="card">
                <article className="card-body">
                <Link to="/registration" className="float-right btn btn-outline-primary">Зарегистрироваться</Link>
                <h4 className="card-title mb-4 mt-1">Авторизация</h4>
                    <form>
                        <div className="form-group">
                            <label>Email</label>
                            <input name="" className="form-control" placeholder="Email" type="email"/>
                        </div>
                        <div className="form-group">
                            <a className="float-right" href="#">Забыли пароль?</a>
                            <label>Пароль</label>
                            <input className="form-control" placeholder="******" type="password"/>
                        </div>
                        <div className="form-group"> 
                        <div className="checkbox">
                        <label> <input type="checkbox"/> Сохранить пароль </label>
                        </div>
                        </div>
                        <div className="form-group">
                            <button type="submit" className="btn btn-primary btn-block"> Авторизоваться  </button>
                        </div>                                                         
                    </form>
                </article>
                </div>
            </div>
        </div>
    )
}

export default Login;