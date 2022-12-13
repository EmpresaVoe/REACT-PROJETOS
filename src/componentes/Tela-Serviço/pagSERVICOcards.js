import { Link } from 'react-router-dom';
import './pagSERVICOcards.css'
import {AiOutlineStar} from'react-icons/ai'
import Star from './imgSERVIÇOS/Estrela.png'
function card (props){
    return <div className='CardGERAL'>

            <div className='CardINFO'>
                <div>
                <h1>{props.Profissão}</h1>
                </div>
                <div>
                <span className='NomeCard'>{props.NomePerfil}</span>
                </div>
                <div className='DescriçãoCard'>
                <span >{props.Descrição}</span>    
                </div>
                
          </div>
          <Link to='PerfilProfissional'><img id='PerfilCard' src={props.FotoPerfil} alt='Perfil'/></Link>
          <div className='Classifacação'>
            <img id='Estrela' src={Star}/>
            <button className='Pontos'>{props.Pontos}</button>
            <a><button id='PerfilVALUE'>Ver Perfil</button></a>
          </div>
          
        
        
          </div>
    
}
export default card