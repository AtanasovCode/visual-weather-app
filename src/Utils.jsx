import { format, parseISO } from 'date-fns';
import {
    CloudSnow,
    CloudRain,
    CloudFog,
    Wind,
    Cloud,
    CloudSun,
    CloudMoon,
    Sun,
    MoonStars,
} from "@phosphor-icons/react";

export const getIcon = (iconType, iconSize, iconWeight, iconColor) => {
    switch (iconType) {
        case "snow": {
            return <CloudSnow size={iconSize} weight={iconWeight} color={iconColor} />
        }
        case "rain": {
            return <CloudRain size={iconSize} weight={iconWeight} color={iconColor} />
        }
        case "fog": {
            return <CloudFog size={iconSize} weight={iconWeight} color={iconColor} />
        }
        case "wind": {
            return <Wind size={iconSize} weight={iconWeight} color={iconColor} />
        }
        case "cloudy": {
            return <Cloud size={iconSize} weight={iconWeight} color={iconColor} />
        }
        case "partly-cloudy-day": {
            return <CloudSun size={iconSize} weight={iconWeight} color={iconColor} />
        }
        case "partly-cloudy-night": {
            return <CloudMoon size={iconSize} weight={iconWeight} color={iconColor} />
        }
        case "clear-day": {
            return <Sun size={iconSize} weight={iconWeight} color={iconColor} />
        }
        case "clear-night": {
            return <MoonStars size={iconSize} weight={iconWeight} color={iconColor} />
        }
    }
}


export const getBackgroundImage = (iconType) => {
    switch (iconType) {
        case "snow": {
            return 'bg-snow';
        }
        case "rain": {
            return 'bg-rain';
        }
        case "fog": {
            return 'bg-fog';
        }
        case "wind": {
            return 'bg-cloudy'; // Assuming you want a cloudy background for wind as there is no wind image specified
        }
        case "cloudy": {
            return 'bg-cloudy';
        }
        case "partly-cloudy-day": {
            return 'bg-cloudy-day';
        }
        case "partly-cloudy-night": {
            return 'bg-cloudy-night';
        }
        case "clear-day": {
            return 'bg-clear-sky';
        }
        case "clear-night": {
            return 'bg-clear-night';
        }
        default: {
            return 'bg-hero'; // Fallback background
        }
    }
}

export const floorNumber = (number)=> {
    return Math.floor(number);
}

export const formatDateToDay = (date) => {
    const parsedDate = typeof date === 'string' ? parseISO(date) : date;
    return format(parsedDate, "EEE, d");
}

//converts temp to C or F depending on user choice
export const getTemp = (unit, temp) => {
    if(unit === "c") {
        return floorNumber(temp);
    } else {
        const f = (temp * 9) / 5 + 32;

        return floorNumber(f);
    }
}

export const getWindSpeed = (unit, speed) => {
    if(unit === "c") {
        return speed;
    } else {
        return speed * 0.621371;
    }
}