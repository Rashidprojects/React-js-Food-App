import React, { useContext } from 'react'
import { StateContext } from '../context/AppProvider'

const Checkout = () => {
    const cartPackage = useContext(StateContext)

    let cartItem = cartPackage.cartItems.map((item) => {
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
