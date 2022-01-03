import React from 'react';

const Dashboard = ({city, desc, icon}) => {
    console.log("inside dash component",city, desc, icon)
    return (
        <div className="App-dashboard">
            <p>City: {city} </p>
            <p>Weather: {desc} </p>
            {icon && <img src={`https://openweathermap.org/img/wn/${icon}@2x.png`} alt="weather icon"/>}
            
        </div>
    );
};

export default Dashboard;