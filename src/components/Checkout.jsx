import React from 'react'
import { useCart } from '../context/AppProvider'

const Checkout = () => {

  const { state } = useCart()
  console.log("Checkout page state : ",state);
    let cartItem = state.cartItems.map((item) => {
        return (
            <div >
                <img src={item.img} alt="" />
                <div>
                    <h3>{item.title}</h3>
                </div>
                
            </div>
        )
    })
  return (
    <div>
      <h1>This is Checkout</h1>
      {cartItem}
    </div>
  )
}

export default Checkout
