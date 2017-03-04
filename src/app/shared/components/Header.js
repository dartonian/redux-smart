import React, {Component, PropTypes} from 'react';
import { Link } from 'react-router';

const Header = () => {

    return (
        <div className="section header">
            <div className="section__content">
                <div className="header__logo">
                    <Link to="/" className="link">Boss TV</Link>
                </div>
                {/*<p className="header__sections">*/}
                    {/*<Link to="/about" className="link">О компании</Link> <Link to="/contacts" className="link">Контакты</Link>*/}
                {/*</p>*/}
            </div>
        </div>
    );
};

export default Header;