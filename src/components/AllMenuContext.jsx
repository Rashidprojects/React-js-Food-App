import React, { useState, useEffect } from 'react'

export const AllMenuContext = React.createContext()

export const AllMenus = (props) => {

    const [menu,setMenu] = useState([])
    let [loading,setLoading] = useState(true)

     // List all items 
     async function getAllTHeMenu() {
        const API_URL = "https://www.themealdb.com/api/json/v1/1/search.php?f=c"
        let response = await fetch(API_URL)
        let data = await response.json()
        setMenu(data.meals)
        setLoading(false)
    }

    useEffect( () => {
       getAllTHeMenu()
       
  },[])

  return (
    <AllMenuContext.Provider value={menu}>
       {!loading ? props.children : <div className="loading-container">
                    <h1>Loading...</h1>
                </div> }
    </AllMenuContext.Provider>
  )
}


