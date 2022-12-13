import './pagCADASTRO.css'
import Img1 from './ImgCADASTRO/img-card1.png'
import Img2 from './ImgCADASTRO/img-card2.png'
import Logo from '../Logo.png'
import { Link } from 'react-router-dom'

 function CadastroTipoPerfil () {
    return (
        <div className='GeralCADASTRO' >
            <header className='headerCadastro'>
                <Link to='/VOE'><img src={Logo} /></Link>
            </header>
            <div className="CardBODY">
            <div className="CardsGroupCadastro">

                <div className='CardGeralPerfil'>

               <h1>Perfil Pessoal</h1>
               <img src={Img1} />
               <div className='TextCADASTRO' >
               • Deixe o perfil com a sua cara e acesse os serviços disponíveis
               </div>

               <Link to='/CriarContaPessoal'><button id='ValueCADASTROpessoal' >Cadastre-se</button></Link>

                </div>

                <div className='CardGeralPerfil'>

               <h1>Perfil Profissional</h1>
               <img src={Img2} />
               <div className='TextCADASTRO' >
               • Exponha seu serviço ou sua loja para que as outras pessoas possam ver
               </div>

               <Link to='/EscolhendoPerfilProfissional'><button id='ValueCADASTROpessoal' >Cadastre-se</button></Link>

                </div>

            </div>
            
            </div>

        </div>
    )
 }

 export default CadastroTipoPerfil