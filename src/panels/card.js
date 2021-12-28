import { Link} from 'react-router-dom';
import arrow_left from '../img/arrow_left.svg';
import './style.css';



const Card = () => {
  return (
    <div className='user'>
        <header style={{display:'flex',position:'fixed', height:'50px', width:'100%'}}>
            <Link to={'/home'} style={{position:'absolute'}}>
                <img style={{margin: '10px', backgroundColor:'white', borderRadius:45}} src={arrow_left} width={40} height={40} alt='yes'/>
            </Link>
        </header>
        <div className="container"style={{backgroundColor:'white'}}>

        </div>
    </div>
  );
}

export default Card;