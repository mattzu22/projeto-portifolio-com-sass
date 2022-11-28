import { FaLinkedinIn, FaGithub, FaInstagram } from "react-icons/fa";

import "./style.sass";

const socialNetworks = [
  { name: "linkedin", icon: <FaLinkedinIn /> },
  { name: "github", icon: <FaGithub /> },
  { name: "instagram", icon: <FaInstagram /> },
];

export const SocialNetWorks = () => {
  return(
    <section id="social-networks">
        {socialNetworks.map((network, index) =>{
            return(
                <a href="#" className="social-btn" id={network.name} key={index}>
                    {
                        network.icon
                    }
                </a>
            )
        })}
    </section>
  ) 
};
