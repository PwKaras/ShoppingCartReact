import React from 'react';
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
            <table class="total-aside-table">
                <thead class="total-aside-table__thead">
                    <tr>
                        <th colspan="2">CART TOTALS</th>
                    </tr>
                </thead>
                <tbody class="total-aside-table__tbody">
                    <tr>
                        <td>Subtotal</td>
                        <td>$23.80</td>
                    </tr>
                    <tr>
                        <td>
                            Grand total
                        </td>
                        <td>$23.80</td>
                    </tr>
                    <tr>
                        <td colspan="2">
                            <button class="button">Proceed to checkout</button>
                    </td>
                    </tr>
                </tbody>
            </table>
        </aside>
    );
};

export default Total;