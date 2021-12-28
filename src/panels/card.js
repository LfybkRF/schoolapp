import { Link} from 'react-router-dom';
import logo from '../img/logo.svg';
import './style.css';



const Card = () => {
  return (
    <div className='user'>
        <header style={{display:'flex',position:'fixed', height:'50px', width:'100%'}}>
            <Link to={'/'} style={{position:'absolute'}}>
                <img style={{margin: '10px', backgroundColor:'white', borderRadius:45}} src={logo} width={40} height={40} alt='yes'/>
            </Link>
        </header>
        <div className="container"style={{backgroundColor:'white'}}>

        </div>
    </div>
  );
}

export default Card;