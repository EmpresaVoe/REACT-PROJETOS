
import './PagAJUDA.css';
import Bg_ajuda from './ImgAjuda/bg_ajuda.png'
import CompPerguntasFrequentes from './pagesAjuda/CompPerguntasFrequentes'
import CompFaleConosco from './pagesAjuda/CompFaleConosco'
import FaleConoscoRedeSocial from './pagesAjuda/CompFaleConoscoRedeSocial';
import Img_ajuda from './ImgAjuda/Img_ajuda.png'
function App() {
  return (
    <div className="App">
      <div className='InicioAJUDA'>
        <img id='BgAJUDA' src={Bg_ajuda} alt='' />
      </div>

      <div className='MeioAJUDA'>
        <div className='divFaleConosco'>
          <CompFaleConosco />
        </div>
        <div className='divFaleConosco2'>
          <CompPerguntasFrequentes />
        </div>
      </div>
      
      <div className='FimAJUDA'>
        <div>
          <FaleConoscoRedeSocial />
        </div>
        <div className='DivImgAJUDA'>
          <img className='ImgAJUDA' src={Img_ajuda} alt='' />
        </div>
      </div>
    </div>
  );
}
export default App;