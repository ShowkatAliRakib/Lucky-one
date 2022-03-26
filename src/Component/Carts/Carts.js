import React, { useEffect, useState } from 'react';
import Cart from '../Cart/Cart'
import "./Carts.css"

const Carts = () => {

    const [carts, setcarts] = useState([])
    const [cart, setcart]=useState([])

    const handleAddToCart = (gun) =>{
       const newGunCart = [...cart, gun]
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
                    <h4>Selected Cart</h4>
                    { 
                       cart.map(item=> <h3 key={item.id}>{item.name}</h3>)
                    }
                    </div>
                    <button className='icon'>Choose One</button>
                
            </div>


        </div>
       
    );
};

export default Carts;