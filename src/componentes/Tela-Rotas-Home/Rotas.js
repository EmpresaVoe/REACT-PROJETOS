import { Link } from 'react-router-dom';
import styles from './Rotas.css';
import {GiHamburgerMenu } from 'react-icons/gi';
import { BsChatDots } from 'react-icons/bs';
import { MdOutlineKeyboardArrowDown } from 'react-icons/md';
import Logo from '../Logo.png';


function Rota() {
  return (
<div className='GeralROTAS'>
      <div className='MenuLimk'>
      <Link to="/VOE" ><img className='LogoROTAS' src={Logo}/></Link>

    
      </div>
      <ul className='listaUl1'>

        <li><Link className='LinkRotas' to="/Login" ><button className='buttonLista'>Serviços</button>  </Link></li>

        <li><Link className='LinkRotas' to="/Login"><button className='buttonLista'>Lojas </button>  </Link></li>

        <li><Link className='LinkRotas' to="/Login" ><button className='buttonLista'> Cursos</button>  </Link></li>

        <li><Link className='LinkRotas' to="/Login" ><button className='Entrar'> Entrar </button></Link></li>

      </ul>
    </div>
  )
}

export default Rota;