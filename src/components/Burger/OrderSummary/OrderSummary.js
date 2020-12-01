import React from 'react'
import Auxiliary from "../../../hoc/Auxiliary/Auxiliary";
import Button from "../../UI/Button/Button";

class OrderSummary extends React.Component {

    render() {

        const ingredientSummary = Object.keys(this.props.ingredients).map((key) => (
            <li key={key}>
                <span style={{textTransform: 'capitalize'}}>{key}</span>: {this.props.ingredients[key]}
            </li>
        ))

        return (
            <Auxiliary>
                <h3>Your Order</h3>
                <p>A delicious burger with the following ingredients</p>
                <ul>
                    {ingredientSummary}
                </ul>
                <p>Total: <strong>${this.props.totalPrice.toFixed(2)}</strong></p>
                <p>Continue to Checkout?</p>
                <Button btnType={"Danger"}
                        clicked={this.props.cancelHandler}>
                    CANCEL
                </Button>
                <Button btnType={"Success"}
                        clicked={this.props.continueHandler}>
                    CONTINUE
                </Button>
            </Auxiliary>
        )
    }
}

export default OrderSummary