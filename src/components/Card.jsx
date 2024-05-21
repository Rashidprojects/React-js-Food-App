import React from 'react'

function Card(props) {
  return (
    <div>
        {/* <li>
            <img src={props.menuItem.strMealThumb} alt="" />
            <h2>{props.menuItem.strMeal}</h2>
        </li> */}

        <li key={props.menuItem.idMeal}>
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
