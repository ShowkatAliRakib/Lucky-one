import React, { useEffect, useState } from 'react';
import Cart from '../Cart/Cart'
import "./Carts.css"

const Carts = () => {

    const [carts, setcarts] = useState([])
    const [cart, setcart]=useState([])

    const handleAddToCart = (name) =>{
        console.log(name);
    }
   
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
                    cart={cart}
                    handleAddToCart={handleAddToCart}></Cart>)
                }

            </div>

            <div classNam="info-container" >
                    <div>
                    <h1>this site sectione </h1>
                    </div>
                    <button>Choose One For Me</button>
                
            </div>


        </div>
    
    );
};

export default Carts;