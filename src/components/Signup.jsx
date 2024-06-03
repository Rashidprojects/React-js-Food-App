import React, { useContext, useState } from 'react'
import { FirebaseContext } from '../context/FirebaseContext'
import { createUserWithEmailAndPassword, updateProfile } from 'firebase/auth'

const Signup = () => {
    const [username,SetUsername] = useState('')
    const [email,SetEmail] = useState('')
    const [password,SetPassword] = useState('')

    const {auth} = useContext(FirebaseContext)
    const handleSubmit = async (e) => {
        e.preventDefault()
        try{
            const userCredential = await createUserWithEmailAndPassword(auth,email,password)
            await updateProfile(userCredential.user,{displayName:username})
        }catch(err){
            console.log(err.message);
        }
    }

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <input type="text" placeholder='Enter username' onChange={(e) => SetUsername(e.target.value) }/>
        <input type="email" placeholder='Enter email' onChange={(e) => SetEmail(e.target.value) }/>
        <input type="password" placeholder='Enter password' onChange={(e) => SetPassword(e.target.value) }/>
        <button type='submit'>Submit</button>
      </form>
    </div>
  )
}

export default Signup
