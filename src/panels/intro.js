import { Link, Outlet} from 'react-router-dom';

import './style.css';
import logo from '../img/logo.svg';
import light from '../img/light.svg';
import brain from '../img/brain.svg';
import clock from '../img/clock.svg';


const Intro = () => {
  return (
    <div className='intro'>
      <div className="container">
        <img style={{margin: '25% auto 0px'}} src={logo} width={120} height={120} alt='yes'/>

        <div style={{fontSize:'25px', fontWeight:'600', padding:'8px'}} >C возвращением,
          <div style={{fontSize:'25px', fontWeight:'600'}} >в мир матeматики!</div>
        </div>

        <div style={{display:'flex', fontSize:'20px', padding:'8px'}} >
          <img src={light} style={{margin:'auto 0px'}} width={30} height={30} alt='yes'/>
          <div style={{padding:'10px 0px 0px 10px'}}>
            <div style={{textAlign:'left', padding:'8px 8px 0px 8px', fontSize:'16px', fontWeight:'550'}}>Узнавай больше</div>
            <div style={{textAlign:'left', padding:'8px 0px 8px 8px', color: '#0000090',fontSize:'14px', fontWeight:'lighter'}}>Пора открыть для себя новый путь в старом учении...</div>
          </div>
        </div>
        
        <div style={{display:'flex', fontSize:'20px', padding:'8px'}} >
          <img src={brain} style={{margin:'auto 0px'}} width={30} height={30} alt='yes'/>
          <div style={{padding:'10px 10px 0px 10px'}}>
            <div style={{textAlign:'left', padding:'8px 8px 0px 8px', fontSize:'16px', fontWeight:'550'}}>Получай опыт</div>
            <div style={{textAlign:'left', padding:'8px 0px 8px 8px', color: '#0000090',fontSize:'14px', fontWeight:'lighter'}}>Набирайся опыта в решении сложных и простых задач. Чем больше ты можешь, тем шире границы.</div>
          </div>
        </div>
        
        <div style={{display:'flex', fontSize:'20px', padding:'8px'}} >
          <img src={clock} style={{margin:'auto 0px'}} width={30} height={30} alt='yes'/>
          <div style={{padding:'10px 0px 0px 10px'}}>
            <div style={{textAlign:'left', padding:'8px 8px 0px 8px', fontSize:'16px', fontWeight:'550'}}>Время летит</div>
            <div style={{textAlign:'left', padding:'8px 0px 8px 8px', color: '#0000090',fontSize:'14px', fontWeight:'lighter'}}>"Как мне познать дзен математики?" Иногда мы выбираем не правильный путь. Но мы поможем с правильной программой</div>
          </div>
        </div>

          <Link to='/' style={{width:'100%', height:'40px', textDecoration:'none'}}>
            <div style={{marginTop:'10px', width:'100%', height:'40px', padding:'2px'}} className='button' >
              <p style={{margin:'10px'}}>Продолжить</p>
            </div>
          </Link>
        <Outlet/>
      </div>
    </div>
  );
}

export default Intro;
