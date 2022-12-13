import { Link } from 'react-router-dom';
import '../PagLOGIN.css'
import LogoVoeBranco from '../ImgLogin/Lg_voe_white.png'

function HeadLogin (){
    return(
        <div className='HeadLOGIN'>
            <Link to='/VOE'><img className='Logo' src={LogoVoeBranco} alt='Logo do Voe'/></Link>
        </div>
    )
}

export default HeadLogin