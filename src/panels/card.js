import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

import { getLevel, completeLevel } from '../action/scenario';

import arrow_left from '../img/arrow_left.svg';
import './style.css';



const Card = () => {
  const [ questions, setQuestions ] = useState([]);
  const [ answers, setAnswer ] = useState([]);

  useEffect(() => {
      async function cardAnswer() {
        let m = window.location.hash.substring(1).split('_')
        console.log(m)
        localStorage.setItem('typeCard',  m[0])
        let level = await getLevel(parseInt(m[1]))
        console.log(level.level.answers)
        setAnswer(level.level.answers)
        setQuestions(level.level.tasks)
      }
      cardAnswer()
  }, [])

  async function check() {
    let user = JSON.parse(localStorage.getItem('user'))
    console.log(answers)
    let m = [ 
      parseInt(document.getElementById('answer0').value),
      parseInt(document.getElementById('answer1').value),
      parseInt(document.getElementById('answer2').value),
      parseInt(document.getElementById('answer3').value),
      parseInt(document.getElementById('answer4').value)
    ]
    for (let i = 0; i < 5;i++) {
      if (m[i] !== answers[i]) {
        alert('Кажется в ответах ошибка, проверь снова')
        return
      }
    }
    if (user.level < 1000) {
      console.log(await completeLevel(user.login))
      user.level += 1
      localStorage.setItem('user', JSON.stringify(user) )
      console.log(JSON.parse(localStorage.getItem('user')))
    }
  }

  return (
    <div className='user'>
        <header style={{display:'flex', height:'50px', width:'100%'}}>
            <Link to={'/home'} style={{position:'absolute'}}>
                <img style={{margin: '10px', backgroundColor:'white', borderRadius:45}} src={arrow_left} width={40} height={40} alt='yes'/>
            </Link>
        </header>
        <div className="container_card" style={{backgroundColor:'white', padding:'20px'}}>
            <div>
              {questions && questions.map((elem,index) => {
                // console.log(elem)
                return (<div className="cardQuestion" >
                  <h3 style={{display:'flex'}}>
                    {index+1}. {elem}
                    <div style={{ width:"20px", height:"20px", borderRadius:"25px", backgroundColor: 'black', margin:'0px 0px 0px 25vw'}}></div>
                  </h3>
                  <input id={'answer' + index} style={{ margin:'0px 25px 0px', padding:'0px 10px', borderRadius:'25px', height:"30px"}}/>
                </div>)
              })}
              <div style={{ width:'90%', margin: '30px auto 0px' }}>
                <button style={{ width:'100%', height:'40px', border: 0, borderRadius:"25px", backgroundColor: '#1476ff', fontSize:'16px', fontWeight:'bold', color:'white'}} onClick={() => check()}>Отправить на проверку</button>
              </div>
            </div>
        </div>
    </div>
  );
}

export default Card;