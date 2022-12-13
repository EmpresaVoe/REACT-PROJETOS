
import './PagAJUDA.css';
import Bg_ajuda from './ImgAjuda/bg_ajuda.png'
import CompPerguntasFrequentes from './pagesAjuda/CompPerguntasFrequentes'
import CompFaleConosco from './pagesAjuda/CompFaleConosco'
import FaleConoscoRedeSocial from './pagesAjuda/CompFaleConoscoRedeSocial';
function Ajuda() {
  return (
    <div className="AJUDA">
      <div className='InicioAJUDA'>
        <img id='BgAJUDA' src={Bg_ajuda} alt='' />
      </div>

      <div id='MeioAJUDA' className='MeioAJUDA'>
        <div className='divFaleConosco'>
          <CompFaleConosco />
        </div>
        <div className='divFaleConosco2'>
          <CompPerguntasFrequentes />
        </div>
      </div>
      
      <div className='FimAJUDA'>
        <FaleConoscoRedeSocial />
        </div>
    </div>
  );
}
export default Ajuda;