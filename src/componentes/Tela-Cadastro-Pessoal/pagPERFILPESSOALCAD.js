import './pagPERFILPESSOALCAD.css'
import Logo from '../Logo.png'
import Img from './imgCRIARCONTA/img.png'
import { Link } from 'react-router-dom'


function CRIARCONTA () {
    return(
        <div className='GeralCRIARCONTA'>
            <header className='HeaderCRIARCONTA'>
                <Link to='/VOE'><img src={Logo}/></Link>
            </header>
            <div className='cadastroCONTA'>

            <div className='GroupCRIARCONTA'>

             <div className='ImagemLateral'>

             <img src={Img}/>

             </div>

             <div className='InputCRIARCONTA'>
                <div>
                <h1>Nome</h1>
                <input type={'name'} name='Nome' placeholder='Digite aqui' id='InputCriarConta1'/>
                </div>

                <div>
                <h1>Sobrenome</h1>
                <input type={'name'} name='Sobrenome' placeholder='Digite aqui' id='InputCriarConta2'/>
                </div>

                <div>
                <h1>E-mail</h1>
                <input type={'email'} name='Email' placeholder='Digite aqui' id='InputCriarConta3'/>
                </div>

                <div>
                <h1> Confirmar E-mail</h1>
                <input type={'email'} name='Email' placeholder='Digite aqui' id='InputCriarConta4'/>
                </div>

                <div>
                <h1>Telefone</h1>
                <input type={'tel'} name='Telefone' placeholder='Digite aqui' id='InputCriarConta5'/>
                </div>

                <div>
                <h1>Confirmar Telefone</h1>
                <input type={'text'} name='Telefone' placeholder='Escolha' id='InputCriarConta6'/>
                </div>

                
             </div>
             <div className='InputCRIARCONTA'>

             </div>

             <div className='InputCRIARCONTA2'>
                <div>
                <h1>Gênero</h1>
                <input type={'text'} name='Gênero' placeholder='Digite aqui' id='InputCriarConta7'/>
                </div>

                <div>
                <h1>CPF</h1>
                <input type={'number'} name='CPF' placeholder='Digite aqui' id='InputCriarConta8'/>
                </div>

                <div>
                <h1>Bairro</h1>
                <select  name='Bairro' placeholder='Selecione' id='InputCriarConta9'> 
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
                <input type={'password'} name='Senha' placeholder='Escolha' id='InputCriarConta10'/>
                </div>

                <div>
                <h1>Confirmar senha</h1>
                <input type={'password'} name='Senha' placeholder='Escolha' id='InputCriarConta11'/>
                </div>

                <div>
                <Link to=''><button id='ValueCriarContaPessoal' className='ValueCriarContaPessoal' >Cadastre-se</button></Link>
                </div>

                
             </div>
             

             </div>
            </div>

        </div>
    )
}

export default CRIARCONTA;