import React from 'react';
import Button from './Button';
import x from './../images/x-img.png';
import pencil from './../images/edit-img.png';
import './ProductInCart.css';

const ProductInCart = props => {
    if (!props.item) {
        return (
            <div className="center">
                <h1>no product in cart</h1>
            </div>
        )
    }
    return (
        <section className="productInCart-section">
            <table className="productInCart-section-table">
                <thead className="productInCart-section-table__thead">
                    <tr>
                        <th></th>
                        <th></th>
                        <th>Product Name</th>
                        <th>Unit Price</th>
                        <th>Qty</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td>
                            <Button
                                onClick={props.cancelProducts}
                                image={"button-image"}
                                square={"square"}><img className="image" src={x} alt="x sign to remove the product from the cart" /></Button>
                        </td>
                        {props.item.image ?
                            <td>
                                <img className="productInCart-image" src={props.item.image} alt="product headphones" />
                            </td>
                            :
                            <td>

                            </td>
                        }
                        <td>{props.item.productName}</td>
                        <td>${props.item.unitPrice}</td>
                        <td>
                            <div className="productInCart-section-table__counter">

                                <Button
                                    onClick={props.onClickMinus}
                                    square={"square"}>-</Button>
                                <div className="productInCart-square">{props.quant}</div>
                                <Button
                                    onClick={props.onClickAdd}
                                    square={"square"}>+</Button>
                                <Button
                                    onClick={props.updateSubtotal}
                                    image={"button-image"}
                                    square={"square"}>

                                    <img className="productInCart-image" src={pencil} alt="pencil, click to update shopping cart`s value" />
                                </Button>
                            </div>
                        </td>
                    </tr>
                </tbody>
            </table>
            <div className="productInCart-section-footer">
                <Button
                    onClick={props.updateSubtotal}
                >Update Shopping Cart</Button>
            </div>
        </section>
    );
};

export default ProductInCart;