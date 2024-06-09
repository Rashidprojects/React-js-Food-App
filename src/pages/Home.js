import React from 'react'
import Hero from '../components/Hero'
import SpecialDishes from "../components/SpecialDishes"
import FilteredDishes from "../components/FilteredDishes"
import { AllMenus } from "../components/AllMenuContext"

const Home = () => {
  return (
        <div>         
            <Hero />
            <AllMenus>
                <SpecialDishes />      
                 <FilteredDishes /> 
            </AllMenus>
        </div>
  )
}

export default Home
