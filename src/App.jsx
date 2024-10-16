import { useEffect, useRef } from "react";
import { useWeatherStore } from "./useWeatherStore";

//importing sections
import Hero from "./sections/Hero";
import Weather from "./sections/Weather";

const App = () => {

  const {
    setLoading,
    weatherData,
    setWeatherData,
    setCurrentWeather,
    setWeatherDays,
    location,
    superSecretKey,
  } = useWeatherStore();

  const weatherRef = useRef(null);

  const scrollToSection = () => {
    weatherRef.current.scrollIntoView({ behavior: 'smooth' });
  };

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

      setWeatherData(response);
      setCurrentWeather(response.currentConditions);
      setWeatherDays(response.days);
    } catch (err) {
      console.error(err.message);
    } finally {
      setLoading(false);
    }
  }

  useEffect(() => {
    if (weatherData.currentConditions?.temp && weatherRef.current) {
      weatherRef.current.scrollIntoView({ behavior: 'smooth' });
    }
  }, [weatherData]);

  return (
    <div className="
      bg-background text-text min-h-[100dvh] 
      flex flex-col items-center justify-center
    ">
      <Hero getWeatherData={getWeatherData} />
      {
        weatherData.currentConditions?.temp && <Weather weatherRef={weatherRef} />
      }
    </div>
  )
}

export default App
