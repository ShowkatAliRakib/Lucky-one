

import React from 'react';
import "./Cart.css"

const Cart = (props) => {
    const {name, price, img} = props.cart;
    return (
        <div>
            <img src={img} alt="" srcset="" />
            <h2>{name}</h2>
            <p>Price:{price}</p>
        </div>
    );
};

export default Cart;