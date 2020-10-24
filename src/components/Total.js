import React from 'react';
import Button from './Button';
import './Total.css';

const Total = (props) => {
    return (
        <aside className="total-aside">
            <table className="total-aside-table">
                <thead className="total-aside-table__thead">
                    <tr>
                        <th>SHIPPING</th>
                        <th>$23.80</th>
                    </tr>
                </thead>
            </table>
            <table className="total-aside-table">
                <thead className="total-aside-table__thead">
                    <tr>
                        <th colspan="2">CART TOTALS</th>
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
                        <td>$23.80</td>
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