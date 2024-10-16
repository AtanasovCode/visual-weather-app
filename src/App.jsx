import { useEffect, useRef } from "react";
import { useWeatherStore } from "./useWeatherStore";

//importing sections
import Hero from "./sections/Hero";
import Weather from "./sections/Weather";
import ErrorHandling from "./components/ErrorHandling";

const App = () => {

  const {
    setLoading,
    weatherData,
    setWeatherData,
    setCurrentWeather,
    setWeatherDays,
    location,
    superSecretKey,
    error,
    setError,
  } = useWeatherStore();

  const weatherRef = useRef(null);

  const scrollToSection = () => {
    weatherRef.current.scrollIntoView({ behavior: 'smooth' });
  };

  const fetchWeatherData = async () => {
    try {
      setLoading(true);

      const data = await fetch(`https://weather.visualcrossing.com/VisualCrossingWebServices/rest/services/timeline/${location}?unitGroup=metric&include=current%2Cdays&key=${superSecretKey}&contentType=json`);

      if (!data.ok) {
        setError(true);
        throw new Error(`Error: ${data.status} - ${data.statusText}`);
      }

      const weatherResponse = await data.json();

      return weatherResponse;
    } catch (err) {
      setError(true);
      console.error(err.message);
    }
  }

  const getWeatherData = async () => {
    try {
      const response = await fetchWeatherData();

      if (!response) return;

      setWeatherData(response);
      setCurrentWeather(response.currentConditions);
      setWeatherDays(response.days);
    } catch (err) {
      setError(true);
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
    <>
      {
        error ?
          <ErrorHandling />
          :
          <div className="min-h-[100dvh] flex flex-col items-center justify-center">
            <Hero getWeatherData={getWeatherData} />
            {
              weatherData.currentConditions?.temp && <Weather weatherRef={weatherRef} />
            }
          </div>
      }
    </>
  );
}

export default App
