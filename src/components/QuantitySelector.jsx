import React, { useState } from 'react'
import { IoIosArrowDown } from "react-icons/io";
import { useCart } from '../context/AppProvider'

const QuantitySelector = ({ itemId,currentQuantity }) => {

    const { dispatch } = useCart()
    const [dropdownVisible,setDropdownVisible] = useState(false)

    const toggleDropdown = () => {
        setDropdownVisible(!dropdownVisible)
    }

    const handleSelectedQuantity = (quantity) => {
        dispatch({
            type : 'update_quantity',
            payload : {id: itemId, quantity},
        })
        setDropdownVisible(false)
    }
  return (
    <div>
      <div onClick={toggleDropdown} className='quantity-container'>
            <h1> {currentQuantity}  <span><IoIosArrowDown /></span></h1>
      </div>

      {dropdownVisible && (
        <ul className='quantity-items'>
            {[0,1,2,3,4,5].map((num) => (
                <li key={num} 
                   onClick={() => handleSelectedQuantity(num)}>
                    {num}
                </li>
            ))}
        </ul>
      )}
    </div>
  )
}

export default QuantitySelector
