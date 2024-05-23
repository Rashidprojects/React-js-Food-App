import React, { useState } from "react"
import Card from "./Card"
import Popup from "./Popup"



function SpecialDishes(props) {

    const [showPopUp,setShowPopUp] = useState(false)
    const [currentDish,setCurrentDish] = useState('')


    //PopUp Display and Remove Condition
  function popupHandler(currentDishId) {
    showPopUp === true ? setShowPopUp(false) : setShowPopUp(true)
    setCurrentDish(currentDishId)
  }


    let specialMenus = props.specialMenu.map((menuItem,index)=>{
        let specialMenuCount = 6
        if (specialMenuCount > index){
            return(
                <Card menuItem = {menuItem} showPopUp = {popupHandler}/>
        )
        }else{
            return null
        }
    })
    return(
        
        <div className="dish-container">
            { showPopUp && <Popup closePopUp = {popupHandler} currentDishId = {currentDish}/>}
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