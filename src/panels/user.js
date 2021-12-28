import { Link} from 'react-router-dom';
import arrow_left from '../img/arrow_left.svg';
import './style.css';



const User = () => {
  return (
    <div className='user'>
        <header style={{display:'flex',position:'fixed', height:'50px', width:'100%', backgroundColor:'#fafafa'}}>
            <Link to={'/home'} style={{position:'absolute'}}>
                <img style={{margin: '10px', backgroundColor:'white', borderRadius:45}} src={arrow_left} width={40} height={40} alt='yes'/>
            </Link>
            <h1 style={{margin:'10px auto'}}>Профиль</h1>
        </header>
        <div className="container">
        
        </div>
    </div>
  );
}

export default User;
