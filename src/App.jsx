import { FileCss, Cat } from "@phosphor-icons/react";
import { useEffect } from "react";
import { useWeatherStore } from "./useWeatherStore";

const App = () => {

  const {
    loading,
    setLoading,
    weatherData,
    setWeatherData,
    location,
    superSecretKey,

    //weather values
    temp,
    setTemp,
    conditions,
    setConditions,
    icon, setIcon,
  } = useWeatherStore();

  const fetchWeatherData = async () => {
    try {
      setLoading(true);

      const data = await fetch(`https://weather.visualcrossing.com/VisualCrossingWebServices/rest/services/timeline/${location}?unitGroup=us&include=current%2Cdays&key=${superSecretKey}&contentType=json`);
      const weatherResponse = await data.json();

      return weatherResponse;
    } catch (err) {
      console.error(err.message);
    }
  }

  const getWeatherData = async () => {
    try {
      const response = await fetchWeatherData();

      setWeatherData(response);
    } catch (err) {
      console.error(err.message);
    } finally {
      setLoading(false);
    }
  }

  useEffect(() => {
    if (weatherData.currentConditions) {
      setTemp(weatherData.currentConditions.temp);
      setConditions(weatherData.currentConditions.conditions);
      setIcon(weatherData.currentConditions.icon);
    }
  }, [weatherData])

  return (
    <div className="
      bg-background text-text min-h-[100dvh] 
      flex flex-col items-center justify-center
    ">
      <input
        type="button"
        value="Get Data"
        className="px-16 py-2 bg-cyan-700 font-semibold text-center cursor-pointer rounded-xl"
        onClick={() => getWeatherData()}
      />
      <div>
        {
          !loading ?
            <div className="
              flex flex-col items-center justify-center mt-6
            ">
              <div className="flex items-center justify-center">
                <div className="mr-2">Temp:</div>
                <div> {temp} </div>
              </div>
              <div className="flex items-center justify-center">
                <div className="mr-2">Condition</div>
                <div> {conditions} </div>
              </div>
              <div className="flex items-center justify-center">
                <div className="mr-2">Icon:</div>
                <div> {icon} </div>
              </div>
            </div>
            :
            <div>
              Loading...
            </div>
        }
      </div>
    </div>
  )
}

export default App
