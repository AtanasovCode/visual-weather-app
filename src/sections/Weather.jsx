import { useWeatherStore } from "../useWeatherStore";

import CurrentWeather from "../components/CurrentWeather";

const Weather = () => {

    const {
        weatherData,
    } = useWeatherStore();

    return (
        <div
            id="weather"
            className="flex flex-col items-start justify-start py-12 px-6
                min-h-[100dvh] w-full bg-background text-text"
        >
            <CurrentWeather />
        </div>
    );
}

export default Weather;