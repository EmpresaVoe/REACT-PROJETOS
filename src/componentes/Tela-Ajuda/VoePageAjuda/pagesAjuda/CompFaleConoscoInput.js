import '../PagAJUDA.css'

function forms() {
    

return (
        <div id='BodyForms'>
            <div className='A'>
                <input type={'text'} name='Nome' id="Nome" placeholder={'Nome'} />
                <input type={'text'} name='Sobrenome' id="Sobrenome" placeholder={'Sobrenome'} />
            </div>
            <div className='B'>
                <input className='InputFaleconosco' type={'text'} name='Email' id="Email" placeholder={'E-mail'} />
                <input className='InputFaleconosco' type={'text'} name='Título' id="Título" placeholder={'Título'} />
                <textarea className='InputFaleconoscoMensagem' type={'text'} name='Mensagem' id="Mensagem" placeholder={'Mensagem'} />
            </div>
            <input className='InputEnviar' id='send' type={'submit'} value='Enviar' />
        </div>
    )
}

export default forms
