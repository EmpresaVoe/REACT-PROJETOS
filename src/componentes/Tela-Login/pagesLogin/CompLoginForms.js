import { Link } from 'react-router-dom';
import '../PagLOGIN.css'

function FormsLogin() {
    return (
        <div className='FormsLOGIN'>
            <div className='MOBILE'>

                <div className='TituloLOGIN'>
                    <h1>Login</h1>
                    <p>
                  Por favor, coloque seu login para continuar
                  </p>
                </div>

                <div className='TituloEmailLOGIN'>
                    <div >
                        <h1>E-mail</h1>
                    </div>

                    <div>
                        <input type={'text'} id='' placeholder='Digite seu e-mail' />
                    </div>
                </div>

                <div className='TituloSenhaLOGIN'>
                    <div>
                        <h1>Senha</h1>
                    </div>
                    <div>
                        
                    <input type={'password'} id='' placeholder='Digite sua senha' />
                    </div>
                </div>
            </div>
            <div >
                
                <ul className='EsqueceuLOGIN'>

                    <li><input id='check' type={'checkbox'}/>Salve meu login</li>
                    <li><a href=''>Esqueceu a senha?</a></li>
                </ul>
            </div>
            <div className='EnviarLOGIN'>
                <Link to='/Serviços'><button >Entre</button></Link>
                <div>
                    <ul>
                        <li>Ainda não tem uma conta?</li>
                        <li><Link to='/EscolhendoPerfil'>Criar uma conta</Link></li>
                    </ul>
                </div>
            </div>
        </div>

    )
}

export default FormsLogin