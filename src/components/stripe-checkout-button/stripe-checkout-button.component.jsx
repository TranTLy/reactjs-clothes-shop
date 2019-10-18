import React from 'react';
import './stripe-checkout-button.style.scss';
import StripeCheckout from 'react-stripe-checkout';

const StripeCheckoutButton = ({ price }) => {
    const priceForStripe = price * 100; // change $ to cents currency
    const publishableKey = 'pk_test_zXSU4yRnrOlP3SfCWYgBVUWK00HXrURDga';

    const onToken = token => {
        console.log(token);
        alert('Payment Succesful!');
    };

    return (
        <StripeCheckout
            label='Pay Now'
            name='Yalikesi Shop'
            billingAddress
            shippingAddress
            image='https://svgshare.com/i/CUz.svg'
            description={`Your total is $${price}`}
            amount={priceForStripe}
            panelLabel='Pay Now'
            token={onToken}
            stripeKey={publishableKey}
        />
    );
};

export default StripeCheckoutButton;