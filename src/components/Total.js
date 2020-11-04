import React from 'react';
import Button from './Button';
import './Total.css';

let grand

const Total = (props) => {
    return (
        <aside className="total-aside">
            <table className="total-aside-table">
                <thead className="total-aside-table__thead">
                    <tr>
                        <th>SHIPPING</th>
                        <th>$ {grand = props.subtotal !== 0 ? (props.subtotal > 100 ? 0 : 23.80) : (0)}</th>
                    </tr>
                </thead>
            </table>
            <table className="total-aside-table">
                <thead className="total-aside-table__thead">
                    <tr>
                        <th colSpan="2">CART TOTALS</th>
                    </tr>
                </thead>
                <tbody className="total-aside-table__tbody">
                    <tr>
                        <td>Subtotal</td>
                        <td>${props.subtotal}</td>
                    </tr>
                    <tr>
                        <td>
                            Grand total
                        </td>
                        <td>${props.subtotal + grand}</td>
                    </tr>
                    <tr>
                        <td colSpan="2">
                            <Button to={'/cart/completed'}>Proceed to checkout</Button>
                        </td>
                    </tr>
                </tbody>
            </table>
        </aside>
    );
};

export default Total;