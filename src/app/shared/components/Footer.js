import React, {Component, PropTypes} from 'react';
import { Link } from 'react-router';

const Footer = () => {

    return (
        <div className="section footer">
            <div className="section__contents">
                <p className="footer__copy">© Компания 2017</p>
                {/*<p className="footer__sections">*/}
                    {/*<Link to="/about" className="link">О компании</Link> <Link to="/contacts" className="link">Контакты</Link>*/}
                {/*</p>*/}
            </div>
        </div>
    );
};

export default Footer;