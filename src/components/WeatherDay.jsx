import { useWeatherStore } from "../useWeatherStore";
import { getIcon, floorNumber, formatDateToDay, getTemp } from "../Utils";
import { ThermometerCold, ThermometerHot, Drop } from "@phosphor-icons/react";



const WeatherDay = ({
    icon,
    temp,
    maxTemp,
    minTemp,
    precip,
    date,
}) => {

    const {
        units,
    } = useWeatherStore();

    return (
        <div className="
            flex flex-col items-center justify-center bg-black bg-opacity-50  text-white p-4 rounded-xl
            w-full 
        ">
            <div className="mb-2 text-sm">
                {formatDateToDay(date)}
            </div>
            <div className="flex items-center justify-center w-full lg:flex-col">
                <div className="flex-1 flex flex-col items-center justify-center lg:mb-4">
                    <div className="w-20 flex items-center justify-center">
                        {getIcon(icon, "100%", "fill", "#FFF")}
                    </div>
                    <div className="font-semibold text-xl">
                        {getTemp(units, temp)}<span className="text-md uppercase">°{units}</span>
                    </div>
                </div>
                <div className="flex-1 flex flex-col items-center justify-center">
                    <div className="flex items-center justify-center mb-2">
                        <div className="flex items-center justify-cneter mr-1 w-5">
                            <ThermometerHot size="100%" weight="fill" color="#FFF" />
                        </div>
                        <div className="text-sm">
                            Max {getTemp(units, maxTemp)}
                            <span className="uppercase">°{units}</span>
                        </div>
                    </div>
                    <div className="flex items-center justify-center mb-2">
                        <div className="flex items-center justify-center mr-1 w-5">
                            <ThermometerCold size="100%" weight="fill" color="#FFF" />
                        </div>
                        <div className="text-sm">
                            Min {getTemp(units, minTemp)}
                            <span className="uppercase">°{units}</span>
                        </div>
                    </div>
                    <div className="flex items-center justify-center">
                        <div className="flex items-center justify-center mr-1 w-5">
                            <Drop size="100%" weight="regular" color="#FFF" />
                        </div>
                        <div className="text-sm">
                            Precip {floorNumber(precip)}%
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default WeatherDay;