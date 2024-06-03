import React from 'react'
import Hero from '../components/Hero'
import SpecialDishes from "../components/SpecialDishes"
import FilteredDishes from "../components/FilteredDishes"
import { AllMenus } from "../components/AllMenuContext"
import { AppProvider } from "../context/AppProvider"

const Home = () => {
  return (
    <AppProvider>
        <div>         
            <Hero />
            <AllMenus>
                <SpecialDishes />      
                 <FilteredDishes /> 
            </AllMenus>
        </div>
    </AppProvider>
  )
}

export default Home
