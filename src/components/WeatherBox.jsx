
const WeatherBox = ({
    title,
    icon,
    value,
}) => {
    return (
        <div className="flex items-center justify-center">
            <div className="w-6 xs:w-8 lg:w-10 flex items-center justify-center mr-2">
                {icon}
            </div>
            <div className="flex flex-col items-start justify-center">
                <div className="text-md xs:text-lg lg:text-xl font-semibold">
                    {title}
                </div>
                <div className="text-sm xs:text-base lg:text-lg font-medium">
                    {value}
                </div>
            </div>
        </div>
    );
}

export default WeatherBox;