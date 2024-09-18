import { useEffect, useState } from "react";

function Weather() {
  const [currentWeather, setCurrentWeather] = useState({
    weather: [],
  });
  const [city, setCity] = useState("karachi");

  useEffect(() => {
    console.log("Use effect ka function call hogya");
    getWeather();
  }, [city]);

  const getWeather = () => {
    fetch(
      `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=1f136667cfcdb418bf8b7a4c5a542f00`
    )
      .then((res) => res.json())
      .then((res) => {
        setCurrentWeather(res);
      });
  };

  const temp = Math.round(currentWeather?.main?.temp - 273.15);
  const feelsLike = Math.round(currentWeather?.main?.feels_like - 273.15);
  const weatherCondition = currentWeather?.weather ?  currentWeather?.weather[0]?.main : "";
  
  return (
    <div className="max-w-md mx-auto p-4 bg-white rounded-lg shadow-md">
      <h1 className="text-2xl font-semibold text-center mb-4">Weather App</h1>
      <div className="mb-4">
        <select
          name="city"
          onChange={(e) => setCity(e.target.value)}
          className="block w-full p-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500"
        >
          <option value="karachi">Karachi</option>
          <option value="lahore">Lahore</option>
          <option value="islamabad">Islamabad</option>
          <option value="murree">Murree</option>
          <option value="peshawar">Peshawar</option>
          <option value="abbottabad">Abbotabad</option>
        </select>
      </div>

      <div className="bg-gray-100 rounded-lg shadow-md p-4 space-y-4">
        <div className="flex justify-between items-center">
          <h2 className="text-lg font-medium text-gray-700">Temperature</h2>
          <p className="text-xl font-semibold text-gray-900">{temp}°C</p>
        </div>
        <div className="flex justify-between items-center">
          <h2 className="text-lg font-medium text-gray-700">Feels Like</h2>
          <p className="text-xl font-semibold text-gray-900">{feelsLike}°C</p>
        </div>
        <div className="flex justify-between items-center">
          <h2 className="text-lg font-medium text-gray-700">Weather</h2>
          <p className="text-xl font-semibold text-gray-900">{weatherCondition}</p>
        </div>
      </div>
    </div>
  );
}

export default Weather;
