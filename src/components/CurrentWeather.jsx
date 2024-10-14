import { useWeatherStore } from "../useWeatherStore";
import { getIcon } from "../Utils";

const CurrentWeather = () => {

    const {
        weatherData,
        currentWeather,
    } = useWeatherStore();

    return (
        <div className="
            flex flex-col items-start justify-center bg-background text-text p-4
        ">
            <div className="flex items-center justify-center">
                <div className="text-3xl font-bold mr-2">
                    {weatherData.address}
                </div>
                <div className="text-3xl font-medium">
                    {currentWeather.temp} <span className="font-normal text-xl">C</span>
                </div>
            </div>
            <div className="mt-2 flex items-center justify-start">
                <div className="flex items-center justify-center w-8">
                    {
                        getIcon(currentWeather.icon, "100%", "fill", "#000s")
                    }
                </div>
                <div className="ml-2">
                    {currentWeather.conditions}
                </div>
            </div>
        </div>
    );
}

export default CurrentWeather;