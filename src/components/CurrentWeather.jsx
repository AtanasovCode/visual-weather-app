import { useWeatherStore } from "../useWeatherStore";
import { getIcon } from "../Utils";
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
        currentWeather,
    } = useWeatherStore();

    return (
        <div className="
            flex flex-col items-start justify-center flex-1 text-white p-4
            w-[90%] sm:w-[90%] md:w-[70%] lg:w-auto
            bg-black bg-opacity-50 lg:p-6 rounded-xl lg:max-w-[40rem]
        ">
            <TempAndLoc />
            <div className="
                    grid grid-cols-2 gap-2 lg:gap-x-[10%] lg:gap-y-6 justify-items-center mt-6 w-full
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