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