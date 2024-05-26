
import Hero from "./Hero"
import SpecialDishes from "./SpecialDishes"
import FilteredDishes from "./FilteredDishes"
import Header from "./Header"

import { AllMenus } from "./AllMenuContext"
import { BrowserRouter,Route, Routes } from "react-router-dom"
import Contact from "./Contact"
import Category from "./Category"

function Menu() {
    
    return(
        <BrowserRouter>
        <div>
        <Header/>
        <Hero/>
        
            <Routes>
                <Route exact path="/" element={
                     <>
                     <AllMenus>
                        <SpecialDishes />      
                        <FilteredDishes /> 
                    </AllMenus>
                     </>
                } />
                       
                
                <Route path="contact" element={<Contact />} />
                <Route path="category" element={<Category /> } />
                    
            </Routes>
        </div>
        </BrowserRouter>
    )
}
export default Menu