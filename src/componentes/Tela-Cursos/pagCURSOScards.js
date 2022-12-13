
import './pagCURSOScards.css'
function card (props){
    return <div className='CardGERALcursos'>

            <div className='CardINFOcursos'>
                <div>
                <h1>{props.Curso}</h1>
                </div>
                <div>
                <span className='NomeCardcursos'>{props.Instituição}</span>
                </div>
                <div className='DescriçãoCardcursos'>
                <span >{props.Descrição}</span>    
                </div>
                
          </div>

          <a href={props.LinkPERFIL}><img id='PerfilCardcursos' src={props.FotoPerfil} alt='Perfil'/></a>
          <div className='Classifacaçãocursos'>
            <a><button id='PerfilVALUEcursos'>Acesse Aqui</button></a>
          </div>
          
        
        
          </div>
    
}
export default card