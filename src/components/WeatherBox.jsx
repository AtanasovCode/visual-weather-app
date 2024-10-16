import { useWeatherStore } from "../useWeatherStore";
import {
    DropSimple,
    Wind,
    CloudRain,
} from "@phosphor-icons/react";

const WeatherBox = ({
    title,
    icon,
    value,
}) => {
    return (
        <div className="flex items-center justify-center">
            <div className="w-10 flex items-center justify-center mr-2">
                {icon}
            </div>
            <div className="flex flex-col items-start justify-center">
                <div className="text-xl font-semibold">
                    {title}
                </div>
                <div className="text-lg font-medium">
                    {value}
                </div>
            </div>
        </div>
    );
}

export default WeatherBox;