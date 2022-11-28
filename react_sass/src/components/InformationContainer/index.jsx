import { AiFillPhone, AiOutlineMail, AiFillEnvironment } from 'react-icons/ai'

import './style.sass'

const informacion = [
    {

    }
]

export const InformacionContainer = () =>{
    return(
        <section id='informacion'>
            <div className='info-card'>
                <AiFillPhone id='phone-icon' />
                <div>
                    <h3>Telefone</h3>
                    <p>(84) 99999-9999</p>
                </div>

            </div>

            <div className='info-card'>
                <AiOutlineMail id='email-icon' />
                <div>
                    <h3>E-mail</h3>
                    <p>matheusg3@gmail.com</p>
                </div>

            </div>

            <div className='info-card'>
                <AiFillEnvironment id='pin-icon' />
                <div>
                    <h3>Localização</h3>
                    <p>Natal - Rio Grande Do Norte</p>
                </div>

            </div>
        </section>
    )
}