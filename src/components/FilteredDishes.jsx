import React, { useEffect, useState } from 'react';
import Pagination from './Pagination';
import Popup from './Popup';
import Card from './Card';

function FilteredDishes({ allMenus, 
                         allCategory, 
                         singleCategory
                          }) {

  const [filteredCategory, setFilteredCategory] = useState([]);
  const [selectedCategory,setSelectedCategory] = useState()
  const [activeDishes,setActiveDishes] = useState("Beef")
  const [firstDisplayCategory,setFirstDisplayCategory] = useState([])
  const [currentPage,setCurrentPage] = useState(1)
  const [itemsPerPage,SetItemsPerPage] = useState(6)
  const [showPopUp,setShowPopUp] = useState(false)

  let endingDishindex = currentPage * itemsPerPage
  let startingDishIndex = endingDishindex - itemsPerPage


  // Slice Filtered Dishes
  let showItems = filteredCategory.slice(startingDishIndex,endingDishindex)
  let showFirstItems = firstDisplayCategory.slice(startingDishIndex,endingDishindex)

  

  // Set Beef Category to firt Category and handle beef category api

  useEffect(() => {
    if(singleCategory.length > 0 ){
      firstItem();
    }
  }, [singleCategory]);

  useEffect(() => {
    if(activeDishes === "Beef"){
      firstItem();
    } else{
      setFirstDisplayCategory([])
    }
  },[activeDishes]);
  
  function firstItem() {
    let initialCategory = singleCategory.map((item) => {
      return (
        <Card menuItem = {item} showPopUp = {popupHandler} />
      );
    }) 
    setFirstDisplayCategory(initialCategory)
  }

  
  const [currentDish,setCurrentDish] = useState('')

  //PopUp Display and Remove Condition
  function popupHandler(currentDish) {
    showPopUp === true ? setShowPopUp(false) : setShowPopUp(true)
    setCurrentDish(currentDish)
  }


  function categoryButtonHandler(categoryName) {     
      
      setActiveDishes(categoryName);
      
        const filteredDishes = allMenus.filter((item) => item.strCategory === categoryName && item.strCategory !== "Beef");
  
      setSelectedCategory(
        <h1 className='selected-category'>{categoryName} Categories</h1>
      );
  
      // Map the filtered dishes to JSX elements
      const filteredDishesAre = filteredDishes.map((item) => {
        return (
          <li key={item.idMeal} onClick={() => popupHandler()}>
          <div className="item-container">
            <div className="image-container">
              <img src={item.strMealThumb} alt={item.strMeal} />
            </div>
            <div className="text-container">
              <h2>{item.strMeal}</h2>
            </div>
          </div>
        </li>
        );
      });
  
      // Update the state with the filtered JSX elements
      setFilteredCategory(filteredDishesAre);
    
     
  }
  

  const allCategories = allCategory.map((item) => (
    <li key={item.strCategory}>
      <div className="item-block">
        <button className= { activeDishes === item.strCategory ? "active" : ""}
          onClick={() => {
            categoryButtonHandler(item.strCategory);
          }}
        >
          {item.strCategory}
        </button>
      </div>
    </li>
  ));

  return (
    <div className="filtered-dish-section">
      { showPopUp && <Popup closePopUp = {popupHandler} 
                            currentDish = {currentDish}
                            />}
      <div className="filtered-dish-container">
  
        <div className="dish-text">
          <h1>Select Your Favourite Category</h1>
        </div>
  
        <div className="all-categories">
          <div className="category-items">{allCategories}</div>
        </div>
  
        <div className="filtered-categories">
          {activeDishes !== "Beef" ? selectedCategory : (
            <h1 className='selected-category'>Beef Categories</h1>
          )}
          
          <div className="special-dish">
            <div className="special-dishes-container bottom"> 
              <ul>{showFirstItems}</ul>

              
              {
                filteredCategory.length !== 0 || firstDisplayCategory.length !== 0 ? <ul>{showItems}</ul> : 
                  <div className='empty-array'>
                    <h2>Sorry,Try another dish category</h2>
                  </div> 
              }
            </div>
          </div>
        </div>
      </div>

      <Pagination 
        dishItemsCount = {activeDishes !== "Beef" ? filteredCategory : firstDisplayCategory }
        setCurrentPage = {setCurrentPage}
      ></Pagination>
    </div>

  );
  
}

export default FilteredDishes;
