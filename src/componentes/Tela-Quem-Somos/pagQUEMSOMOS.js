import './pagQUEMSOMOS.css'

import {MdOutlineEmail} from 'react-icons/md'
import {FiInstagram} from 'react-icons/fi'

import Img1 from './imgQUEMSOMOS/img1.png'
import Img2 from './imgQUEMSOMOS/img2.png'
import Img3 from './imgQUEMSOMOS/img3.png'
import Img4 from './imgQUEMSOMOS/img4.png'
function App() {
  return (
    <div className="GeralQuemSomos">

      <div className='img'>
      <img src={Img1} alt=''/>
      </div>

      <div className='img'>
      <img src={Img2} alt=''/>
      </div>

      <div className='img'>
      <img src={Img3} alt=''/>
      </div>
      
      <div className='img'>
      <img src={Img4} alt=''/>
      <ul className='UlLink'> 
       <MdOutlineEmail className='icon'/><li> <a>projetovoe@gmail.com</a></li>
       <FiInstagram className='icon'/><li> <a>@projeto_voe</a></li>
      </ul>
      </div>

      </div>
  );
}

export default App;
