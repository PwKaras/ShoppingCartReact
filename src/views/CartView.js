import React from 'react';
import Header from '../components/Header';
import x from './../images/x-img.png';
import headphones from './../images/headphones.png';
import pencil from './../images/edit-img.png';
import './CartView.css';
import ProductInCart from '../components/ProductInCart';
import Total from '../components/Total';


export const Default_Product = {
        id: 'p1',
        image: {headphones},
        productName: 'Headphones',
        unitPrice: '11.90'
    };

const CartView = (props) => {
    return (
        <>
            <Header />
            <div className="cartView-main">
                <ProductInCart
                item={Default_Product}
                />
                <Total />
            </div>
        </>
    );
};

export default CartView;