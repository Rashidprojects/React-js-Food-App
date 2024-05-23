import { useEffect, useState } from "react"
import Hero from "./Hero"
import SpecialDishes from "./SpecialDishes"
import FilteredDishes from "./FilteredDishes"
import Header from "./Header"

function Menu() {

    let [loading,setLoading] = useState(true)
    const [menu,setMenu] = useState([])
    const [category,setCategory] = useState([])
    const [singleCategory,setSingleCategory] = useState([])
 
    // List all items 
    async function getAllTHeMenu() {
        const API_URL = "https://www.themealdb.com/api/json/v1/1/search.php?f=c"
        let response = await fetch(API_URL)
        let data = await response.json()
        setMenu(data.meals)
        setLoading(false)
    }

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
       getAllTHeMenu()
       getAllCategories()
       getSingleCategory()
  },[])

 

    return(
        <div>
           <Header/>
           <Hero/>
           {!loading ? <SpecialDishes specialMenu ={menu} /> : <div className="loading-container">
            <h1>Loading...</h1>
           </div> }
           {!loading ? <FilteredDishes 
            allCategory = {category} 
            allMenus={menu}
            singleCategory = {singleCategory}
            setSingleCategory = {setSingleCategory}
            /> : null}
        </div>
    )
}
export default Menu