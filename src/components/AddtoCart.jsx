import React, { useEffect, useState } from 'react'
import { useCart } from '../context/AppProvider'
import QuantitySelector from './QuantitySelector';
import { RiDeleteBin6Line } from "react-icons/ri";


const AddtoCart = () => {

     
    const { state,dispatch } = useCart() 

    const [cartSidebar,setCartSidebar] = useState(false)
    const cartLength = state.cartItems.length;

    useEffect(() => {
      if(cartLength > 0) {
        setCartSidebar(true)
      } else {
        setCartSidebar(false)
      }
    },[cartLength])

    const removeItem = (id) => {
      dispatch({ type:'remove_from_cart', payload: {id} })
    }



    let cartItem = cartSidebar ? state.cartItems.map((item) => {
      return (
        <div className='addto-cart'>
          <img src={item.img} alt="" />
          <div>
              <h3>{item.title}</h3>
          </div> 
          <div className='itemCount-manage'>
            <QuantitySelector itemId = {item.id} currentQuantity = {item.quantity} />   
            <RiDeleteBin6Line className='remove-icon'  onClick={()=> removeItem(item.id)}/>          
          </div>
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
