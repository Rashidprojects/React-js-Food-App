import React, { useEffect, useState } from 'react'
import { useCart } from '../context/AppProvider'
import QuantitySelector from './QuantitySelector';

const AddtoCart = () => {

     
    const { state } = useCart() 

    const [cartSidebar,setCartSidebar] = useState(false)
    const cartLength = state.cartItems.length;

    useEffect(() => {
      if(cartLength > 0) {
        setCartSidebar(true)
      } else {
        setCartSidebar(false)
      }
    },[cartLength])



    let cartItem = cartSidebar ? state.cartItems.map((item) => {
      return (
        <div className='addto-cart'>
          <img src={item.img} alt="" />
          <div>
              <h3>{item.title}</h3>
          </div> 
          <QuantitySelector itemId = {item.id} currentQuantity = {item.quantity} />             
        </div>
            )
        
    }) : null 



  return (
    <div>
      { cartSidebar && (
         <div className='addto-cart-container'>
         <h3>Cart Items</h3>
          {cartItem} 
          </div> )
      }
    </div>
    
    
  )
}

export default AddtoCart
