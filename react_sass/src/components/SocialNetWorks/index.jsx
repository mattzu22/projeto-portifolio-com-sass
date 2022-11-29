import { FaLinkedinIn, FaGithub, FaInstagram } from "react-icons/fa";

import "./style.sass";

const socialNetworks = [
  { name: "linkedin", icon: <FaLinkedinIn />, link: 'https://www.linkedin.com/in/matheus-santos-693318242/' },
  { name: "github", icon: <FaGithub />, link: 'https://github.com/mattzu22' },
  { name: "instagram", icon: <FaInstagram />, link: 'https://www.instagram.com/mattzu.22/' },
];

export const SocialNetWorks = () => {
  return(
    <section id="social-networks">
        {socialNetworks.map((network, index) =>{
            return(
                <a href={network.link} className="social-btn" id={network.name} key={index}>
                    {
                        network.icon
                    }
                </a>
            )
        })}
    </section>
  ) 
};
