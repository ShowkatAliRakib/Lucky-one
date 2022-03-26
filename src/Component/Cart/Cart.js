

import React from 'react';
import "./Cart.css"
import { AiOutlineShoppingCart } from 'react-icons/ai';

const Cart = ({guncart, handleAddToCart}) => {
    const {name, price, img} = guncart;
  
    return (
        <div className="cart">
            <img src={img} width="100%" alt="" srcset="" />
          
            <h2>{name}</h2>
            <p>Price:{price}</p>

            <button onClick={()=> handleAddToCart(guncart)}><span className='icon'>Add To Cart <AiOutlineShoppingCart/> </span></button>

        </div>
    );
};

export default Cart;