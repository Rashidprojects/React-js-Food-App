import React, { useEffect, useState } from 'react'
import { IoClose} from "react-icons/io5";

function Popup({ closePopUp, currentDishId}) {
  const [detailedDish, setDetailedDish] = useState(null);
  const [isExpanded, setIsExpanded] = useState(false)

  function toggleExpand(){
    setIsExpanded(!isExpanded)
  }

  // List items by Category 
  async function getDetailedDish() {
    const API_URL = `https://www.themealdb.com/api/json/v1/1/lookup.php?i=${currentDishId}`;
    let response = await fetch(API_URL);
    let singleDishDetails = await response.json();
    setDetailedDish(singleDishDetails.meals[0]); // Assume there's only one meal returned
  }
   console.log(detailedDish);
  useEffect(() => {
    if (currentDishId) {
      getDetailedDish();
    }
  }, [currentDishId]);

  if (!detailedDish) {
    return <div>Loading...</div>;
  }

  
  
  

  return (
    <div className='popup-section'>
      <div className="popup-container">
        <div className='image-container'>
          <div className="category-popup">
            <h4>{detailedDish.strCategory}</h4>
          </div>
          <div>
            <img src={detailedDish.strMealThumb} alt={detailedDish.strMeal} />
          </div>
          <div className='popup-name'>
            <h2 className='name'>{detailedDish.strMeal}</h2>
            <h2>$40.00</h2>
          </div>
          <div className="btn-purchase">
            <button>Add to Cart</button>
            <button className='buy-btn'>Buy Now</button>
          </div>
           
        </div>
        <div className='popup-description'>
        <div>
            <h3>Ingredients</h3>
            <ul>
              
              <li>{detailedDish.strIngredient1}</li>
              <li>{detailedDish.strIngredient2}</li>
              <li>{detailedDish.strIngredient3}</li>
              <li>{detailedDish.strIngredient4}</li>
              <li>{detailedDish.strIngredient5}</li>
            </ul>
          </div>
          <div>
            <h3>Description</h3>
            <p className={isExpanded ? 'expanded' : ''}>{detailedDish.strInstructions}</p> <span className='toggleExpand' onClick={toggleExpand}>{!isExpanded ? 'View more' : 'View less'}</span>
          </div>
        </div>
        <div onClick={closePopUp} className='popup-close'>
          <IoClose />
        </div>
      </div>
    </div>
  )
}

export default Popup;
