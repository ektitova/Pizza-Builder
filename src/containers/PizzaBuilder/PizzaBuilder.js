import React, { Component } from 'react';

import Aux from '../../hoc/Auxiliary';
import Pizza from '../../components/Pizza/Pizza';
import PizzaChooser from '../../components/Pizza/PizzaChooser/PizzaChooser';
import BuildControls from '../../components/Pizza/BuildControls/BuildControls';
import Modal from '../../components/UI/Model/Modal';
import OrderSummary from '../../components/Pizza/OrderSummary/OrderSummary';


const INGREDIENT_PRICES = {
    tomatoes:0.5,
    olives:0.3,
    mozzarella:0.4,
    bacon: 1.3,
    chicken:0.7,
    pineapple:0.4,
    parmesan:0.5,
    gauda:0.6,
    salami:1.5
}

const pizzaOptions=[
    { label: 'Margarita', value: 1, 
        ingredients: { bacon:1, mozzarella:1, tomatoes:1, olives:1},
        price: 4 },
    { label: 'Hawaiian', value: 2, 
        ingredients: {chicken:1, mozzarella:1, tomatoes:1,pineapple:1},
        price: 3 },
    { label: '4 Cheeses', value: 3, 
        ingredients: {mozzarella:1, parmesan:1, gauda:1, tomatoes:1},
        price: 3 },
    { label: 'Pepperoni', value: 4,
        ingredients: {parmesan:1, bacon:1, salami:1, tomatoes:1},
        price: 4.8 }
  ]

class PizzaBuilder extends Component {
   
    state = {        
        ingredients: pizzaOptions[0].ingredients,
        purchasable: true,
        totalPrice: pizzaOptions[0].price,
        purchasing:false,
        pizza: pizzaOptions[0]
    }

    addIndridientHandler =(type)=>{
        const ingredients = {
            ...this.state.ingredients
        };
        ingredients[type] = this.state.ingredients[type]+1;
        const newPrice =this.state.totalPrice
            + INGREDIENT_PRICES[type];
        this.setState({totalPrice:newPrice,
            ingredients: ingredients});
        this.updatePurchaseState(ingredients);   

    }

    removeIndridientHandler =(type)=>{
        if (this.state.ingredients[type]<=0)
            return;
        const ingredients = {
            ...this.state.ingredients
        };
        ingredients[type] = this.state.ingredients[type]-1;
        const newPrice =this.state.totalPrice
            - INGREDIENT_PRICES[type];
        this.setState({totalPrice:newPrice,
            ingredients: ingredients});  
        this.updatePurchaseState(ingredients);      

    }

    updatePurchaseState (ingredients) {
        const sum = Object.keys( ingredients )
            .map( igKey => {
                return ingredients[igKey];
            } )
            .reduce( ( sum, el ) => {
                return sum + el;
            }, 0 );
        this.setState( { purchasable: sum > 0 } );
    }

    purchaseHandler=()=>{
        this.setState({purchasing:true});
    }

    purchaseCancelHandler=()=>{
        this.setState({purchasing:false});
    }

    purchaseOrderHandler=()=>{
        alert('Ordered!')
    }

    updatePizzaHandler =(type)=>{
        this.setState({pizza:type,
            ingredients:type.ingredients,
            totalPrice: type.price});
    }

    render () {
        const disabledInfo = {
            ...this.state.ingredients
        }

        for (let key in disabledInfo){
            disabledInfo[key] = disabledInfo[key]<=0
        }
        return (

            <Aux>
                 <Modal show={this.state.purchasing}
                         modalClosed={this.purchaseCancelHandler}>
                 <OrderSummary pizza = {this.state.pizza.label}
                               ingredients={this.state.ingredients}
                               purcheseCancelled={this.purchaseCancelHandler}
                               purcheseContinued={this.purchaseOrderHandler}
                               price={this.state.totalPrice}/>
                 </Modal>
                 <PizzaChooser
                  options={pizzaOptions}
                  default={this.state.pizza}
                  changed={this.updatePizzaHandler} />

                 <Pizza type={this.state.pizza.label}/> 
                 <BuildControls ingredients={this.state.ingredients}
                                ingridientAdded ={this.addIndridientHandler}
                                ingridientRemoved ={this.removeIndridientHandler}
                                disabled={disabledInfo}
                                purchasable={this.state.purchasable}
                                price={this.state.totalPrice}
                                ordered={this.purchaseHandler} />
            </Aux>
        );
    }
}

export default PizzaBuilder;