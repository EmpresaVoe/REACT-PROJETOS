import'./pagHOME.css'
import { Link } from 'react-router-dom';
import Img1 from './ImgHome/bg-img1.png'
import Img2 from './ImgHome/bg-img2.png'
import Img3 from './ImgHome/bg-img3.png'
import Img4 from './ImgHome/bg-img4.png'
import Li1 from'./ImgHome/Img1.png'
import Li2 from'./ImgHome/Img2.png'
import Li3 from'./ImgHome/Img3.png'
import Li4 from'./ImgHome/Img4.png'
import Footer from '../FooterROTAS';
import Menu from'../Tela-Rotas-Home/Rotas.js'

const Opa = () => {
  return (
    <div className='GeralDIVHOME'>
       <header>
       <Menu />
       </header>

        <div className='Home'>
            <img className='Img1' src={Img1} />

            <div className="divBotao">
            <Link to='/CriarContaPessoal'><button className='botao1' id='botao1'  >Cadastre-se como cliente</button></Link> 
            <Link to='/EscolhendoPerfilProfissional'><button className='botao2' id='botao2'  >Cadastre-se como Profissional</button></Link>
            </div>

        </div>

        <div className='Home'>
            <img className='Img1' src={Img2} />

            <div className="divBotao2">
            <button className='botao3' id='botao3'  >Quero um Serviço</button>
            </div>
        </div>


        <div className='Home'>
            <img className='Img1' src={Img3} />

            <div className="divBotao3">
            <button className='botao4' id='botao3'  >Acessar lojas</button>
            </div>
        </div>

        <div className='Parcerias'>
              <h1>Parcerias</h1>
              <ul>
                <li><img src={Li1} alt=''/></li>
                <li><img src={Li2} alt=''/></li>
                <li><img src={Li3} alt=''/></li>
                <li><img src={Li4} alt=''/></li>
              </ul>
          </div>   

          <div className='Home'>
            <img className='Img1' src={Img4} />

            <div className="divBotao4">
            <button className='botao5' id='botao3'  >Acessar lojas</button>
            </div>
        </div>

        <footer>
        <Footer />
        </footer>
        
 </div>
  )
}

export default Opa;