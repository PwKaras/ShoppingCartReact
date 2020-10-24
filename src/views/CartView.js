import React, { useState, useEffect, useContext } from 'react';
import Header from '../components/Header';
import headphones from './../images/headphones.png';
import './CartView.css';
import ProductInCart from '../components/ProductInCart';
import Total from '../components/Total';
import { CartContext } from '../context/CartContext';

export const CartView = (props) => {

    // render default product
    const [products, setProducts] = useState([]);
    const [quantity, setQuantity] = useState(1);
    const Default_Product = [{
        id: 'p1',
        image: headphones,
        productName: 'Headphones',
        unitPrice: '11.90'
    }];

    useEffect(() => {
        setProducts(Default_Product[0]);

    }, [])
    // change products quantity
    const addQuantity = () => {
        setQuantity(quantity + 1);
    };
    const minusQuantity = () => {
        setQuantity(quantity - 1);
    };

    return (
        <>
            <Header />
            <div className="cartView-main">
                <ProductInCart
                    item={products}
                    onClickAdd={addQuantity}
                    onClickMinus={minusQuantity}
                    quant={quantity}

                >
                </ProductInCart>
                <Total />
            </div>
        </>
    );
}


export default CartView;