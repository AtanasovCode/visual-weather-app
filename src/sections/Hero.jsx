import { useWeatherStore } from "../useWeatherStore";
import { Umbrella } from "@phosphor-icons/react";
import LoadingAnim from "../components/LoadingAnim";

const Hero = ({ getWeatherData }) => {

    const {
        location,
        changeLocation,
        loading,
    } = useWeatherStore();

    return (
        <div className="
            min-h-[100dvh] w-full
            flex items-center justify-center
            bg-hero bg-center bg-cover bg-no-repeat
        ">
            <div className="flex flex-col items-center justify-center w-full">
                <div className="mb-6 text-background flex items-center justify-center">
                    <div className="mr-2 flex items-center justify-center w-16 lg:w-24">
                        <Umbrella
                            size="100%"
                            weight="fill"
                            color="#FFF"
                        />
                    </div>
                    <div className="font-bold text-4xl lg:text-5xl">
                        WeaWhere
                    </div>
                </div>
                <div className="
                    flex items-center justify-center p-2 bg-background text-text rounded-xl
                    w-[95%] 2xs:w-[80%] xs:w-[70%] sm:w-[60%] md:w-[40%] lg:w-[30%] lg:max-w-[60rem]
                ">
                    <input
                        type="text"
                        placeholder="Enter city name..."
                        value={location}
                        onChange={(e) => changeLocation(e.currentTarget.value)}
                        className="
                            bg-transparent focus:border-none outline-none flex-1
                        "
                    />
                    <div className="flex-1 relative">
                        {
                            loading ?
                                <div className="w-full py-2 bg-secondary flex items-center justify-center">
                                    <LoadingAnim />
                                </div>
                                :
                                <input
                                    type="button"
                                    value={loading ? "" : "See Weather"}
                                    onClick={() => location !== "" && getWeatherData()}
                                    className="bg-secondary py-2 rounded-xl rounded-bl-none rounded-tl-none w-full h-full cursor-pointer"
                                />
                        }
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Hero;