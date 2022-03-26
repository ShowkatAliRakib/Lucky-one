

import React from 'react';
import "./Cart.css"
import { AiOutlineShoppingCart } from 'react-icons/ai';

const Cart = (props) => {
    const {name, price, img} = props.cart;
    return (
        <div className="cart">
           <div className="img-container">
           <img src={img} width="100%" alt="" srcset="" />
           </div>
            <h2>{name}</h2>
            <p>Price:{price}</p>

            <button>Add To Cart <AiOutlineShoppingCart/> </button>
        </div>
    );
};

export default Cart;