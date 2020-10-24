import React from 'react';
import Button from './Button';
import './ProductInCart.css';

const ProductInCart = (item) => {
    return (
            <section class="productInCart-section">
                <table class="productInCart-section-table">
                    <thead class="productInCart-section-table__thead">
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
                            <Button className=""><img class="image" src="" alt="x sign to remove the product from the cart"/></Button>
                        </td>
                        <td><img class="image" src="" alt="product`s image headphones"/>
                        </td>
                        <td>{item.productName}</td>
                        <td>$11.90</td>
                        <td>
                            <div class="section-table__counter">

                                <button class="square">-</button>
                                <div class="square">2</div>
                                <button class="square">+</button>
                                <button class="button-image square">

                                    <img class="image" src="images/edit-img.png" alt="pencil image, click to update shopping cart`s value"/>
                                </button>
                            </div>
                        </td>
                    </tr>
                </tbody>
                </table>
                <div className="productInCart-section-footer">
                <button class="button">Update Shopping Cart</button>
            </div>
            </section>
    );
};

export default ProductInCart;