import React, { useState, useEffect } from "react";
import "./Displaystyle.css";
import location from "../Assets/location.png";

function Displayinfo(props) {
  const [showTable, setShowTable] = useState(true);

  const clearData = () => {
    setShowTable(false);
  };

  useEffect(() => {
    setShowTable(true);
  }, [props.data]);

  if (props.error) {
    return (
      <div className="mainblock">
        <div className="container2">
          <img src={location} alt="" />
          <h2>Data Not Found or Not able to Fetch!</h2>
          <h4>Re-enter a new ZipCode.</h4>
        </div>
      </div>
    );
  }
  if (!props.data || !props.data.places) {
    return (
      <div className="mainblock">
        <div className="container2">
          <img src={location} alt="" />
          <h2>Data Not Found </h2>
          <h4>Re-enter a new ZipCode.</h4>
        </div>
      </div>
    );
  }
  return (
    <div className="mainblock">
      <div className="container2">
        <img src={location} alt="" />
        {showTable && (
          <div>
            <table className="styled-table">
              <thead>
                <tr>
                  <th>Country Name</th>
                  <th>State</th>
                  <th>Place Name</th>
                </tr>
              </thead>
              <tbody>
                {props.data.places.map((item, index) => (
                  <tr key={index}>
                    <td>{props.data.country}</td>
                    <td>{item.state}</td>
                    <td>{item["place name"]}</td>
                  </tr>
                ))}
              </tbody>
            </table>
            <button className="clear-button" onClick={clearData}>
              Clear
            </button>
          </div>
        )}
      </div>
    </div>
  );
}

export default Displayinfo;
