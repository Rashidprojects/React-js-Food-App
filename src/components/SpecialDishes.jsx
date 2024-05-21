import React from "react"
import Card from "./Card"


function SpecialDishes(props) {

    let specialMenus = props.specialMenu.map((menuItem,index)=>{
        let specialMenuCount = 6
        if (specialMenuCount > index){
            return(
                <Card menuItem = {menuItem} />
        )
        }else{
            return null
        }
    })
    return(
        
        <div className="dish-container">
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