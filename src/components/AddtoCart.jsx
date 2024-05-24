import React from 'react'

const AddtoCart = ({cartItems}) => {
    console.log("cart items are",cartItems);
    let cartItem = cartItems.map((item) => {
        return (
            <div>
                <img src={item.img} alt="" />
                <div>
                    <h3>{item.title}</h3>
                </div>
                
            </div>
        )
    })
  return (
    <div className='addto-cart-container'>
      {cartItem}
    </div>
  )
}

export default AddtoCart
