

import React from 'react';
import "./Cart.css"
import { AiOutlineShoppingCart } from 'react-icons/ai';

const Cart = ({guncart, handleAddToCart}) => {
    const {name, price, img, id} = guncart;
  
    return (
        <div className="cart">
            <img src={img} width="100%" alt="" srcset="" />
          
            <h2>{name}</h2>
            <p>Price:{price}</p>

            <button onClick={()=> handleAddToCart(guncart)}>Add To Cart <AiOutlineShoppingCart/> </button>

        </div>
    );
};

export default Cart;