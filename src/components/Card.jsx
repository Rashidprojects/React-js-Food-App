import React from 'react'

function Card(props) {

    function scrollToTop(){
        window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
    }

    function handleClick(){
        props.showPopUp(props.menuItem.idMeal);
        scrollToTop();
    }


  return (
    <div>
       
        <li onClick={handleClick}
            key={props.menuItem.idMeal}>
          <div className="item-container">
            <div className="image-container">
              <img src={props.menuItem.strMealThumb} alt={props.menuItem.strMeal} />
            </div>
            <div className="text-container">
              <h2>{props.menuItem.strMeal}</h2>
            </div>
          </div>
        </li>
    </div>
  )
}

export default Card
