const API_KEY = import.meta.env.VITE_API_KEY
const BASE_URL = "https://api.openweathermap.org/data/2.5/weather"


export const FetchWeatherData = async ({city = null,lat = null, lon = null })=>{
let url=''
if(lat && lon){
    url=`${BASE_URL}?lat=${lat}&lon=${lon}&appid=${API_KEY}&units=metric`
}else if(city){
    url=`${BASE_URL}?q=${city}&appid=${API_KEY}&units=metric`
}else{
    throw new Error("No Location Information Provided");
    
}
    try {
        const response = await fetch(url)
        const data = await response.json()
        if(!response.ok) {
            throw new Error(data.message || "Failed To Fetch Weather Data")
        }
        return data;
    } catch (error) {
        console.error("Error Fetching Data :", error)
        throw error
    }
}