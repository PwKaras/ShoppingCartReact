import React, { useState, useEffect } from 'react';
import Header from '../components/Header';
import headphones from './../images/headphones.png';
import './CartView.css';
import ProductInCart from '../components/ProductInCart';
import Total from '../components/Total';

export const CartView = (props) => {

    // creating default product
    const Default_Product = [{
        id: 'p1',
        image: headphones,
        productName: 'Headphones',
        unitPrice: '11.90'
    }];

    const [products, setProducts] = useState([]);
    useEffect(() => {
        setProducts(
            Default_Product[0]
        );
    },[])
    return (
        <>
            <Header />
            <div className="cartView-main">
                <ProductInCart
                    item={products}
                >
                </ProductInCart>
                <Total />
            </div>
        </>
    );
}   


export default CartView;