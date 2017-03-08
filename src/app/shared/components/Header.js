import React, {Component, PropTypes} from 'react';
import { Link } from 'react-router';

const Header = () => {

    return (
        <div className="section header">
            <div className="section__content">
                <div className="header__logo">
                    <Link to="/" className="header__logo-link">BOSS TV</Link>
                </div>
                <p className="header__sections">
                    <Link to="/serials" className="header__sections-link">Сериалы<i className="material-icons icon">navigate_next</i></Link>
                    <Link to="/films" className="header__sections-link">Фильмы<i className="material-icons icon">navigate_next</i></Link>
                </p>
            </div>
        </div>
    );
};

export default Header;