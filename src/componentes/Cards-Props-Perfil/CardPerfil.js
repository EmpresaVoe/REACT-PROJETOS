import './CardPerfil.css'
import {IoMdNotificationsOutline} from 'react-icons/io'
import {FaRegCommentDots} from 'react-icons/fa'
import {BsChevronDown} from 'react-icons/bs'
import { Link } from 'react-router-dom';

function CardPerfil (props) {
    return (
        <div className='GeralCardPerfil'>

            <div className='CardPerfil'>
            <IoMdNotificationsOutline className='IconCardPerfil'/>
            <FaRegCommentDots className='IconCardPerfil' />
            <Link className='LinkPerfil' to='/PerfilPessoal'><img src={props.Perfil} /></Link>
            
            </div>

            <Link to='/Voe'><button><BsChevronDown/></button></Link>

         
        </div>
    )
}

export default CardPerfil;