import { useWeatherStore } from "../useWeatherStore";
import { getIcon, floorNumber } from "../Utils";

const WeatherDay = ({
    icon,
    temp,
    maxTemp,
    minTemp,
    date,
}) => {
    return (
        <div className="flex flex-col items-center justify-center bg-black bg-opacity-50  text-white p-4 rounded-xl">
            <div className="mb-2 text-sm">
                {date}
            </div>
            <div className="w-12 flex items-center justify-center mb-4">
                {getIcon(icon, "100%", "fill", "#FFF")}
            </div>
            <div className="font-semibold text-lg">
                {floorNumber(temp)}<span className="text-md">°C</span>
            </div>
            <div className="text-sm">
                Max: {floorNumber(maxTemp)}°C
            </div>
            <div className="text-sm">
                Min: {floorNumber(minTemp)}°C
            </div>
        </div>
    );
}

export default WeatherDay;