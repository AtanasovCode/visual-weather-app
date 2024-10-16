import { useWeatherStore } from "../useWeatherStore";
import { getBackgroundImage } from "../Utils";


import CurrentWeather from "../components/CurrentWeather";
import WeatherDay from "../components/WeatherDay";


const Weather = ({
    weatherRef
}) => {

    const {
        weatherData,
        currentWeather,
        weatherDays,
    } = useWeatherStore();

    return (
        <div
            ref={weatherRef}
            id="weather"
            className={`
                flex flex-col items-center justify-center py-8 px-2
                lg:items-start lg:justify-start lg:py-12 lg:px-6
                min-h-[100dvh] w-full
                ${getBackgroundImage(currentWeather.icon)} bg-center bg-cover bg-no-repeat
            `}
        >
            <div className="flex flex-col items-center justify-center w-full">
                <CurrentWeather />
            </div>
            <div className="grid grid-cols-7 gap-6">
                {
                    weatherDays.map((day, index) => {
                        while (index < 7) {
                            return (
                                <WeatherDay
                                    date={day.datetime}
                                    temp={day.temp}
                                    icon={day.icon}
                                    minTemp={day.tempmin}
                                    maxTemp={day.tempmax}
                                />
                            );
                        }
                    })
                }
            </div>
        </div>
    );
}

export default Weather;