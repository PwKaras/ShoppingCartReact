import React from 'react';
import { Link } from 'react-router-dom';
import './Button.css';


const Button = (props) => {

    if (props.to)
        return (
            <Link
                to={props.to}
                exact={props.exact}
                className={
                    `button
                    ${props.image && "button-image"}
                    `
                }>
                {props.children}
            </Link>
        );
};

export default Button;