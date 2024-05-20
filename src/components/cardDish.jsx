import React from 'react'

function cardDish(props) {
  return (
    <li>
        <img src={props.menuItem.strMealThumb} alt="" />
        <h2>{props.menuItem.strMeal}</h2>
    </li>
  )
}

export default cardDish
