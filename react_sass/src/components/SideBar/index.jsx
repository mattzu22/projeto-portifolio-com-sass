import Avatar from "../../img/perfil.png"
import { InformacionContainer } from "../InformationContainer"
import { SocialNetWorks } from "../SocialNetWorks"
import './style.sass'


export const SideBar = () =>{
    return(
        <aside id="sidebar">
            <img src={Avatar} alt="Matheus Macedo"/>
            <p className="title">Desenvolvedor</p>
            <SocialNetWorks />
            <InformacionContainer />
            <a href="" className="btn">
                Dowload currículo
            </a>
        </aside>
    )
}