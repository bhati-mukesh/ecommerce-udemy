import './StripeButton.scss'
import React from 'react';
import StripeCheckout from 'react-stripe-checkout'

const StripeButton = ({ price }) => {
    const priceForStripe = price * 1000;
    const publishableKey = "pk_test_51IDKjtEn55l7G65pj3iJyb1wHtQEdRAyMDSvRQrMbsz8eIsa466HsZGYFRfvT9Xywla5TPBcsLVds6IX6MC44u8y00GaoqYsWo"

    const onToken = token =>{
        console.log(token)
        alert("Payment Successfull!")
    }

    return (
        <StripeCheckout 
            label="Pay Now" 
            name="Crown Clothing" 
            billingAddress 
            shippingAddress 
            image="https://svgshare.com/i/CUz.svg"
            description={`Your Total is ${price}`}
            amount={priceForStripe}
            panelLabel="Pay Now"
            token={onToken}
            stripeKey={publishableKey}
            />
    );
};

export default StripeButton;