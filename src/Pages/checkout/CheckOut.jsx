import './CheckOut.scss'
import React from 'react';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import { selectCartItems, selectCartTotal } from '../../redux/cart/cartSelector'
import CheckoutItem from '../../components/checkout-item/CheckoutItem';
import StripeButton from '../../components/stripe-button/StripeButton';


const CheckOut = ({ cartItems, cartTotal }) => {
    return (
        <div className="checkout-page">
            <div className="checkout-header">
                <div className="header-block">
                    <span>Product</span>
                </div>
                <div className="header-block">
                    <span>Description</span>
                </div>
                <div className="header-block">
                    <span>Quantity</span>
                </div>
                <div className="header-block">
                    <span>Price</span>
                </div>
                <div className="header-block">
                    <span>Remove</span>
                </div>
            </div>
            {
                cartItems.map( cartItem => <CheckoutItem cartItem={cartItem} /> )
            }
            <div className="total">
                <span>TOTAL : ${cartTotal}</span>
            </div>
            <div className="test-warning">
                *please use the following test credit card for payments*
                <br />
                4242 4242 4242 4242 - EXP: 12/21 - CVV: 123
            </div>
            <StripeButton price={cartTotal} />
        </div>
    );
};

const mapStateToProps = createStructuredSelector({
    cartItems: selectCartItems,
    cartTotal : selectCartTotal
})

export default connect(mapStateToProps)(CheckOut);