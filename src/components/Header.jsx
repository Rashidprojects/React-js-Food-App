import React, { useEffect } from 'react'
import { Link } from 'react-router-dom'
import { useFirebase } from '../context/FirebaseContext'
import { onAuthStateChanged } from 'firebase/auth'
import logo from '../images/logo.png'
import { GoSearch } from "react-icons/go";
import { FaShoppingCart } from "react-icons/fa";
import { useCart } from '../context/AppProvider'



function Header() {

  const {auth,state,dispatch} = useFirebase()
  const { totalCart } = useCart()


  useEffect(()=> {
    dispatch({type:'set_loading'})
    const unsubscribe = onAuthStateChanged(auth,(user) => {
      if(user) {
        dispatch({type:'set_user', payload: {username: user.displayName}});
      } else {
        dispatch({type:'sign_out'})
      }

    })
    return () =>unsubscribe();
  },[auth,dispatch])

console.log("user status is ",state.userStatus);

  return (
    <div className='header-section'>
      <nav>
        <div className="logo">
            <img src={logo} alt="" />
            <ul>
                <li><Link to="/" className='nav-li-item'>Home</Link></li>
                <li><Link to="checkout" className='nav-li-item'>Checkout</Link></li>
                <li><Link to="contact" className='nav-li-item'>Contact</Link></li>
            </ul>
        </div>
        <div className='nav-items'>
            <ul>
                <li className='search-bar'>
                  <input type="text" placeholder='Search Food Items....' />
                  <span><GoSearch /></span>
                </li>
                <li>
                  <span className='cart-logo'><FaShoppingCart />
                      {totalCart !== 0 ? (
                        <span className='cart-count'>{totalCart}</span>
                      ): null}
                      
                  </span>
                </li>
                { state.loading ? (<div className='loading'>Loading name</div>) :
                  state.userStatus ? (
                  <li className='user'>
                   Hello, {state.username}               
                </li>
                ) : <li>
                  <div className='signin-button'>Sign in</div>
                </li>}
                
            </ul>
        </div>
      </nav>
    </div>
  )
}

export default Header
