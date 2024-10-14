import { FileCss, Cat } from "@phosphor-icons/react";
import { useEffect } from "react";
import { useWeatherStore } from "./useWeatherStore";

//importing sections
import Hero from "./components/Hero";

const App = () => {

  const {
    loading,
    setLoading,
    weatherData,
    setWeatherData,
    weatherDataDays,
    setWeatherDataDays,
    location,
    superSecretKey,
  } = useWeatherStore();

  const fetchWeatherData = async () => {
    try {
      setLoading(true);

      const data = await fetch(`https://weather.visualcrossing.com/VisualCrossingWebServices/rest/services/timeline/${location}?unitGroup=metric&include=current%2Cdays&key=${superSecretKey}&contentType=json`);
      const weatherResponse = await data.json();

      return weatherResponse;
    } catch (err) {
      console.error(err.message);
    }
  }

  const getWeatherData = async () => {
    try {
      const response = await fetchWeatherData();

      console.log(response);

      setWeatherData(response.currentConditions);
      setWeatherDataDays(response.days);
    } catch (err) {
      console.error(err.message);
    } finally {
      setLoading(false);
    }
  }

  return (
    <div className="
      bg-background text-text min-h-[100dvh] 
      flex flex-col items-center justify-center
    ">
      <Hero />
    </div>
  )
}

export default App
