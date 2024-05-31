import React, { useReducer } from 'react'

const Category = () => {

    const initialState = {
        cart :1
    };

    const reducer = (state,action) => {
        switch(action.type){
            case 'add':
                return {...state, cart: state.cart + action.payload}
            case 'minus':
                return {...state, cart: state.cart - action.payload}
            default:
                return initialState
        }
    }
    const [state,dispatch] = useReducer(reducer,initialState)
  return (
    <div>
       
        <h1>{state.cart}</h1>
       <button onClick={()=> dispatch({type:'add',payload:4})}>Add</button>
       <button onClick={()=> dispatch({type:'minus',payload:2})}>Minus</button>
      <h1>Welocome to Category Component</h1>
    </div>
  )
}

export default Category
