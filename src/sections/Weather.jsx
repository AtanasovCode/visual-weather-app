import { useWeatherStore } from "../useWeatherStore";
import { getBackgroundImage } from "../Utils";

import {
    Drop,
    Cloud,
    SunHorizon,
    Sun,
    CloudRain,
    Wind,
    ThermometerSimple,
} from "@phosphor-icons/react";

import CurrentWeather from "../components/CurrentWeather";
import WeatherBox from "../components/WeatherBox";

const Weather = ({
    weatherRef
}) => {

    const {
        weatherData,
        currentWeather,
    } = useWeatherStore();

    return (
        <div
            ref={weatherRef}
            id="weather"
            className={`
                flex flex-col items-start justify-start py-12 px-6
                min-h-[100dvh] w-full text-text
                ${getBackgroundImage(currentWeather.icon)} bg-center bg-cover bg-no-repeat
            `}
        >
            <div className="flex flex-col items-start justify-start">
                <CurrentWeather />
            </div>
        </div>
    );
}

export default Weather;