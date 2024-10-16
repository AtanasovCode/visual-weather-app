import { useWeatherStore } from "../useWeatherStore";
import { floorNumber, getWindSpeed } from "../Utils";
import WeatherBox from "./WeatherBox";
import TempAndLoc from "./TempAndLoc";

import { 
    SunHorizon,
    Sun,
    Wind,
    Drop,
    CloudRain,
    ThermometerSimple, 
} from "@phosphor-icons/react";

const CurrentWeather = () => {

    const {
        weatherData,
        units,
        currentWeather,
    } = useWeatherStore();

    return (
        <div className="
            flex flex-col items-start justify-center flex-1 text-white p-4 w-full
            lg:flex-row bg-black bg-opacity-50 lg:p-6 rounded-xl
        ">
            <TempAndLoc />
            <div className="
                    grid grid-cols-2 gap-2 lg:gap-6 justify-items-center mt-6 w-full
                ">
                <WeatherBox
                    icon={<Drop size="100%" weight="fill" color="#fff" />}
                    title="Humidity"
                    value={`${floorNumber(currentWeather.humidity)}%`}
                />
                <WeatherBox
                    icon={<Sun size="100%" weight="fill" color="#fff" />}
                    title="Sunrise"
                    value={currentWeather.sunrise}
                />
                <WeatherBox
                    icon={<CloudRain size="100%" weight="fill" color="#fff" />}
                    title="Precipitation"
                    value={`${floorNumber(currentWeather.precip)}%`}
                />
                <WeatherBox
                    icon={<SunHorizon size="100%" weight="fill" color="#fff" />}
                    title="Sunset"
                    value={currentWeather.sunset}
                />
                <WeatherBox
                    icon={<Wind size="100%" weight="fill" color="#fff" />}
                    title="Wind Speed"
                    value={`${floorNumber(getWindSpeed(units, currentWeather.windspeed))}${units === "c" ? "km/h" : "mph"}`}
                />
                <WeatherBox
                    icon={<ThermometerSimple size="100%" weight="fill" color="#fff" />}
                    title="UV Index"
                    value={currentWeather.uvindex}
                />
            </div>
        </div>
    );
}

export default CurrentWeather;