import React from "react";

const Dashboard = (props) => {
  const { data } = props;
  return (
    <div className="App-dashboard">
      <p>{data?.name}</p>
      <p>{data?.weather?.[0]?.description}</p>
      <p>{data?.main?.temp && <span>{data?.main?.temp}°</span>}</p>
      {data?.weather?.[0].icon && (
        <img
          src={`https://openweathermap.org/img/wn/${data?.weather?.[0].icon}@2x.png`}
          alt="weather icon"
        />
      )}
    </div>
  );
};

export default Dashboard;
