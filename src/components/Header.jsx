import React, { useEffect } from 'react'
import { NavLink } from 'react-router-dom'
import { useFirebase } from '../context/FirebaseContext'
import { onAuthStateChanged, signOut } from 'firebase/auth'
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

  const handleSignout = async () => {
    try {
      await signOut(auth);
      console.log("user signout");
    } catch (error) {
      console.error ("Error sign out",error)
    }
  }

console.log("user status is ",state.userStatus);

  return (
    <div className='header-section'>
      <nav>
        <div className="logo">
            <img src={logo} alt="" />
            <ul>
                <li><NavLink 
                  to="/" 
                  className={({ isActive }) => isActive ? 'nav-li-item active' : 'nav-li-item'}
                >Home</NavLink></li>
                <li><NavLink
                   to="checkout" 
                  className={({ isActive }) => isActive ? 'nav-li-item active' : 'nav-li-item'}
                >Checkout</NavLink></li>
                <li><NavLink 
                  to="contact" 
                  className={({ isActive }) => isActive ? 'nav-li-item active' : 'nav-li-item'}
                >Contact</NavLink></li>
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
                    <>
                  <li className='user'>
                   Hello, {state.username}               
                </li>
                <button onClick={handleSignout}>Signout</button>
                </>
                ) : <li>
                  
                <NavLink to= "login"
                  className = {({ isActive }) => isActive ? 'link-none' : 'link'}
                >
                  <div className='signin-button'>
                    Sign in
                  </div>
                </NavLink>
                </li>}
                
            </ul>
        </div>
      </nav>
    </div>
  )
}

export default Header
