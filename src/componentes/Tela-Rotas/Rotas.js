import { Link } from 'react-router-dom';
import styles from './Rotas.css';
import {GiHamburgerMenu } from 'react-icons/gi';
import { BsChatDots } from 'react-icons/bs';
import { MdOutlineKeyboardArrowDown } from 'react-icons/md';
import Logo from '../Logo.png';
import CardPerfil from '../Cards-Props-Perfil/CardPerfil';

var PerfilCards = [{ Perfil: 'https://media-exp1.licdn.com/dms/image/D4D03AQFVXaYQ3LPZQw/profile-displayphoto-shrink_800_800/0/1663182699879?e=1675900800&v=beta&t=0t07AEeapfNuo9Deuax4ocfkhLHUp42l5-2tlxRlAO4'}
]


function Rota() {
  return (
<div className='GeralROTAS'>
      <div className='MenuLimk'>
      <Link to="/Serviços" ><img className='LogoROTAS' src={Logo}/></Link>

    
      </div>
      <ul className='listaUl1'>

        <li><Link className='LinkRotas' to="/Serviços" ><button className='buttonLista'>Serviços</button>  </Link></li>

        <li><Link className='LinkRotas' to="/Lojas"><button className='buttonLista'>Lojas </button>  </Link></li>

        <li><Link className='LinkRotas' to="/Cursos" ><button className='buttonLista'> Cursos</button>  </Link></li>

        <li><Link className='LinkRotas'>{PerfilCards.map((dado) => (<CardPerfil Perfil={dado.Perfil}/>))}</Link></li>

         </ul>

      
    </div>
  )
}

export default Rota;