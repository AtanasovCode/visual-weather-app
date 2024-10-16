import { useWeatherStore } from "../useWeatherStore";
import { getIcon } from "../Utils";

const TempAndLoc = () => {

    const { weatherData, currentWeather } = useWeatherStore();

    return (
        <div className="flex flex-col items-start justify-center">
            <div className="flex items-center justify-center">
                <div className="text-2xl lg:text-4xl font-semibold">
                    {weatherData.resolvedAddress}
                </div>
            </div>
            <div className="mt-2 flex items-center justify-center">
                <div className="flex items-center justify-center w-[6rem] lg:w-[12rem] mr-4">
                    {
                        getIcon(currentWeather.icon, "100%", "fill", "#fff")
                    }
                </div>
                <div className="flex flex-col items-start justify-center">
                    <div className="text-4xl lg:text-6xl font-medium">
                        {currentWeather.temp}<span className="font-normal text-xl lg:text-3xl">°C</span>
                    </div>
                    <div className="text-md lg:text-lg font-semibold">
                        {currentWeather.conditions}
                    </div>
                    <div className="text-md lg:text-lg">
                        Feels Like {currentWeather.feelslike}°C
                    </div>
                </div>
            </div>
        </div>
    );
}

export default TempAndLoc;