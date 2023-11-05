import React from 'react'
import './Searchstyle.css'
import search_icon from '../Assets/search.png'

function Searchbar() {
  const search = ()=>{
    console.group("search function called");
    const zipcode = document.getElementById("zipcode").value;
    console.log(zipcode);
  }
  return (
    <div className='bodyblock'>
      <div className='container'>
        <div className="top-bar">
          <input type="text" id="zipcode" placeholder="Search for zipcode" />
          <div
            className="search-icon"
            onClick={() => {
              search();
            }}
          >
            <img src={search_icon} alt="" />
          </div>
        </div>
    </div>

    </div>
  )
}

export default Searchbar;