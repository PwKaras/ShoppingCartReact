import React, { useState, useEffect, useContext, createContext } from 'react';
import Header from '../components/Header';
import headphones from './../images/headphones.png';
import './CartView.css';
import ProductInCart from '../components/ProductInCart';
import Total from '../components/Total';
import { CartContext } from '../context/CartContext';

export const CartView = (props) => {

    // const totalValue = useContext(CartContext);
    const [subTotal, setSubtotal] = useState(0);
    const [isShiping, setIsShiping] = useState(0);
    const [grandTotal, setGrandTotal] = useState(0);
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
    const addQuantityHandler = () => {
        setQuantity(quantity + 1);
    };
    const minusQuantityHandler = () => {
        if(quantity > 0) {
            setQuantity(quantity - 1);
        } else {
            return
        }
    };

    // clear shoping cart on click
    const clearProductsHandler = () => {
        console.log("hello")
        setProducts({})
        setQuantity(0)
    }

// total Value
const subtotalValueHandler = () => {
    setSubtotal(
            products.unitPrice * quantity
    )
}
console.log(products.unitPrice)
console.log(quantity)
console.log(subTotal)

    return (
        <>
            <Header />
            <div className="cartView-main">
                <ProductInCart
                    item={products}
                    onClickAdd={addQuantityHandler}
                    onClickMinus={minusQuantityHandler}
                    quant={quantity}
                    cancelProducts={clearProductsHandler}
                    updateSubtotal={subtotalValueHandler}

                >
                </ProductInCart>
                <Total 
                subtotal={subTotal}
                />
            </div>
        </>
    );
}


export default CartView;