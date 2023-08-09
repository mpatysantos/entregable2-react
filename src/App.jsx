import { useEffect, useState } from 'react'
import './App.css'
import axios from 'axios'
import Weather from "./components/Weather";
import SearchCity from "./components/SearchCity";


function App() {
  const [weatherInfo, setWeatherInfo] = useState(null)

  const success = (pos) => {
    const lat = pos.coords.latitude
    const lon = pos.coords.longitude

    const API_KEY = "e3a11e3855708d5c8b392dfc2532c732"
    const url = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${API_KEY}`
    
    axios
      .get(url)
      .then(({ data }) => setWeatherInfo(data))
      .catch((err) => console.log(err))
  }

  console.log(weatherInfo)
  
  const handleSubmit = (event) => {
    event.preventDefault()
    const name = event.target.city.value

    const API_KEY = "e3a11e3855708d5c8b392dfc2532c732"
    const url2 = `https://api.openweathermap.org/data/2.5/weather?q=${name}&appid=${API_KEY}`
    
    axios
    .get(url2)
    .then(({ data }) => setWeatherInfo(data))
    .catch((err) => console.log(err))
    event.target.reset()
  }
 
  useEffect(() => {
    navigator.geolocation.getCurrentPosition(success)
  }, [])
  
  const backGroundImages = {
    "10d": "bg-[url(/images/background-images/rain.jpg)]",
    "11d": "bg-[url(/images/background-images/thunderstrom.jpg)]",
    "13d": "bg-[url(/images/background-images/snow.jpg)]",
    "13n": "bg-[url(/images/background-images/snow.jpg)]",
    "01d": "bg-[url(/images/background-images/clearSky.jpg)]",
    "01n": "bg-[url(/images/background-images/clearSky.jpg)]",
    "02d": "bg-[url(/images/background-images/fewClouds.jpg)]",
    "02n": "bg-[url(/images/background-images/fewClouds.jpg)]",
    "03d": "bg-[url(/images/background-images/scartteredClouds.jpg)]",
    "03n": "bg-[url(/images/background-images/scartteredClouds.jpg)]",
    "04d": "bg-[url(/images/background-images/brokenClouds.jpg)]",
    "04n": "bg-[url(/images/background-images/brokenClouds.jpg)]",
    "09n": "bg-[url(/images/background-images/showerRain.jpg)]",
    "10n": "bg-[url(/images/background-images/rain.jpg)]",
    "11n": "bg-[url(/images/background-images/thunderstrom.jpg)]",
    "50n": "bg-[url(/images/background-images/haze.jpg)]",
    
  }
  
  const image = weatherInfo?.weather[0].icon
  console.log(image)
  return (
    <main 
    className={`bg-blue-600 min-h-screen text-black font-lato flex flex-col justify-center items-center px-4 ${backGroundImages[image]}`}>
      {/* <section><img src="/images/background-images/haze.jpg" alt="" />

      </section> */}
      <SearchCity handleSubmit={handleSubmit}/>
      <Weather weatherInfo={weatherInfo}/>
    </main>
  )
}

export default App