import React, { createContext, useContext, useReducer } from 'react'

const CartContext = createContext()

const AppProvider = ({children}) => {

    const initialState = {
        cartItems : []
    }

    const reducer = (state,action) => {
        switch(action.type){
            case 'add_to_cart':
                const itemIndex = state.cartItems.findIndex(item => item.id === action.payload.id)
                if(itemIndex > -1){
                    const newItems = state.cartItems.map(item => 
                        item.id === action.payload.id ? { ...item, quantity: item.quantity +1 } : item
                    )
                    return { ...state, cartItems : newItems }
                }
                return {
                    ...state,
                    cartItems: [...state.cartItems, {...action.payload, quantity : 1} ]
                }
            case 'update_quantity':
                return {
                    ...state,
                    cartItems : state.cartItems.map(item => 
                        item.id === action.payload.id ? { ...item, quantity: action.payload.quantity } : item
                    )
                }
            case 'remove_from_cart':
                return {
                    ...state,
                    cartItems : state.cartItems.filter(item => 
                        item.id !== action.payload.id
                    )
                }
            default:
                return state
        }
    }

    const [state,dispatch] = useReducer(reducer,initialState)
    console.log("Dispatch Recieved",state);


  return (
    <CartContext.Provider value={{state,dispatch}}>
        {children}
    </CartContext.Provider>
  )
}

export { AppProvider }

export const useCart = () => useContext(CartContext)
