import { FileCss } from "@phosphor-icons/react"

const App = () => {
  return (
    <div className="bg-background text-text min-h-[100dvh] flex items-center justify-center">
      <div className="flex items-center jsutify-center mr-6">
        <FileCss 
          size={64}
          weight="fill"
          color="#FFF"
        />
      </div>
      <div className="font-bold text-7xl text-center">
        Installed TailwindCSS
      </div>
    </div>
  )
}

export default App
