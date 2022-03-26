import React, { useEffect, useState } from 'react';
import Cart from '../Cart/Cart'
import "./Carts.css"

const Carts = () => {

    const [carts, setcarts] = useState([])

   
        useEffect(()=> {
            fetch("https://raw.githubusercontent.com/mir-hussain/guns/main/data.json")
            .then(res=>res.json())
            .then(data=>setcarts(data) )
        }, []);
  
    return (
    
        <div className="gun-container">

            <div className="carts-container">

                {
                    carts.map(cart=> <Cart
                    key={cart.id}
                    cart={cart}></Cart>)
                }

            </div>

            <div classNam="info-container" >
                    <h1>this site sectione </h1>
            </div>


        </div>
    
    );
};

export default Carts;