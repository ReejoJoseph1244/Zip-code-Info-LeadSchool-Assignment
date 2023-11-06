import React, { useState } from "react";
import "./Searchstyle.css";
import search_icon from "../Assets/search.png";
import Displayinfo from "../displayinfo/Displayinfo";
import Loadimg from "../Assets/loadimg.jpg";

function Searchbar() {
  const [showDisplayinfo, setshowDisplayinfo] = useState(false);
  const [data, setData] = useState({});
  const [error, setError] = useState(false);
  const [loading, setLoading] = useState(false);

  const toggleSecondComponent = () => {
    if (showDisplayinfo !== true) {
      setshowDisplayinfo(!showDisplayinfo);
    }
  };
  const search = async () => {
    setLoading(true);
    console.group("search function called");
    const zipcode = document.getElementById("zipcode").value;
    console.log(zipcode);
    let url = `https://api.zippopotam.us/in/${zipcode}`;

    try {
      var response = await fetch(url);
      if (!response.ok) {
        throw new Error("");
      }
    } catch (error) {
      setError(true);
    }

    let tempdata = await response.json();
    setData(tempdata);
    console.log(data);

    toggleSecondComponent();
    setLoading(false);
  };

  if (error) {
    return <Displayinfo error={error.message} />;
  }

  return (
    <div className="bodyblock">
      <div className="container">
        <div className="top-bar">
          <input type="text" id="zipcode" placeholder="Search for zipcode" />
          <div
            className="search-icon"
            onClick={() => {
              search();
            }}
          >
            <img src={search_icon} alt="Loading" />
          </div>
        </div>
      </div>

      {loading && (
        <div className="loading">
          <div className="spinner">
            <img src={Loadimg} alt="" />
          </div>
        </div>
      )}

      <div>
        {showDisplayinfo && (
          <Displayinfo data={data} displaystate={true} error={error.message} />
        )}
      </div>
    </div>
  );
}

export default Searchbar;
