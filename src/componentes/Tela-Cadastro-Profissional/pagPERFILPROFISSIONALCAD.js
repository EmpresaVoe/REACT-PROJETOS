import './pagPERFILPROFISSIONALCAD.css'
import Logo from '../Logo.png'
import Img from './ImgCRIARCONTAPRO/img.png'
import { Link } from 'react-router-dom'


function CRIARCONTAPRO () {
    return(
        <div className='GeralCRIARCONTAPRO'>
            <header className='HeaderCRIARCONTAPRO'>
                <Link to='/VOE'><img src={Logo}/></Link>
            </header>
            <div className='cadastroCONTAPRO'>

            <div className='GroupCRIARCONTAPRO'>

             <div className='ImagemLateralPRO'>

             <img src={Img}/>

             </div>

             <div className='InputCRIARCONTAPRO'>
                <div>
                <h1>Nomeo</h1>
                <input type={'name'} name='Nome' placeholder='Digite aqui' id='InputCriarContaPro1'/>
                </div>

                <div>
                <h1>Sobrenome</h1>
                <input type={'name'} name='Sobrenome' placeholder='Digite aqui' id='InputCriarContaPro2'/>
                </div>

                <div>
                <h1>E-mail</h1>
                <input type={'email'} name='Email' placeholder='Digite aqui' id='InputCriarContaPro3'/>
                </div>

                <div>
                <h1> Confirmar E-mail</h1>
                <input type={'email'} name='Email' placeholder='Digite aqui' id='InputCriarContaPro4'/>
                </div>

                <div>
                <h1>Telefone</h1>
                <input type={'tel'} name='Telefone' placeholder='Digite aqui' id='InputCriarContaPro5'/>
                </div>

                <div>
                <h1>Confirmar Telefone</h1>
                <input type={'text'} name='Telefone' placeholder='Escolha' id='InputCriarContaPro6'/>
                </div>

                
             </div>
             <div className='InputCRIARCONTAPRO'>

             </div>

             <div className='InputCRIARCONTAPRO2'>
                <div>
                <h1>Gênero</h1>
                <input type={'text'} name='Gênero' placeholder='Digite aqui' id='InputCriarContaPro7'/>
                </div>

                <div>
                <h1>CPF</h1>
                <input type={'number'} name='CPF' placeholder='Digite aqui' id='InputCriarContaPro8'/>
                </div>

                <div>
                <h1>Bairro</h1>
                <select  name='Bairro' placeholder='Selecione' id='InputCriarContaPro9'> 
                <option value={'Tamarineira'}/>
                <option> Aldeia</option>
                <option> Casa Amarela</option>
                <option> Jaboatão Centro</option>
                <option> Janga</option>
                <option> Ibura</option>
                <option> Peixinhos</option>
                <option> Rio Doce</option>
                <option> Tamarineira</option>
                </select>
                </div>

                <div>
                <h1>Criar senha</h1>
                <input type={'password'} name='Senha' placeholder='Escolha' id='InputCriarContaPro10'/>
                </div>

                <div>
                <h1>Confirmar senha</h1>
                <input type={'password'} name='Senha' placeholder='Escolha' id='InputCriarContaPro11'/>
                </div>

                <div>
                <Link to=''><button id='ValueCriarContaProfissional' className='ValueCriarContaProfssional' >Cadastre-se</button></Link>
                </div>

                
             </div>
             

             </div>
            </div>

        </div>
    )
}

export default CRIARCONTAPRO;