import React from 'react'
import { WiHumidity,WiWindy } from "react-icons/wi";
function WeatherDisplayCard({weatherData}) {
    const {
        name,
        main:{temp,feels_like,temp_min,temp_max,humidity},
        weather,
        wind:{speed},
        sys:{country}
    } = weatherData
    return (
        <div className="max-w-lg mx-auto rounded-lg flex items-center justify-center backdrop-blur-sm p-4 shadow-lg">
  <div className="w-full bg-inherit bg-opacity-5 rounded-lg text-white p-8">
    <h2 className="font-bold text-xl text-center mb-4">
      {name}, {country}
    </h2>
    <p className="font-medium text-center text-lg capitalize">
      {weather[0].description}
    </p>

    <div className="grid grid-cols-2 sm:grid-cols-3 gap-4 mt-6">
      <div className="flex flex-col items-center justify-center bg-black bg-opacity-30 backdrop-blur-sm shadow-md p-2 rounded-lg">
        <p className="text-2xl font-semibold">{Math.round(temp)}°C</p>
        <p className="text-sm font-light">Temperature</p>
      </div>
      <div className="flex flex-col items-center justify-center bg-black bg-opacity-30 backdrop-blur-sm shadow-md p-2 rounded-lg">
        <p className="text-2xl font-semibold">{Math.round(temp_min)}°C</p>
        <p className="text-sm font-light">Min Temp</p>
      </div>
      <div className="flex flex-col items-center justify-center bg-black bg-opacity-30 backdrop-blur-sm shadow-md p-2 rounded-lg">
        <WiHumidity className="text-2xl text-blue-300" />
        <p className="text-xl font-semibold">{humidity}%</p>
        <p className="text-sm font-light">Humidity</p>
      </div>
      <div className="flex flex-col items-center justify-center bg-black bg-opacity-30 backdrop-blur-sm shadow-md p-2 rounded-lg">
        <p className="text-2xl font-semibold">{Math.round(feels_like)}°C</p>
        <p className="text-sm font-light">Feels Like</p>
      </div>
      <div className="flex flex-col items-center justify-center bg-black bg-opacity-30 backdrop-blur-sm shadow-md p-2 rounded-lg">
        <p className="text-2xl font-semibold">{Math.round(temp_max)}°C</p>
        <p className="text-sm font-light">Max Temp</p>
      </div>
      <div className="flex flex-col items-center justify-center bg-black bg-opacity-30 backdrop-blur-sm shadow-md p-2 rounded-lg">
        <WiWindy color="#87CEEB" className="text-2xl" />
        <p className="text-xl font-semibold">{speed} m/s</p>
        <p className="text-sm font-light">Wind Speed</p>
      </div>
    </div>
  </div>
</div>

    )
}

export default WeatherDisplayCard
