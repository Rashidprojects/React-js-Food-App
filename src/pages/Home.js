
import Hero from '../components/Hero'
import SpecialDishes from "../components/SpecialDishes"
import FilteredDishes from "../components/FilteredDishes"
import Header from "../components/Header"
import { AllMenus } from "../components/AllMenuContext"
import { BrowserRouter as Router,Route, Routes } from "react-router-dom"
import Contact from "../components/Contact"
import { AppProvider } from "../context/AppProvider"
import Checkout from "../components/Checkout"

function Menu() {
    
    return(
        <Router>
        <AppProvider>
            <div>
            <Header/>
                <Routes>
                    <Route exact path="/" element={
                        <>
                            <Hero />
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
        </Router>
    )
}
export default Menu