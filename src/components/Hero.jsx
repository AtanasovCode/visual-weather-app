import { useWeatherStore } from "../useWeatherStore";
import { Umbrella } from "@phosphor-icons/react";

const Hero = () => {

    const {
        location,
        changeLocation,
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
                    <input
                        type="button"
                        value="See Weather"
                        onClick={() => console.log("Click")}
                        className="py-2 bg-secondary rounded-xl rounded-bl-none rounded-tl-none flex-1"
                    />
                </div>
            </div>
        </div>
    );
}

export default Hero;