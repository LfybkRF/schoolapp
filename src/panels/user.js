import { Link} from 'react-router-dom';
import logo from '../img/logo.svg';
import './style.css';



const User = () => {
  return (
    <div className='user'>
        <header style={{display:'flex',position:'fixed', height:'50px', width:'100%', backgroundColor:'#fafafa'}}>
            <Link to={'/'} style={{position:'absolute'}}>
                <img style={{margin: '10px', backgroundColor:'white', borderRadius:45}} src={logo} width={40} height={40} alt='yes'/>
            </Link>
            <h1 style={{margin:'10px auto'}}>Профиль</h1>
        </header>
        <div className="container">
        
        </div>
    </div>
  );
}

export default User;
