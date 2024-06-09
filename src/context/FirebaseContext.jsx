import { createContext } from "react";

export const FirebaseContext = createContext(null)

export const FirebaseContextProvider = ({auth,children}) => {
    return(
        <FirebaseContext.Provider value={{auth}}>
            {children}
        </FirebaseContext.Provider>
    )
}