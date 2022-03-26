import React, { useEffect, useState } from 'react';
import Cart from '../Cart/Cart'
import "./Carts.css"

const Carts = () => {

    const [carts, setcarts] = useState([])
    const [cart, setcart]=useState([])

    const handleAddToCart = (gun) =>{
       const newGunCart = [gun]
        setcart(newGunCart);
        
     
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
                    carts.map(guncart=> <Cart
                    key={guncart.id}
                    guncart={guncart}
                    handleAddToCart={handleAddToCart}></Cart>)
                }

            </div>

            <div classNam="info-container" >
                    <div>
                    <h1>Gun Info : </h1>
                    { 
                       cart.map(item=> <h3 key={item.id}>{item.name}</h3>)
                    }
                    </div>
                    <button>Choose One For Me</button>
                
            </div>


        </div>
    
    );
};

export default Carts;