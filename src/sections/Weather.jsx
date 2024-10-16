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
                lg:py-12 lg:px-6
                min-h-[100dvh] w-full
                ${getBackgroundImage(currentWeather.icon)} bg-center bg-cover bg-no-repeat
            `}
        >
            <div className="
                flex flex-col items-center justify-center
                w-full sm:w-[90%] md:w-[70%] lg:w-[100%] xl:w-[90%] 2xl:w-[75%]
                lg:max-w-[85rem]
            ">
                <div className="flex flex-col items-center justify-center w-full">
                    <CurrentWeather />
                </div>
                <div className="grid grid-cols-1 gap-2 w-full justify-items-center mt-10 lg:grid-cols-7 lg:gap-2">
                    {
                        weatherDays.map((day, index) => {
                            while (index < 7) {
                                return (
                                    <WeatherDay
                                        key={day.datetime}
                                        date={day.datetime}
                                        temp={day.temp}
                                        icon={day.icon}
                                        minTemp={day.tempmin}
                                        maxTemp={day.tempmax}
                                        precip={day.precip}
                                    />
                                );
                            }
                        })
                    }
                </div>
            </div>
        </div>
    );
}

export default Weather;