import { createContext, useContext, useReducer } from "react";

export const FirebaseContext = createContext(null)

export const FirebaseContextProvider = ({auth,children}) => {

    const initialState = {
        username : '',
        userStatus : false,
        loading : true
    };

    const firebaseReducer = (state,action) => {
        switch (action.type) {
            case 'set_user' :
                return {
                    ...state,
                    username : action.payload.username,
                    userStatus : true,
                    loading : false
                }
            case 'sign_out' :
                return {
                    ...state,
                    username : 'sign in',
                    userStatus : false,
                    loading : false
                }
            case 'set_loading' :
                return {
                   ...state,
                   loading: true
                }
            default:
                return state
        }
    }

    const [state, dispatch] = useReducer(firebaseReducer, initialState)
    return(
        <FirebaseContext.Provider value={{auth,state,dispatch}}>
            {children}
        </FirebaseContext.Provider>
    )
}

export const useFirebase = () => useContext(FirebaseContext)