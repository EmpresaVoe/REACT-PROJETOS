import './pagESCOLHAperfilProf.css'
import Img1 from './ImgESCOLHAprof/img-loja.png'
import Img2 from './ImgESCOLHAprof/img-servico.png'
import Logo from '../Logo.png'
import { Link } from 'react-router-dom'

 function CadastroTipoPerfil () {
    return (
        <div className='GeralESCOLHAperfilProf' >
            <header className='headerESCOLHAperfilProf'>
                <Link to='/VOE'><img src={Logo} /></Link>
            </header>


            <div className="CardBODYESCOLHAperfilProf">
            <div className="CardsGroupESCOLHAperfilProf">

                <div className='CardGeralPerfilESCOLHA'>

               <h1>Serviço</h1>
               <img src={Img1} />
               <div className='TextESCOLHAperfilProf' >
               • Divulgue os seus serviços e receba mensagens de clientes interessados
               </div>

               <Link to='/CriarContaProfissionalServiço'><button id='ValueESCOLHAperfilProf' >Cadastre-se</button></Link>

                </div>

                <div className='CardGeralPerfilESCOLHA'>

               <h1>Estabelecimento</h1>
               <img src={Img2} />
               <div className='TextESCOLHAperfilProf' >
               • Crie sua loja e anuncie seus produtos para vendas
               </div>

               <Link to='/CriarContaProfissionalLoja'><button id='ValueESCOLHAperfilProf' >Cadastre-se</button></Link>

                </div>

            </div>
            
            </div>

        </div>
    )
 }

 export default CadastroTipoPerfil