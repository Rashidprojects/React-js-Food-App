import React, { useEffect, useState } from "react"
import Hero from "./Hero"
import SpecialDishes from "./SpecialDishes"
import FilteredDishes from "./FilteredDishes"
import Header from "./Header"

import { AllMenus } from "./AllMenuContext"

function Menu() {
    
    return(
        <div>
           <Header/>
           <Hero/>
           <AllMenus>
                <SpecialDishes />      
                <FilteredDishes /> 
           </AllMenus>
        </div>
    )
}
export default Menu