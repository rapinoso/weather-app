import React from "react";

const Searchbar = (props) => {
  return (
    <div className="App-searchbar">
      <h1>Insert a city name to get its weather forecast</h1>
      <input type="text" name="searchbar" onChange={props.onCityChange} />
    </div>
  );
};

export default Searchbar;
