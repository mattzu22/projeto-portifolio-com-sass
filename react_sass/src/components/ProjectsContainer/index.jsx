import './style.sass'
import gerador from '../../img/geradordeconselhos.png'

export const Projects = () =>{
    return(
        <section className='projects'>
            <h2>Projetos</h2>
        
            <div className='slider-projects'>
                <a className='gerador'  href='https://github.com/mattzu22/gerador-conselhos-React' target='_blank'>
                    
                </a>
                <a className='aluratube' href='https://github.com/mattzu22/aluratube' target='_blank'>
                
                </a>
                <a className='fylo' href='https://github.com/mattzu22/pagina-fylo' target='_blank'>
                
                </a>
                <a className='github-api' href='https://github.com/mattzu22/projeto-fetch-github-api' target='_blank'>
            
                </a>
            </div>
            {/* <a href="#" className='btn'>
                Ver Projetos
            </a> */}
        </section>
    )
}