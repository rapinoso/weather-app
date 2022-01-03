import React from 'react';

const Searchbar = (props) => {

    const handleChange = e => {
        console.log(e.target.value)
        props.callback(e.target.value)
    }
    return (
        <div className="App-searchbar">
            <h1>Insert a city name to get its weather forecast</h1>
            <input name="searchbar" id="searchbar" onChange={handleChange}/>
        </div>
    );
};

export default Searchbar;