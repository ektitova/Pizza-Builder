import React from 'react';
import Aux from '../../../hoc/Auxiliary';
import Button from '../../UI/Button/Button';

const orderSummary=(props)=>{
    const ingredientSummary = Object.keys(props.ingredients)
          .map(key=>{
              let ingredient = null;
              if (props.ingredients[key]>0)
                ingredient = props.ingredients[key] + ' portion(s)';
              else
                ingredient = 'none'
              return <li key={key}>
                         <span style={{textTransform:'capitalize'}}>
                         {key}:  
                        </span> 
                        {ingredient}
                    </li>
          })
    return (<Aux>
        <h3>Your order</h3>
        <p>A delicious {props.pizza} pizza with the following ingredients:</p>
                <ul>
                    {ingredientSummary}
                </ul>
         <p><strong>Total price: {props.price.toFixed( 2 )}</strong></p>
         <p>Continue?</p>
         <Button btnType="Danger" clicked={props.purcheseCancelled}>CANCEL</Button>
         <Button btnType="Success" clicked={props.purcheseContinued}>CONTINUE</Button>
    </Aux>)
}
export default orderSummary