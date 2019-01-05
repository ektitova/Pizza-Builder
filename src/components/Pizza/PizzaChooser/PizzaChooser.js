import React from 'react';
import classes from "./PizzaChooser.css";
import Select from 'react-select';

const pizzaChooser=(props)=>{

    return (<div className={classes.PizzaChooser}>
            <Select
                  options={props.options}
                  defaultValue= {props.default}
                  value={props.default}
                  onChange={props.changed} />
         </div>)
}
export default pizzaChooser