import React from 'react'
import BuildControl from "./BuildControl/BuildControl";
import classes from './BuildControls.module.css'

const controls = [
    { label: 'Salad', type: 'salad'},
    { label: 'Bacon', type: 'bacon'},
    { label: 'Cheese', type: 'cheese'},
    { label: 'Meat', type: 'meat'},
]

const BuildControls = (props) => {
    return(
        <div className={classes.BuildControls}>
            <p>Current Price: <strong>${props.totalPrice.toFixed(2)}</strong></p>
            {controls.map(item => {
                return (
                    <BuildControl
                        label={item.label}
                        key={item.label}
                        added={() => props.ingredientAdded(item.type)}
                        removed={ () => props.ingredientRemoved(item.type)}
                        disabled = {props.disabled[item.type]}
                    />
                )
            })}
            <button
                disabled={!props.purchasable}
                className={classes.OrderButton}
                onClick={props.purchaseHandler}
            >ORDER NOW</button>
        </div>
    )
}

export default BuildControls