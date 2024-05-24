import React, { useContext, useState } from "react"
import Card from "./Card"
import Popup from "./Popup"
import { AllMenuContext } from "./AllMenuContext"
import AddtoCart from "./AddtoCart"



function SpecialDishes(props) {

    const [showPopUp,setShowPopUp] = useState(false)
    const [currentDish,setCurrentDish] = useState('')
    const [addCartItems,setAddCartItems] = useState([])


    //PopUp Display and Remove Condition
  function popupHandler(currentDishId) {
    showPopUp === true ? setShowPopUp(false) : setShowPopUp(true)
    setCurrentDish(currentDishId)
  }

  //useContext
  const allMenus = useContext(AllMenuContext)

    let specialMenus = allMenus.map((menuItem,index)=>{
        let specialMenuCount = 6
        if (specialMenuCount > index){
            return(
                <Card menuItem = {menuItem} showPopUp = {popupHandler}/>
        )
        }else{
            return null
        }
    })

    function addToCartHandler(itemImage,itemTitle){
        setAddCartItems(
            [
              ...addCartItems,
            {
                "img" : itemImage,
                "title" : itemTitle
            }]
        )
    }
    return(
        
        <div className="dish-container">
            <AddtoCart cartItems = {addCartItems} />
            { showPopUp && <Popup closePopUp = {popupHandler} currentDishId = {currentDish} 
                addToCartHandler = {addToCartHandler}
            />}
            <div className="container">
                <div className="dish-text">
                    <div>
                        <h1>Our Special Dishes</h1>
                    
                        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Deserunt nobis voluptatibus itaque? Ducimus iusto magni quia totam deleniti expedita earum necessitatibus repellendus eos, voluptas nesciunt porro architecto illo, adipisci aperiam facere amet numquam, repellat soluta.</p>
                    </div>
                </div>
                <div className="special-dishes-container">
                  <ul>
                    {specialMenus}
                  </ul>
                </div>
            </div>
        </div>
    )
}
export default SpecialDishes