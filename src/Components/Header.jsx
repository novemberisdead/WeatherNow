import React from 'react'
import { WiDayCloudy } from 'react-icons/wi'
function Header() {
    return (
        <header className="flex items-center justify-between bg-inherit  p-2 ">
      <div className="flex items-center space-x-2">
        <WiDayCloudy size={32} color="#FFD700" />
        <h1 className="text-white text-lg font-semibold">WeatherNow</h1>
      </div>
    </header>
    )
}

export default Header
