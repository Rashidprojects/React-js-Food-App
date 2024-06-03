import React, { useContext, useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import { FirebaseContext } from '../context/FirebaseContext'
import { onAuthStateChanged } from 'firebase/auth'

function Header() {
  const [username,setUsername] = useState('')
  const {auth} = useContext(FirebaseContext)

  useEffect(()=> {
    const unsubscribe = onAuthStateChanged(auth,(user) => {
      if(user) {
        setUsername(user.displayName)
      } else {
        setUsername('sign in')
      }

      return () =>unsubscribe();

    },[auth])
  })
  return (
    <div className='header-section'>
      <nav>
        <div className="logo">
            <h2>Logo</h2>
        </div>
        <div>
            <ul>
                <li><Link to="/">Home</Link></li>
                <li><Link to="checkout">Checkout</Link></li>
                <li><Link to="contact">Contact</Link></li>
                <li>
                  <div>
                    <p>Hello, {username}</p>
                    <h4>Account</h4>
                  </div>
                </li>
            </ul>
        </div>
      </nav>
    </div>
  )
}

export default Header
