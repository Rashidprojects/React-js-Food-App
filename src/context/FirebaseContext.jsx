import { createContext, useContext } from "react";

export const FirebaseContext = createContext(null)

export const useFirebase =  () => {
    useContext(FirebaseContext)
}

export const FirebaseContextProvider = ({auth,children}) => {
    return(
        <FirebaseContext.Provider value={{auth}}>
            {children}
        </FirebaseContext.Provider>
    )
}