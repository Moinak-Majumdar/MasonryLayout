import Background from "./components/Background"
import ImgGrid from "./components/ImgGrid"

function App() {
  return (
    <main className="px-4 md:px-10 lg:px-16 xl:px-36 2xl:px-44 min-h-screen flex bg-slate-800">
      <ImgGrid />
      <Background />
    </main>
  )
}

export default App
