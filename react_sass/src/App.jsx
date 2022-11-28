import { MainContent } from "./components/MainContent/inde"
import { SideBar } from "./components/SideBar"
import './styles/app.sass'


function App() {
  return (
    <div id="portifolio">
      <h1>Matheus Macedo</h1>
      <SideBar />
      <MainContent />
    </div>
  )
}

export default App
