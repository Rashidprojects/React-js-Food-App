import React, { useEffect, useState } from "react"
import Hero from "./Hero"
import SpecialDishes from "./SpecialDishes"
import FilteredDishes from "./FilteredDishes"
import Header from "./Header"

import { AllMenus } from "./AllMenuContext"

function Menu() {

    let [loading,setLoading] = useState(true)
    const [category,setCategory] = useState([])
    const [singleCategory,setSingleCategory] = useState([])

    // List Categories only
    async function getAllCategories() {
        const API_URL = "https://www.themealdb.com/api/json/v1/1/categories.php"
        let response = await fetch(API_URL)
        let categoryData = await response.json()
        setCategory(categoryData.categories)
        setLoading(false)
    }

    // List items by Category 
    async function getSingleCategory() {
        const API_URL = "https://www.themealdb.com/api/json/v1/1/filter.php?c=Beef"
        let response = await fetch(API_URL)
        let singleCategory = await response.json()
        setSingleCategory(singleCategory.meals)
        setLoading(false)
    }


    useEffect( () => {
       getAllCategories()
       getSingleCategory()
  },[])

 

    return(
        <div>
           <Header/>
           <Hero/>

           <AllMenus>
                <SpecialDishes />
        
                {!loading ? <FilteredDishes 
                    allCategory = {category} 
                    singleCategory = {singleCategory}
                    setSingleCategory = {setSingleCategory}
                    /> : null}
            </AllMenus>
        </div>
    )
}
export default Menu