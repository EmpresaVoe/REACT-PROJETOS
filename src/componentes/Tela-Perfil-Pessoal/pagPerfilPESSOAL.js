import "./pagPerfilPESSOAL.css"
import { Link } from 'react-router-dom';
import Img from "./imgPerfilPessoal/perfill.png"
import Menu from'../Tela-Rotas/Rotas.js'
import Footer from '../FooterROTAS';
function PerfilPessoal() {
    return (
  
        <form className="Total">
      
            <div className="header"></div>
            <div className="div1">
                <img className="img_perfil" src={Img} alt="foto de um desenho de um menino representando uma pessoa"></img>
                <button className="btn1"> alterar</button>
                <select className="selectgenero" >
                    <option value=""> Selecione</option>
                    <option value="1">Feminino</option>
                    <option value="2">Masculino</option>
                    <option value="3">Trans</option>
                    <option value="4"> Outros</option>
                    <option value="5">Prefiro não declarar</option>
                </select>

                <input className="inputText" type="text" placeholder="Digite seu status" />
            </div>
            <div className="coluna1">
                <input className="input1" type="text" placeholder="Digite seu nome" />
                <input className="input2" typq="text" placeholder="Digite seu sobrenome" />
            </div>
            <div className="coluna2">
                <input className="input3" type="text" placeholder="Digite seu email" />
                <input className="input4" type="text" placeholder="Digite sua senha" />
            </div>
            <div className="coluna3">
                <input className="input5" type="text" placeholder="Digite seu telefone" />
                <input className="input6" type="password" placeholder="Digite seu País/Região" />
            </div>
            <div className="textos">
                <p className="Pfoto">Foto</p>
                <p className="Pgenero">Gênero</p>
                <p className="Pstatus">Status</p>
                <p className="Pnome">Nome</p>
                <p className="Psobre">Sobrenome</p>
                <p className="Pemail">Email</p>
                <p className="Psenha">Senha</p>
                <p className="Ptelefone">Telefone</p>
                <p className="Ppais">País/Região</p>
            </div>
            <button className="btn2"> salvar</button>
            
        </form>
    )
}
export default PerfilPessoal;