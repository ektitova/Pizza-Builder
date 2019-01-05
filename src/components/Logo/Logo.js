import React from 'react';
import pizzaLogo from '../../assets/images/pizza_logo.png';
import classes from './Logo.css';

const logo=(props)=>(
         <div className={classes.Logo}>
        <img src={pizzaLogo} alt="My pizza"/>
        </div>
)

export default logo