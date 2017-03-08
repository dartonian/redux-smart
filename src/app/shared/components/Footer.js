import React, {Component, PropTypes} from 'react';
import { Link } from 'react-router';

const Footer = () => {

    return (
        <div className="section footer">
            <div className="section__content">
                <p className="footer__copy">© 2017 Boss TV</p>
                <p className="footer__sections">
                    <span color="color-white">&bull; </span><Link to="/serials" className="link footer__sections-link">Сериалы</Link>
                    <span color="color-white">&bull; </span><Link to="/films" className="link footer__sections-link">Фильмы</Link>
                </p>
            </div>
        </div>
    );
};

export default Footer;