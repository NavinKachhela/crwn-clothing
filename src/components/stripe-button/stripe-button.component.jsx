import React from 'react';
import StripeCheckout from 'react-stripe-checkout';
const StripeCheckoutButton = ({price}) => {
    const priceForStripe = price *100;
    const publishablekey= 'pk_test_51HYw9kHTDhjQeAVfdIdbs6cyN1NnPuOXKe0CCQA3DhojvQVqo0OP9HVak3deM1vQ0qzKPMz0TxkXdXR0oJVWzEmz00RbW2cQk9';
    
    const onToken = token =>{
        console.log(token);
        alert('Payment Successful!');
    }
    return (
        <StripeCheckout
        label ='Pay Now'
        name='CRWN Clothing Ltd.'
        billingAddress
        shippingAddress
        image='https://svgshare.com/i/CUz.svg'
        description={`Your total is $${price}`}
        amount={priceForStripe}
        panelLabel='Pay now'
        token={onToken}
        stripeKey={publishablekey}
        />
    );
};
export default StripeCheckoutButton;