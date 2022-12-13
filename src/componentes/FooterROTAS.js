import {Link} from 'react-router-dom';
import './FooterROTAS.css';
import Logo from'./Logo.png'

function Footer () {
    return (
        <div className='GeralFOOTER'>
            <div className='AgrugpamentoFOOTER'>

            <img  src={Logo} alt='Logo do VOE' />

            <ul className='ListaFOOTER'>
                
                <li><Link className='LinkFOOTER' to = "/Who"> Quem somos</Link></li>

                <li><Link className= 'LinkFOOTER' to = "/Help">Ajuda</Link></li>

                <li><Link className= 'LinkFOOTER' to = "/Read">Termos de uso</Link></li>

                <li><Link className= 'LinkFOOTER' to = "/Privacy">Política de privacidade</Link></li>
            </ul>

            </div>

            <p className='InfoFOOTER'> &copy;2022, VOE. CNPJ 00.000.000/0000-00 - Rua Marquês do Pombal, 57 - Santo Amaro - Recife/PE - Brasil </p>
        
        </div>
    )
}

export default Footer;