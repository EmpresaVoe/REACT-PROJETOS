
import './Voe.css';
import {BrowserRouter as Router, Routes, Route, Link} from 'react-router-dom';
import Home from './componentes/Tela-Home/pagHOME.js'
import Serviços from './componentes/Tela-Serviço/pagSERVICO.js'
import Cursos from './componentes/Tela-Cursos/pagCURSOS.js'
import Lojas from './componentes/Tela-Lojas/pagLOJAS.js'
import Login from './componentes/Tela-Login/PagLOGIN.js'
import EscolhaTipoPerfil from './componentes/Tela-Esccolhendo-tipo-de-conta/pagCADASTRO.js'
import EscolhaTipoPerfilProfissional from'./componentes/Tela-Escolhendo-tipo-de-profissional/pagESCOLHAperfilProf'
import CriarContaPessoal from './componentes/Tela-Cadastro-Pessoal/pagPERFILPESSOALCAD';
import CriarContaProfissionalServiço from './componentes/Tela-Cadastro-Profissional/pagPERFILPROFISSIONALCAD';
import CriarContaProfissionalLoja from './componentes/Tela-Cadastro-Loja/pagCADASTROLOJA.js'
import PerfilProfissional from './componentes/Tela-Perfil-Profissional/pagPerfilProfissional.js';
import PerfilPessoal from './componentes/Tela-Perfil-Pessoal/pagPerfilPESSOAL.js'
function Voe () {
  return(
  <Router>
    <div className='GeralVoe'>
        <body>
          <main>
           
            <Routes>

              <Route path="VOE/" element={<Home/>}/>
              <Route path="/Serviços" element={<Serviços/>}/>
              <Route path="/Lojas" element={<Lojas/>}/>
              <Route path="/Cursos" element={<Cursos/>}/>
              <Route path="/Login" element={<Login/>}/>
              <Route path="/EscolhendoPerfil" element={<EscolhaTipoPerfil/>}/>
              <Route path="/EscolhendoPerfilProfissional" element={<EscolhaTipoPerfilProfissional/>}/>
              <Route path="/CriarContaPessoal" element={<CriarContaPessoal/>}/>
              <Route path="/CriarContaProfissionalServiço" element={<CriarContaProfissionalServiço/>}/>
              <Route path="/CriarContaProfissionalLoja" element={<CriarContaProfissionalLoja/>}/>
              <Route path="/Serviços/PerfilProfissional" element={<PerfilProfissional/>}/>
              <Route path="/PerfilPessoal" element={<PerfilPessoal/>}/>

            </Routes>

            
          </main>
          
         
        </body>
    </div>
  </Router>
   )
}
export default Voe;
