import React, { useState } from 'react'

function Pagination(props) {
    const [activeButton,setActiveButton] = useState(1)

    let numberOfPages = []
    for(let i=1; i<= Math.ceil(props.dishItemsCount.length/6); i++){
        numberOfPages.push(i)
    }

    let pages = numberOfPages.map((pageNo) => {
        return(
            <li id={pageNo} className={activeButton === pageNo ? "active" : ""} 
            onClick={() => paginationHandler(pageNo) } >{pageNo}</li>
        )
    })

    function paginationHandler(pageNo) {
        setActiveButton(pageNo)
        props.setCurrentPage(pageNo)
    }
  return (
    <div className='pagination'>
        <ul>
            {pages}
        </ul>
    </div>
  )
}

export default Pagination