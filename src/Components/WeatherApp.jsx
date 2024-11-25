import React,{useState,useEffect} from 'react'
import { WiDaySunny, WiCloud, WiThunderstorm, WiSnow, WiFog, WiSmoke, WiRain, WiDust } from "react-icons/wi";
import { IoSearch } from "react-icons/io5";
import { FetchWeatherData } from '../Api'
import WeatherDisplayCard from './WeatherDisplayCard'
import Header from './Header';
import Footer from './Footer';

function WeatherApp() {
    
    const [weather,setWeather]= useState(null)
    const [city,setCity]= useState('')
    const [loading,setLoading]= useState(false)
    const [error,setError]= useState('')
    const [background,setBackground] = useState('')
    const [icon,seticon] = useState(null)

    const handleSubmit = async (e)=>{
        e.preventDefault()
        setLoading(true)

        try {
            const data = await FetchWeatherData({city})
            console.log(data);
            
            setWeather(data)
            setCity('')
            setError("")
            setLoading(false)
        } catch (error) {
            setError("Could not find city:")
            setLoading(false)
        }}
        useEffect(() => {
         const loadBackgroundImage = async()=>{
             try {
                const condition = await weather.weather[0].main.toLowerCase()
                let selectedIcon;
                switch (condition) {
                    case "clear":
                        const clearSky = await import("../assets/CardImages/clearSky.jpg")
                        setBackground(clearSky.default)
                        selectedIcon = <WiDaySunny className='text-6xl text-yellow-400' />
                        break;
                    case "clouds":
                        const clouds = await import("../assets/CardImages/clouds.jpg")
                        setBackground(clouds.default)
                         selectedIcon = <WiCloud className='text-6xl text-gray-700' />
                        break;
                    case "thunderstorm":
                        const thunderstorm = await import("../assets/CardImages/thunderstorm.jpg")
                        setBackground(thunderstorm.default)
                         selectedIcon = <WiThunderstorm className='text-6xl text-purple-600' />
                        break;
                    case "snow":
                        const snow = await import("../assets/CardImages/snow.jpg")
                        setBackground(snow.default)
                         selectedIcon = <WiSnow className='text-6xl text-blue-300' />
                        break;
                    case "haze":
                        const haze = await import("../assets/CardImages/haze.jpg")
                        setBackground(haze.default)
                         selectedIcon = <WiFog className='text-6xl text-gray-500' />
                        break;
                    case "mist":
                        const mist = await import("../assets/CardImages/mist.jpg")
                        setBackground(mist.default)
                         selectedIcon = <WiFog className='text-6xl text-gray-500' />
                        break;
                    case "fog":
                        const fog = await import("../assets/CardImages/fog.jpg")
                        setBackground(fog.default)
                         selectedIcon = <WiFog className='text-6xl text-gray-500' />
                        break;
                    case "smoke":
                        const smoke = await import("../assets/CardImages/smoke2.jpg")
                        setBackground(smoke.default)
                         selectedIcon = <WiSmoke className='text-6xl text-gray-700' />
                        break;
                    case "rain":
                        const rain = await import("../assets/CardImages/rain.jpg")
                        setBackground(rain.default)
                         selectedIcon = <WiRain className='text-6xl text-blue-600' />
                        break;
                
                    default:
                            const defaultImage = await import("../assets/CardImages/defaultImage.jpg")
                            setBackground(defaultImage.default)
                             selectedIcon = <WiDust className='text-6xl text-yellow-500' />
                        break;
                }
                seticon(selectedIcon)
            } catch (error) {
                console.log(error);
                
            }
            
         }
         loadBackgroundImage()
        }, [weather])

        const getGeoLocation = async ()=>{
            return new Promise((resolve,reject)=>{
                if(navigator.geolocation){
                    navigator.geolocation.getCurrentPosition(
                        (position)=> resolve(position.coords),
                        (err)=>reject(err)
                    )
                }else{
                    reject("Geolocation not supported by your browser")
                }
            })
        }

        useEffect(() => {
         const fetchWeather = async (lat,lon)=>{
                try {
                    const data = await FetchWeatherData({lat,lon})
                    setWeather(data)
                } catch (error) {
                    setError("Failed to fetch weather, try again")
                }
         }
         const fetchLocationAndWeather = async ()=>{
            try {
                const coords = await getGeoLocation()
                await fetchWeather(coords.latitude,coords.longitude)
            } catch (error) {
                setError(`Geolocation Error: ${error}`)
            }
            
            
         }
         fetchLocationAndWeather()
        }, [])  
    
    return (
        <div
  className="min-h-screen bg-sky-400"
  style={{
    backgroundImage: `url(${background})`,
    backgroundPosition: "center",
    backgroundSize: "cover",
  }}
>

  <div className="flex justify-between p-1">
    <Header />
  </div>


  <div className="flex flex-col items-center">
  
    <form
      className="w-full max-w-md sm:max-w-lg md:max-w-xl flex items-center rounded-lg border border-gray-200 border-opacity-20 shadow-lg p-2"
      onSubmit={handleSubmit}
    >
      <input
        type="text"
        className="w-full p-2 rounded-lg hover:backdrop-blur-sm bg-gray-100 bg-opacity-10 placeholder:text-white focus:outline-none text-white"
        placeholder="Enter city name"
        value={city}
        onChange={(e) => setCity(e.target.value)}
      />
      <button
        type="submit"
        className="text-white font-semibold p-4 bg-transparent"
        disabled={loading}
      >
        {loading ? (
          <IoSearch  className="w-5 h-6 text-sky-500"/>
        ) : (
          <IoSearch className="w-5 h-6 text-white" />
        )}
      </button>
    </form>

  
    <div className="mt-4 mx-auto rounded-lg bg-transparent backdrop-blur-sm bg-gray-400  border-white border-opacity-20 shadow-lg bg-opacity-5 p-6">
      {error && (
        <p className="font-semibold text-white text-center">{error}</p>
      )}
      {icon && <div className="flex justify-center items-center">{icon}</div>}
      {weather && <WeatherDisplayCard weatherData={weather} />}
    </div>
  </div>
  <Footer />
</div>

    )
}

export default WeatherApp
