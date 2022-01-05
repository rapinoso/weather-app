export const fetchOpenWeather = async (city, apiKey) => {
  //implement it for other types of api calls
  const res = await fetch(
    `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`
  );
  const data = await res.json();
  return data;
};
