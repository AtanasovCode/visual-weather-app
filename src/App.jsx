import { FileCss, Cat } from "@phosphor-icons/react";
import { useWeatherStore } from "./useWeatherStore";

const App = () => {

  const {
    cats,
  } = useWeatherStore();

  return (
    <div className="bg-background text-text min-h-[100dvh] flex items-center justify-center">
      <div className="flex items-center jsutify-center mr-6">
        <Cat 
          size={64}
          weight="fill"
          color="#FFF"
        />
      </div>
      <div className="font-bold text-7xl text-center">
        Cats: {cats}
      </div>
    </div>
  )
}

export default App
