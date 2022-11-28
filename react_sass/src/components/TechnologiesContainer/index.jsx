import { 
  DiHtml5,
  DiCss3,
  DiJsBadge,
  DiNodejsSmall,
  DiReact,
  DiSass  
} from 'react-icons/di'

import './style.sass'

const technologies = [
    { id: "html", name: "HTML5", icon: <DiHtml5 /> },
    { id: "css", name: "CSS3", icon: <DiCss3 /> },
    { id: "js", name: "JavaScript", icon: <DiJsBadge /> },
    { id: "node", name: "Node.js", icon: <DiNodejsSmall /> },
    { id: "sass", name: "Sass", icon: <DiSass /> },
    { id: "react", name: "React", icon: <DiReact /> },
  ];
  

export const Technologies = () =>{
    return(
        <section className='technologies'>
            <h2>Technologies</h2>
            <div className='technologies-grid'>
                {
                    technologies.map((tech, index) =>{
                        return(
                            <div className="card" id={tech.id} key={index}>
                                {tech.icon}
                                <div className='info'>
                                    <h3>{tech.name}</h3>
                                    <p>Lorem ipsum dolor sit amet, consectetur adipisicing el</p>
                                </div>
                            </div>
                        )
                    })
                }
            </div>
        </section>
    )
}