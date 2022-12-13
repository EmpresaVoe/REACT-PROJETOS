import {AiOutlineInstagram } from 'react-icons/ai';
import {MdOutlineMailOutline } from 'react-icons/md';
import '../PagAJUDA.css'

function FaleConoscoRedeSocial () {
return( 
<div className='FaleConoscoLink'>
    <span> Fale Conosco</span>
    <div>
        <ul>
            <li><AiOutlineInstagram className='LogoLista'/><a target={'_blank'} href='https://www.instagram.com/equipe_voe_official/'>@projeto_voe</a></li>
            <li><MdOutlineMailOutline className=' LogoLista'/><a target={'_blank'} href=''>projetovoe@gmail.com</a></li>
        </ul>
    </div>
</div>
    
)
}

export default FaleConoscoRedeSocial 