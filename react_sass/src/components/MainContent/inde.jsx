import { About } from '../AboutContainer'
import { Projects } from '../ProjectsContainer'
import { Technologies } from '../TechnologiesContainer'
import './style.sass'

export const MainContent = () =>{
    return(
        <main id='main-content'> 
            <About />
            <Technologies />
            <Projects />
        </main>
    )
}