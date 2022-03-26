

import React from 'react';
import "./Cart.css"
import { AiOutlineShoppingCart } from 'react-icons/ai';

const Cart = ({cart, handleAddToCart}) => {
    const {name, price, img, } = cart;
  
    return (
        <div className="cart">
            <img src={img} width="100%" alt="" srcset="" />
          
            <h2>{name}</h2>
            <p>Price:{price}</p>

            <button onClick={()=> handleAddToCart(name)}>Add To Cart <AiOutlineShoppingCart/> </button>

        </div>
    );
};

export default Cart;