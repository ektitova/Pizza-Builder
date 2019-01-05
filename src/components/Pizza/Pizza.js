import React, { Component }  from 'react';
import classes from './Pizza.css';
import PropTypes from 'prop-types';
import pizzaHawaiian from '../../assets/images/Hawaiian.png';
import pizza4Cheeses from '../../assets/images/4Cheeses.png';
import pizzaMargarita from '../../assets/images/Margarita.png';
import pizzaPepperoni from '../../assets/images/Pepperoni.png';

class Pizza extends Component {
    render () {
        let pizza = null;

        switch ( this.props.type ) {
            case ( 'Hawaiian' ):
                pizza = <img className={classes.Pizza} src={pizzaHawaiian} alt="Hawaiian pizza"/>;
                break;
            case ( '4 Cheeses'):
                pizza = <img className={classes.Pizza} src={pizza4Cheeses} alt="4 Cheeses pizza"/>;
                break;
            case ( 'Margarita' ):
                pizza = <img  className={classes.Pizza} src={pizzaMargarita} alt="Margarita pizza"/>;
                break;
            case ( 'Pepperoni' ):
                pizza = <img className={classes.Pizza} src={pizzaPepperoni} alt="Pepperoni pizza"/>;
                break;
           
            default:
                pizza = null;
        }

        return  (
            <div className={classes.Pizza}>
                {pizza}
            </div>) 
    }
}

Pizza.propTypes = {
    type: PropTypes.string.isRequired
};


export default Pizza;