import React from 'react';
import './button.module.scss'
const Button = ({onClick, children}) => {
    return (
        <button onClick={onClick}>
            {children}
        </button>
    );
};

export default Button;