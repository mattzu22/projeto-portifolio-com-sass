import Avatar from "../../img/perfil.png"
import { InformacionContainer } from "../InformationContainer"
import { SocialNetWorks } from "../SocialNetWorks"
import './style.sass'
import curriculo from '../../img/curriculo.pdf'


export const SideBar = () =>{
    return(
        <aside id="sidebar">
            <img src={Avatar} alt="Matheus Macedo"/>
            <p className="title">Desenvolvedor web</p>
            <SocialNetWorks />
            <InformacionContainer />
            <a href={curriculo} download className="btn">
                Dowload currículo
            </a>
        </aside>
    )
}