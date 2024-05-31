
import Hero from "./Hero"
import SpecialDishes from "./SpecialDishes"
import FilteredDishes from "./FilteredDishes"
import Header from "./Header"

import { AllMenus } from "./AllMenuContext"
import { BrowserRouter,Route, Routes } from "react-router-dom"
import Contact from "./Contact"
import { AppProvider } from "../context/AppProvider"
import Checkout from "./Checkout"

function Menu() {
    
    return(
        <BrowserRouter>
        <AppProvider>
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
                    <Route path="checkout" element={<Checkout/> } />
                        
                </Routes>
            </div>
        </AppProvider>
        </BrowserRouter>
    )
}
export default Menu