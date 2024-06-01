import Background from "./components/Background"
import ImgGrid from "./components/ImgGrid"

function App() {
  return (
    <main className="px-4 md:px-10 lg:px-16 xl:px-36 2xl:px-44 min-h-screen flex flex-col bg-slate-800">
    <p className="text-slate-200 text-2xl z-10 text-center mt-4" >My masonry Layout</p>
      <ImgGrid />
      <Background />
    </main>
  )
}

export default App
