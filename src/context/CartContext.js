import { createContext, useState, useEffect } from 'react';
import headphones from './../images/headphones.png';

export const CartContext = createContext(null
);


const CartProvider = (props) => {
// context attempt
    // const [products, setProducts] = useState([]);
    // const Default_Product = [{
    //     id: 'p1',
    //     image: { headphones },
    //     productName: 'Headphones',
    //     unitPrice: '11.90'
    // }];

    // useEffect(() => {
    //     setProducts(...Default_Product[0]
    //     );
    // }, [])
    // console.log(products.image)
    let totalValue;
    return (
        <>
            <CartContext.Provider
                value={{
                    totalValue: 0

                }} >
                {props.children}

            </CartContext.Provider>
        </>
    )
}

export default CartProvider;





