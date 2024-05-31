import React, { useContext } from 'react'
import { StateContext } from '../context/AppProvider'

const AddtoCart = () => {

    const cartPackage = useContext(StateContext)

    let cartItem = cartPackage.cartItems.map((item) => {
        return (
            <div className='addto-cart'>
                <img src={item.img} alt="" />
                <div>
                    <h3>{item.title}</h3>
                </div>
                
            </div>
        )
    })

  return (
    <div className='addto-cart-container'>
      <h3>Cart Items</h3>
      {cartItem}

      
    </div>
  )
}

export default AddtoCart
