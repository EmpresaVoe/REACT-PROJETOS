import './pagCADASTROLOJA.css'
import Logo from '../Logo.png'
import Img from './imgCADASTROLOJA/img.png'
import { Link } from 'react-router-dom'


function CadastroLoja () {
    return (
        <div className='GeralCADASTROLOJA'>
             <header className='HeaderCADASTROLOJA'>
                <Link to='/VOE'><img src={Logo}/></Link>
            </header>
            <div className='cadastroLOJA'>

            <div className='GroupCADASTROLOJA'>

             <div className='ImagemLateralCADASTROLOJA'>

             <img src={Img}/>

             </div>

             <div className='InputCADASTROLOJA'>
                <div>
                <h1>Nome</h1>
                <input type={'name'} name='Nome' placeholder='Digite aqui' id='InputCriarContaPro1'/>
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
             <div className='InputCADASTROLOJA'>

             </div>

             <div className='InputCADASTROLOJA2'>
                <div>
                <h1>Seu serviço</h1>
                <input type={'text'} name='Gênero' placeholder='Digite aqui' id='InputCriarContaPro7'/>
                </div>

                <div>
                <h1>CPF/CNPJ</h1>
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
                <Link to=''><button id='ValueCriarContaLoja' className='ValueCriarContaLoja' >Cadastre-se</button></Link>
                </div>

                
             </div>
             

             </div>
            </div>
        </div>
    )
}

export default CadastroLoja;