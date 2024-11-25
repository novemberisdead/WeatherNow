import React from 'react'
import OpenWeatherMap from "../assets/openweatherLogo.svg"
function Footer() {
    
    return (
        <footer className='flex items-center justify-center bg-gray-400 bg-opacity-10  p-1 mt-2'>
            <h3 className=' text-white pr-2'>Powered by <a href='https://openweathermap.org/' target='_blank' rel='noopener noreferrer' className='font-semibold'>OpenWeatherMap</a></h3><img src={OpenWeatherMap} alt='OpenWeatherMap' className='w-10 h-8 m-0 p-0'/>
        </footer>
    )
}

export default Footer
