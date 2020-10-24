import React from 'react';
import Button from '../components/Button';
import Header from '../components/Header'

const CartCompletedView = (props) => {
    return (
        <>
            <Header />
            <div className="center">
                <h2>Your order has been submitted successfully</h2>
            </div>
            <div className="center">
                <h2>Maybe you want to check other products</h2>
            </div>
            <div className="center">
                <Button to={'/'}>
                    Product list
                </Button>
            </div>
        </>
    );
};

export default CartCompletedView;