import { useWeatherStore } from "../useWeatherStore";
import { getIcon } from "../Utils";
import WeatherBox from "./WeatherBox";

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
        currentWeather,
    } = useWeatherStore();

    return (
        <div className="
            flex flex-col items-start justify-center flex-1 text-white
            bg-black bg-opacity-50 p-6 rounded-xl
        ">
            <div className="flex flex-col items-start justify-center">
                <div className="flex items-center justify-center">
                    <div className="text-4xl font-semibold">
                        {weatherData.resolvedAddress}
                    </div>
                </div>
                <div className="mt-2 flex items-center justify-center">
                    <div className="flex items-center justify-center w-[12rem] mr-4">
                        {
                            getIcon(currentWeather.icon, "100%", "fill", "#fff")
                        }
                    </div>
                    <div className="flex flex-col items-start justify-center">
                        <div className="text-6xl font-medium">
                            {currentWeather.temp}<span className="font-normal text-3xl">°C</span>
                        </div>
                        <div className="text-lg font-semibold">
                            {currentWeather.conditions}
                        </div>
                        <div className="text-lg">
                            Feels Like {currentWeather.feelslike}°C
                        </div>
                    </div>
                </div>
            </div>
            <div className="
                    grid grid-cols-2 gap-x-[10%] gap-y-6 justify-items-center mt-6 w-full
                ">
                <WeatherBox
                    icon={<Drop size="100%" weight="fill" color="#fff" />}
                    title="Humidity"
                    value={`${currentWeather.humidity}%`}
                />
                <WeatherBox
                    icon={<Sun size="100%" weight="fill" color="#fff" />}
                    title="Sunrise"
                    value={currentWeather.sunrise}
                />
                <WeatherBox
                    icon={<CloudRain size="100%" weight="fill" color="#fff" />}
                    title="Precipitation"
                    value={`${currentWeather.precip}%`}
                />
                <WeatherBox
                    icon={<SunHorizon size="100%" weight="fill" color="#fff" />}
                    title="Sunset"
                    value={currentWeather.sunset}
                />
                <WeatherBox
                    icon={<Wind size="100%" weight="fill" color="#fff" />}
                    title="Wind Speed"
                    value={`${currentWeather.windspeed}km/h`}
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