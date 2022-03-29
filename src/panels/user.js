import React from 'react';
import { Link } from 'react-router-dom';
import arrow_left from '../img/arrow_left.svg';
import CONFIG from '../settings/config';
import { auth } from '../action/scenario';

import './style.css';



const User = () => {

  const user = JSON.parse(localStorage.getItem('user'))

  async function indificate(){
    const candidate = await auth(document.getElementById('log').value, document.getElementById('pass').value)
    localStorage.setItem('user', JSON.stringify(candidate.user))
    console.log(localStorage.getItem('user'))
    window.location = CONFIG.urlApp + '/home'
  }


  return (
    <div className='user'>
        <header style={{display:'flex', height:'50px', width:'100%', backgroundColor:'#fafafa'}}>
            {localStorage.getItem('user') && <Link to={'/home'} style={{position:'absolute'}}>
                <img style={{margin: '10px', backgroundColor:'white', borderRadius:45}} src={arrow_left} width={40} height={40} alt='yes'/>
            </Link>}
            <h1 style={{margin:'10px auto'}}>Профиль</h1>
        </header>
        {localStorage.getItem('user') ? 
          <>
            <div style={{width:'90%', margin:'40px auto 0px'}}>
              <div style={{ display:'flex', verticalAlign:'center'}}>
                <h1 style={{ margin:"0px 40px" }}>{user.name}</h1>
                {/* <button style={{width:"30px", height:"30px", margin:"auto 20px"}}> </button> */}
              </div>
              <div style={{ margin:'60px 0px 0px'}}>
                <h3>Статистика:</h3>
                <div style={{ width:"90%", margin:"20px auto"}}>
                    <div style={{ margin: '15px 0px' }}>
                      Решено задач всего: {user.level}
                    </div>
                    <div style={{ margin: '15px 0px' }}>
                      Решено задач из легко уровня: {user.level}
                    </div>
                    <div style={{ margin: '15px 0px' }}>
                      Решено задач из среднего уровня: {user.level - 50 < 0 ? 0 : user.level - 50}
                    </div>
                    <div style={{ margin: '15px 0px' }}>
                      Решено задач из тяжелого уровня: {user.level - 100 < 0 ? 0 : user.level - 50}
                    </div>
                    <div style={{ margin: '15px 0px' }}>
                      Решено задач из супер-тяжелого уровня: {user.level - 149 < 0 ? 0 : user.level - 50}
                    </div>
                </div>
              </div>
            </div>
          </>
        :
          <div className="container_user" style={{ backgroundColor:'white', padding:'20px' }}>
            <div style={{ margin:'30px auto 10px' }}>
              Логин:
              <div style={{ width:'90%', margin: '10px auto 0px' }}>
                <input id='log' style={{ margin:'0px 25px 0px', padding:'0px 10px', borderRadius:'25px', height:"30px", width:'70%'}}/>
              </div>
            </div>
            <div style={{ margin:'30px auto 10px' }}>
              Пароль:
              <div style={{ width:'90%', margin: '10px auto 0px' }}>
                <input id='pass' type='password' style={{ margin:'0px 25px 0px', padding:'0px 10px', borderRadius:'25px', height:"30px", width:'70%'}}/>
              </div>
            </div>
            <div style={{ width:'90%', margin: '30px auto 0px' }}>
              <button style={{ width:'100%', height:'40px', border: 0, borderRadius:"25px", backgroundColor: '#1476ff', fontSize:'16px', fontWeight:'bold', color:'white'}} onClick={() => indificate()}>
                Продолжить
              </button>
            </div>
          </div>
        }
    </div>
  );
}

export default User;
