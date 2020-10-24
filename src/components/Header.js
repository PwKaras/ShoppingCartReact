import React from 'react';
import { Link } from 'react-router-dom';
import Button from './Button';
import './Header.css';

const Header = (props) => {
    return (
        <header className="header">
            <h1 className="header-title">
                <Link to="/cart">
                    Shopping Cart
                   </Link>
            </h1>
            <Button 
            to={'/cart/completed'}
            >
                Proceed to checkout
            </Button>
        </header >
    );
};

export default Header;