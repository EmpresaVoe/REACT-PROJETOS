import './PagLOGIN.css'
import HeadLogin from './pagesLogin/CompTopHeadLOGIN.js';
import BemVindo from './pagesLogin/CompBodyLOGIN.js'
function Login() {
    return (
      <div className="PagLOGIN">
        <div className='TopLOGIN'>
        <HeadLogin/>
        </div>
        <div>
        <BemVindo/>
        </div>
      </div>
    );
  }
  export default Login;