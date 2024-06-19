import React, { useState } from 'react'
import { signInWithEmailAndPassword } from 'firebase/auth'
import { useFirebase } from '../context/FirebaseContext'
import { useNavigate } from 'react-router-dom'

const Login = () => {
    const [email,SetEmail] = useState('')
    const [password,SetPassword] = useState('')
    const { auth } = useFirebase()
    const navigate = useNavigate()

    const handleSubmit = async (e) => {
        e.preventDefault()
        try{
            const userCredential = await signInWithEmailAndPassword(auth,email,password)
            console.log('User signed in:', userCredential.user);
            // dispatch({ type: 'set_user', payload: {username} })
            navigate('/')
        }catch(err){
            console.log(err.message);
        }
    }
  return (
    <div className='signup-div'>
    <h1>Welcome to Login Page</h1>
      <form onSubmit={handleSubmit}>
        <input type="email" placeholder='Enter email' onChange={(e) => SetEmail(e.target.value) }/>
        <input type="password" placeholder='Enter password' onChange={(e) => SetPassword(e.target.value) }/>
        <button type='submit'>Submit</button>
      </form>
    </div>
  )
}

export default Login
