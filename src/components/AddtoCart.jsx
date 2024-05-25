import React from 'react'

const AddtoCart = ({cartItems}) => {
    console.log("cart items are",cartItems);
    let cartItem = cartItems.map((item) => {
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
