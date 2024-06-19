import React from 'react'
import { Route, Routes } from "react-router-dom"
import Home from '../pages/Home'
import SignupPage from '../pages/SignupPage'
import CheckoutPage from '../pages/CheckoutPage'
import ContactPage from '../pages/ContactPage'
import LoginPage from '../pages/LoginPage'

const AppRoutes = () => {
  return (
    
      
        <Routes>
          <Route exact path='/' element={<Home /> } />
          <Route path="contact" element={<ContactPage />} />
          <Route path="checkout" element={<CheckoutPage />} />
          <Route path="signup/" element={<SignupPage/> } /> 
          <Route path="login/" element={<LoginPage /> } /> 
        </Routes> 
      
     
  )
}

export default AppRoutes
