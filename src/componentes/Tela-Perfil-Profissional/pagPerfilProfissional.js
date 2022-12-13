
import {AiOutlineArrowLeft} from'react-icons/ai'
import {AiOutlineSetting} from 'react-icons/ai'

import {IoMdContact} from 'react-icons/io'
import {MdOutlineEmojiPeople} from 'react-icons/md'
import {GrShieldSecurity} from 'react-icons/gr'
import {FcSynchronize} from 'react-icons/fc'
import {ImExit} from 'react-icons/im'

import Menu from '../Tela-Rotas/Rotas.js'
import Footer from '../FooterROTAS.js'

import Img1 from './imgPerfilProfissional/img1.png'
import Img2 from './imgPerfilProfissional/img2.png'
import Img3 from './imgPerfilProfissional/img3.png'
import Star from './imgPerfilProfissional/Star.png'
import Estrela from './imgPerfilProfissional/imgStar.png'

import './pagPerfilProfissional.css'
import { Link } from 'react-router-dom'

function PerfilProfissional() {
    return (
        <div className='GeralPerfilPESSOAL'>
            <header>

                <Menu />

            </header>

            <div className='PerfilPessoalCONTEUDO'>

            <div className='PerfilConteudoBIO' >

            <div className='DivConfiguração'>

                <div className='DivTituloConfiguração'>
                <AiOutlineArrowLeft className='IconConfigui'/><h1>Configuração</h1><AiOutlineSetting className='IconConfigui'/>
                </div>

                <ul className='ListaConfig'>
                <IoMdContact className='IconList'/> <li> Conta</li>
                <MdOutlineEmojiPeople className='IconList'/> <li>Acessibilidade</li>
                <GrShieldSecurity className='IconList'/> <li>Segurança</li>
                <FcSynchronize className='IconList'/> <li>Tipo da conta</li>
                <ImExit className='IconList'/> <li>Sair da conta</li>

                </ul>
            </div>

            <img className='ImgPerfil' src={Img1} />
            <h1>Confeiteira</h1>
            <h3>Clailane Izabelly</h3>

            <div className='PefilClassificação'>
            <img src={Star} /><h4>5,0</h4>
            </div>

            <h5>Faço docinhos de festa, bolos e salgados.</h5>
            <Link to=''><button id='BotãoContratar' className='BotãoContratar'>Contratar</button></Link>
            </div>

            </div> 
            
                <div className='TituloAvaliação'>
                    <h1>Principais avaliações sobre esse profissional:</h1>
                </div>

            <div className='AvaliaçãoPerfil'>

               <div className='CardsAvaliação'>
               
                <img src={Img2}/>

                <div>
                    <h1>Arthur Gabriel</h1>
                    Simplesmente a melhor, trabalho impecável.
                </div>   
                
                <img id='Estrela' src={Estrela}/> 

                <h1 className='pontuação'>5,0</h1>

                </div>

                <div className='CardsAvaliação'>
               
               <img src={Img3}/>

               <div>
                   <h1>Roberta Souza</h1>
                   Muito gentil, me tratou muito bem, fez tudo pedido.
               </div>   
               
               <img id='Estrela' src={Estrela}/> 

               <h1 className='pontuação'>5,0</h1>

               </div>




                  
            </div>

            <footer>

                <Footer />

            </footer>

        </div>
    )
}

export default PerfilProfissional;