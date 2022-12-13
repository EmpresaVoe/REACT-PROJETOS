import './pagSERVICO.css'
import {BiSearch} from'react-icons/bi'

import Img1 from './imgSERVIÇOS/Img-1.png'
import Menu from'../Tela-Rotas/Rotas.js'
import Footer from '../FooterROTAS';
import CARDS from './pagSERVICOcards.js'

import Feed1 from './imgSERVIÇOS/feed1.png'

var Card = [{Profissão:'Trancista', Nome:'Glenelly Karla', Descrição:'Atendo em domicílio', Foto:'https://pbs.twimg.com/profile_images/1261174656599494661/Ity7pAY2_400x400.jpg', Ponto:'4,2' },
            {Profissão:'Desenhista', Nome:'Gabriel Souza', Descrição:'Faço retratos em papel e grafite', Foto:'https://media-exp1.licdn.com/dms/image/D4D03AQFVXaYQ3LPZQw/profile-displayphoto-shrink_800_800/0/1663182699879?e=1675900800&v=beta&t=0t07AEeapfNuo9Deuax4ocfkhLHUp42l5-2tlxRlAO4', Ponto:'4,0' },
            {Profissão:'Faxineira', Nome:'Lucivane Ferreira', Descrição:'Realizo limpeza completa', Foto:'https://th.bing.com/th/id/OIP.uYWaQlcOKblY0FkoydhOtgHaHr?pid=ImgDet&rs=1', Ponto:'4,9' }



]
        
function Servicos (){
    return(
        <div className="GeralSERVICO">
            <header>

            <Menu />

            </header>
            <div className='DivSERVICO' >
                <img src={Img1} />

                <div className='BotoesPESQUISAR'>
                    <input type={'search'} id='PesquisarSERVICO' placeholder='Pesquisar serviço'/>
                    <button className='BotaoPESQUISAR' id='PESQUISAR'> <BiSearch className='iconBiSearch' /></button>
                </div>

                <p>
                <h1 className='TituloSERVICO'>Profissionais recomendados</h1>
                </p>

                <div className='FeedSERVICO'>

                {Card.map((dado) => (<CARDS Profissão={dado.Profissão} NomePerfil={dado.Nome} Descrição={dado.Descrição} FotoPerfil={dado.Foto} Pontos={dado.Ponto}/>))}


                </div>
                 </div>
            <footer>

            <Footer />

            </footer>
        </div>
    )
}

export default Servicos