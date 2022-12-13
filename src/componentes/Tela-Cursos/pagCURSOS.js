import Footer from '../FooterROTAS';
import {BiSearch} from'react-icons/bi'
import Menu from'../Tela-Rotas/Rotas.js'
import Img1 from './ImgCURSOS/img-1.png'
import CARDS from './pagCURSOScards.js';
import './pagCURSOS.css';

var Card = [{Curso:'Técnicas de Confeitaria', Instituição:'Senac', Descrição:'O curso de aperfeiçoamento Técnicas de Confeitaria tem como objetivo aprimorar técnicas de confeitaria. É destinoa profissionais da área de produção culinárias,que atuam ou tenham interesse em  atuar  na área de confeitaria.', Perfil:'', Foto:'https://th.bing.com/th/id/R.dd8473a09c0d25f9570f8648af01ef76?rik=B3rPNTlhdcKJDw&riu=http%3a%2f%2fcdn1.mundodastribos.com%2f719247-cursos-tecnicos-senac-caxias-do-sul-2015-600x600.jpg&ehk=3wg%2fOccKwggUZ3%2flQQIjaSOw%2bTgQLYj6s2HDJZsFI8Y%3d&risl=&pid=ImgRaw&r=0' },
            {Curso:'Técnicas de Confeitaria', Instituição:'Senac', Descrição:'O curso de aperfeiçoamento Técnicas de Confeitaria tem como objetivo aprimorar técnicas de confeitaria. É destinoa profissionais da área de produção culinárias,que atuam ou tenham interesse em  atuar  na área de confeitaria.', Perfil:'', Foto:'https://th.bing.com/th/id/R.dd8473a09c0d25f9570f8648af01ef76?rik=B3rPNTlhdcKJDw&riu=http%3a%2f%2fcdn1.mundodastribos.com%2f719247-cursos-tecnicos-senac-caxias-do-sul-2015-600x600.jpg&ehk=3wg%2fOccKwggUZ3%2flQQIjaSOw%2bTgQLYj6s2HDJZsFI8Y%3d&risl=&pid=ImgRaw&r=0' },
            {Curso:'Técnicas de Confeitaria', Instituição:'Senac', Descrição:'O curso de aperfeiçoamento Técnicas de Confeitaria tem como objetivo aprimorar técnicas de confeitaria. É destinoa profissionais da área de produção culinárias,que atuam ou tenham interesse em  atuar  na área de confeitaria.', Perfil:'', Foto:'https://th.bing.com/th/id/R.dd8473a09c0d25f9570f8648af01ef76?rik=B3rPNTlhdcKJDw&riu=http%3a%2f%2fcdn1.mundodastribos.com%2f719247-cursos-tecnicos-senac-caxias-do-sul-2015-600x600.jpg&ehk=3wg%2fOccKwggUZ3%2flQQIjaSOw%2bTgQLYj6s2HDJZsFI8Y%3d&risl=&pid=ImgRaw&r=0' },
            {Curso:'Técnicas de Confeitaria', Instituição:'Senac', Descrição:'O curso de aperfeiçoamento Técnicas de Confeitaria tem como objetivo aprimorar técnicas de confeitaria. É destinoa profissionais da área de produção culinárias,que atuam ou tenham interesse em  atuar  na área de confeitaria.', Perfil:'', Foto:'https://th.bing.com/th/id/R.dd8473a09c0d25f9570f8648af01ef76?rik=B3rPNTlhdcKJDw&riu=http%3a%2f%2fcdn1.mundodastribos.com%2f719247-cursos-tecnicos-senac-caxias-do-sul-2015-600x600.jpg&ehk=3wg%2fOccKwggUZ3%2flQQIjaSOw%2bTgQLYj6s2HDJZsFI8Y%3d&risl=&pid=ImgRaw&r=0' }
        ]

function Teste () {
    return (
        <div className='GeralCURSOS'>
            <header>
            <Menu />
            </header>

                <div className='DivCURSOS'>

                <div className='IMGpesquisar'>
                    <img src={Img1} />
                    <input type={'search'} id='PESQUISARcurso' placeholder='Pesquisar curso' />
                    <button className='BotaoPESQUISARcursos' id='PESQUISARcursos'><BiSearch className='iconBiSearchCursos'/></button>
                </div>
                <div className='DivCardsCURSOSgeral'>
                {Card.map((dado) => (<CARDS Curso={dado.Curso} Instituição={dado.Instituição} Descrição={dado.Descrição} LinkPERFIL={dado.Perfil} FotoPerfil={dado.Foto}/>))}
                </div>
                </div>
        
            <footer>
            <Footer />
            </footer>
        </div>
       
    )
}

export default Teste;