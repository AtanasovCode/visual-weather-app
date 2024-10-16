import { useWeatherStore } from "../useWeatherStore";
import { MapPinArea } from "@phosphor-icons/react/dist/ssr";

const ErrorHandling = () => {
    return (
        <div className="min-h-[100dvh] w-full flex items-center justify-center bg-accent text-white">
            <div className="flex flex-col items-center justify-center w-[90%] xs:w-[70%] md:w-[50%] lg:w-[30%] max-w-[20rem]">
                <div className="flex items-center justify-center w-20 lg:w-24 mb-4">
                    <MapPinArea size="100%" weight="fill" color="#FFF" />
                </div>
                <div className="text-md font-semibold text-center">
                    Oops, something went wrong. Try refreshing the page and searching for a valid location.
                </div>
            </div>
        </div>
    );
}

export default ErrorHandling;