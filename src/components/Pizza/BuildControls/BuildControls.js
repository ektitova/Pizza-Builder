import React from 'react';
import classes from './BuildControls.css'
import BuildControl from './BuildControl/BuildControl';

const controls = { parmesan:'Parmesan cheese',
     tomatoes:'Tomatoes',
     bacon:'Bacon',
     olives:'Olives',
     mozzarella:'Mozzarella cheese',
     chicken:'Chicken',
     pineapple:'Pineapple',
     gauda:'Gauda cheese',
     salami:'Salami'}

const buildControls = (props)=>{
    return(
        <div className = {classes.BuildControls}>
        <p>Current price: <strong>{props.price.toFixed(2)}</strong></p>
       { Object.keys(props.ingredients)
          .map(key =>
             (<BuildControl key={controls[key]}
                     label = {controls[key]}
                     added = {()=>props.ingridientAdded(key)}
                     removed = {()=>props.ingridientRemoved(key)}
                     disabled = {props.disabled[key]}/>))} 
         <button className={classes.OrderButton}
                 disabled={!props.purchasable}
                 onClick={props.ordered}>Order Now</button>

    </div>)
}

export default buildControls