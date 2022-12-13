import "./pagLOJAS.css";
import img_principal from "./imgLoja/img_principal.png";
import loja1esquerda from "./imgLoja/loja1esquerda.png";
import loja1direita from "./imgLoja/loja1direita.png";
import loja1logo from "./imgLoja/loja1logo.png";
import loja2esquerda from "./imgLoja/loja2esquerda.png";
import loja2direita from "./imgLoja/loja2direita.png";
import loja2logo from "./imgLoja/loja2logo.png";
import loja3esquerda from "./imgLoja/loja3esquerda.png";
import loja3direita from "./imgLoja/loja3direita.png";
import loja3logo from "./imgLoja/loja3logo.png";
import loja4esquerda from "./imgLoja/loja4esquerda.png";
import loja4direita from "./imgLoja/loja4direita.png";
import loja4logo from "./imgLoja/loja4logo.png";
import loja5esquerda from "./imgLoja/loja5esquerda.png";
import loja5direita from "./imgLoja/loja5direita.png";
import loja5logo from "./imgLoja/loja5logo.png";
import loja6esquerda from "./imgLoja/loja6esquerda.png";
import loja6direita from "./imgLoja/loja6direita.png";
import loja6logo from "./imgLoja/loja6logo.png";
import { AiFillCheckCircle } from "react-icons/ai";
import { BsSearch } from "react-icons/bs";

import Footer from '../FooterROTAS';
import Menu from'../Tela-Rotas/Rotas.js'

function BodyLoja (){
        return(
            <div className = "Fundo"> 
                <header>
                <Menu />
                </header>

                <img className="imgPrincipal" src= {img_principal} ></img>
                <input type="text" name="Nome" size="40" className="text" /> 
                <p className="titulo">Lojas recomendadas</p>
                    <div className= "lojas">
                        <div className="agrupamento">
                        <div className="loja1">
                            <img className="loja1esquerda" src= {loja1esquerda} ></img>
                            <img className="loja1direita" src= {loja1direita} ></img>
                            <img className="loja1logo" src= {loja1logo}></img>
                            <div className="conjunto">
                            <p className = "tit_loja1"> MR.LOOOK</p>
                            <p className= "seg_loja1"> 10 mil seguidores </p>
                            <button className= "btn_lojaSeguir" type="submit">Seguir</button>
                            <AiFillCheckCircle className="icon"/>
                            <BsSearch className="lupa"/>
                            
                        </div>
                        </div>

                        <div className= "loja2">
                            <img className= "loja2esquerda" src={loja2esquerda}></img>
                            <img className= "loja2direita" src={loja2direita}></img>
                            <img className= "loja2logo" src= {loja2logo}></img>
                            <div className="conjunto">
                            <p className = "tit_loja1"> MR.LOOOK</p>
                            <p className= "seg_loja1"> 10 mil seguidores </p>
                            <button className= "btn_lojaSeguir" type="submit">Seguir</button>
                            <AiFillCheckCircle className="icon"/>
                           
                        </div>
                        
                        </div>
                        </div>
                        <div className="agrupamento2">
                     <div className= "loja3">
                            <img className= "loja3esquerda" src= {loja3esquerda}></img>
                            <img className= "loja3direita" src= {loja3direita}></img>
                            <img className= "loja3logo" src= {loja3logo}></img>
                            <div className="conjunto">
                            <p className = "tit_loja1"> MR.LOOOK</p>
                            <p className= "seg_loja1"> 10 mil seguidores </p>
                            <button className= "btn_lojaSeguir" type="submit">Seguir</button>
                            <AiFillCheckCircle className="icon"/>
                        </div>
                           
                        </div>
                    <div className="loja4">
                            <img className= "loja4esquerda" src= {loja4esquerda}></img>
                            <img className= "loja4direita" src= {loja4direita}></img>
                            <img className= "loja4logo" src= {loja4logo}></img>
                            <div className="conjunto">
                            <p className = "tit_loja1"> MR.LOOOK</p>
                            <p className= "seg_loja1"> 10 mil seguidores </p>
                            <button className= "btn_lojaSeguir" type="submit">Seguir</button>
                            <AiFillCheckCircle className="icon"/>
                        </div>
                        </div>
                    <div className="agrupamento3"></div>
                      </div>
                          <div className="loja5">
                            <img className= "loja5esquerda" src= {loja5esquerda}></img>
                            <img className= "loja5direita" src= {loja5direita}></img>
                            <img className= "loja5logo" src= {loja5logo}></img>
                            <div className="conjunto">
                            <p className = "tit_loja1"> MR.LOOOK</p>
                            <p className= "seg_loja1"> 10 mil seguidores </p>
                            <button className= "btn_lojaSeguir2" type="submit">Seguir</button>
                            <AiFillCheckCircle className="icon"/>
                        </div>
                        </div>

                        
                        <div className="loja6">
                            <img className= "loja6esquerda" src= {loja6esquerda}></img>
                            <img className= "loja6direita" src= {loja6direita}></img>
                            <img className= "loja6logo" src= {loja6logo}></img>
                            <div className="conjunto6">
                            <p className = "tit_loja1"> MR.LOOOK</p>
                            <p className= "seg_loja1"> 10 mil seguidores </p>
                            <button className= "btn_lojaSeguir2" type="submit">Seguir</button>
                            <AiFillCheckCircle className="icon"/>
                        </div>
                  
                       </div>
                    </div>
                    <footer>
                    <Footer />
                    </footer>
            </div>

        )
    }
    export default BodyLoja