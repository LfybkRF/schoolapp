import { Link } from 'react-router-dom';

import user from '../img/user.svg';
import './style.css';

const Home = () => {

  const levels = {
    'easy' : [
      {'id' : 1001, 'type' : 'task'},
      {'id' : 1002, 'type' : 'mental'},
      {'id' : 1003, 'type' : 'task'},
      {'id' : 1004, 'type' : 'task'},
      {'id' : 1005, 'type' : 'task'},
      {'id' : 1006, 'type' : 'theory'},
      {'id' : 1007, 'type' : 'task'},
      {'id' : 1008, 'type' : 'task'},
      {'id' : 1009, 'type' : 'mental'},
      {'id' : 10010, 'type' : 'task'},
      {'id' : 10011, 'type' : 'task'},
      {'id' : 10012, 'type' : 'theory'},
      {'id' : 10013, 'type' : 'task'},
      {'id' : 10014, 'type' : 'task'},
      {'id' : 10015, 'type' : 'task'},
      {'id' : 10016, 'type' : 'mental'},
      {'id' : 10017, 'type' : 'mental'},
      {'id' : 10018, 'type' : 'task'},
      {'id' : 10019, 'type' : 'theory'},
      {'id' : 10020, 'type' : 'task'},
      {'id' : 10021, 'type' : 'mental'},
      {'id' : 10022, 'type' : 'task'},
      {'id' : 10023, 'type' : 'task'},
      {'id' : 10024, 'type' : 'theory'},
      {'id' : 10025, 'type' : 'task'},
      {'id' : 10026, 'type' : 'task'},
      {'id' : 10027, 'type' : 'task'},
      {'id' : 10028, 'type' : 'mental'},
      {'id' : 10029, 'type' : 'task'},
      {'id' : 10030, 'type' : 'task'},
      {'id' : 10031, 'type' : 'theory'},
      {'id' : 10032, 'type' : 'task'},
      {'id' : 10033, 'type' : 'mental'},
      {'id' : 10034, 'type' : 'task'},
      {'id' : 10035, 'type' : 'task'},
      {'id' : 10036, 'type' : 'task'},
      {'id' : 10037, 'type' : 'theory'},
      {'id' : 10038, 'type' : 'task'},
      {'id' : 10039, 'type' : 'mental'},
      {'id' : 10040, 'type' : 'task'},
      {'id' : 10041, 'type' : 'task'},
      {'id' : 10042, 'type' : 'mental'},
      {'id' : 10043, 'type' : 'theory'},
      {'id' : 10044, 'type' : 'task'},
      {'id' : 10045, 'type' : 'mental'},
      {'id' : 10046, 'type' : 'task'},
      {'id' : 10047, 'type' : 'task'},
      {'id' : 10048, 'type' : 'exam'},
      {'id' : 10049, 'type' : 'exam'},
      {'id' : 10050, 'type' : 'exam'},

    ],
    'normal' : [
      {'id' : 1011, 'type' : 'task'},
      {'id' : 1012, 'type' : 'mental'},
      {'id' : 1013, 'type' : 'task'},
      {'id' : 1014, 'type' : 'task'},
      {'id' : 1015, 'type' : 'task'},
      {'id' : 1016, 'type' : 'task'},
      {'id' : 1017, 'type' : 'theory'},
      {'id' : 1018, 'type' : 'task'},
      {'id' : 1019, 'type' : 'mental'},
      {'id' : 10110, 'type' : 'task'},
      {'id' : 10111, 'type' : 'task'},
      {'id' : 10112, 'type' : 'task'},
      {'id' : 10113, 'type' : 'task'},
      {'id' : 10114, 'type' : 'mental'},
      {'id' : 10115, 'type' : 'theory'},
      {'id' : 10116, 'type' : 'task'},
      {'id' : 10117, 'type' : 'task'},
      {'id' : 10118, 'type' : 'mental'},
      {'id' : 10119, 'type' : 'task'},
      {'id' : 10120, 'type' : 'task'},
      {'id' : 10121, 'type' : 'task'},
      {'id' : 10122, 'type' : 'task'},
      {'id' : 10123, 'type' : 'task'},
      {'id' : 10124, 'type' : 'task'},
      {'id' : 10125, 'type' : 'mental'},
      {'id' : 10126, 'type' : 'theory'},
      {'id' : 10127, 'type' : 'task'},
      {'id' : 10128, 'type' : 'task'},
      {'id' : 10129, 'type' : 'task'},
      {'id' : 10130, 'type' : 'task'},
      {'id' : 10131, 'type' : 'task'},
      {'id' : 10132, 'type' : 'mental'},
      {'id' : 10133, 'type' : 'mental'},
      {'id' : 10134, 'type' : 'task'},
      {'id' : 10135, 'type' : 'task'},
      {'id' : 10136, 'type' : 'task'},
      {'id' : 10137, 'type' : 'theory'},
      {'id' : 10138, 'type' : 'task'},
      {'id' : 10139, 'type' : 'task'},
      {'id' : 10140, 'type' : 'task'},
      {'id' : 10141, 'type' : 'mental'},
      {'id' : 10142, 'type' : 'task'},
      {'id' : 10143, 'type' : 'mental'},
      {'id' : 10144, 'type' : 'task'},
      {'id' : 10145, 'type' : 'mental'},
      {'id' : 10146, 'type' : 'task'},
      {'id' : 10147, 'type' : 'task'},
      {'id' : 10148, 'type' : 'exam'},
      {'id' : 10149, 'type' : 'exam'},
      {'id' : 10150, 'type' : 'exam'},
    ],
    'hard' : [
      {'id' : 1101, 'type' : 'task'},
      {'id' : 1102, 'type' : 'mental'},
      {'id' : 1103, 'type' : 'task'},
      {'id' : 1104, 'type' : 'task'},
      {'id' : 1105, 'type' : 'task'},
      {'id' : 1106, 'type' : 'task'},
      {'id' : 1107, 'type' : 'theory'},
      {'id' : 1108, 'type' : 'task'},
      {'id' : 1109, 'type' : 'task'},
      {'id' : 11010, 'type' : 'task'},
      {'id' : 11011, 'type' : 'task'},
      {'id' : 11012, 'type' : 'task'},
      {'id' : 11013, 'type' : 'task'},
      {'id' : 11014, 'type' : 'theory'},
      {'id' : 11015, 'type' : 'task'},
      {'id' : 11016, 'type' : 'task'},
      {'id' : 11017, 'type' : 'task'},
      {'id' : 11018, 'type' : 'mental'},
      {'id' : 11019, 'type' : 'task'},
      {'id' : 11020, 'type' : 'task'},
      {'id' : 11021, 'type' : 'task'},
      {'id' : 11022, 'type' : 'theory'},
      {'id' : 11023, 'type' : 'task'},
      {'id' : 11024, 'type' : 'mental'},
      {'id' : 11025, 'type' : 'task'},
      {'id' : 11026, 'type' : 'task'},
      {'id' : 11027, 'type' : 'task'},
      {'id' : 11028, 'type' : 'theory'},
      {'id' : 11030, 'type' : 'task'},
      {'id' : 11031, 'type' : 'task'},
      {'id' : 11032, 'type' : 'mental'},
      {'id' : 11033, 'type' : 'task'},
      {'id' : 11034, 'type' : 'task'},
      {'id' : 11035, 'type' : 'theory'},
      {'id' : 11036, 'type' : 'task'},
      {'id' : 11037, 'type' : 'task'},
      {'id' : 11038, 'type' : 'task'},
      {'id' : 11039, 'type' : 'task'},
      {'id' : 11040, 'type' : 'mental'},
      {'id' : 11041, 'type' : 'theory'},
      {'id' : 11042, 'type' : 'task'},
      {'id' : 11043, 'type' : 'task'},
      {'id' : 11044, 'type' : 'mental'},
      {'id' : 11045, 'type' : 'task'},
      {'id' : 11046, 'type' : 'mental'},
      {'id' : 11047, 'type' : 'task'},
      {'id' : 11048, 'type' : 'exam'},
      {'id' : 11049, 'type' : 'exam'},
      {'id' : 11050, 'type' : 'exam'},

    ],
    'extrahard' : [
      {'id' : 1111, 'type' : 'theory'},
      {'id' : 1112, 'type' : 'mental'},
      {'id' : 1113, 'type' : 'mental'},
      {'id' : 1114, 'type' : 'task'},
      {'id' : 1115, 'type' : 'mental'},
      {'id' : 1116, 'type' : 'task'},
      {'id' : 1117, 'type' : 'task'},
      {'id' : 1118, 'type' : 'theory'},
      {'id' : 1119, 'type' : 'task'},
      {'id' : 11110, 'type' : 'task'},
      {'id' : 11111, 'type' : 'task'},
      {'id' : 11112, 'type' : 'task'},
      {'id' : 11113, 'type' : 'mental'},
      {'id' : 11114, 'type' : 'mental'},
      {'id' : 11115, 'type' : 'mental'},
      {'id' : 11116, 'type' : 'task'},
      {'id' : 11117, 'type' : 'theory'},
      {'id' : 11118, 'type' : 'task'},
      {'id' : 11119, 'type' : 'task'},
      {'id' : 11120, 'type' : 'mental'},
      {'id' : 11121, 'type' : 'mental'},
      {'id' : 11122, 'type' : 'mental'},
      {'id' : 11123, 'type' : 'task'},
      {'id' : 11124, 'type' : 'task'},
      {'id' : 11125, 'type' : 'task'},
      {'id' : 11126, 'type' : 'mental'},
      {'id' : 11127, 'type' : 'mental'},
      {'id' : 11128, 'type' : 'mental'},
      {'id' : 11129, 'type' : 'task'},
      {'id' : 11130, 'type' : 'theory'},
      {'id' : 11131, 'type' : 'task'},
      {'id' : 11132, 'type' : 'task'},
      {'id' : 11133, 'type' : 'mental'},
      {'id' : 11134, 'type' : 'mental'},
      {'id' : 11135, 'type' : 'mental'},
      {'id' : 11136, 'type' : 'task'},
      {'id' : 11137, 'type' : 'task'},
      {'id' : 11138, 'type' : 'exam'},
      {'id' : 11139, 'type' : 'exam'},
      {'id' : 11140, 'type' : 'exam'},

    ]
  }

  function BuildListLevels(step){

    let a = step.map((elem, index) => {
      let back = '#82EA79'
      let border = '#43BF39 '
      if (elem.type === 'exam'){
        border = '#cf3737'
        back = '#f66a6a'
      }else{
        if (elem.type === 'mental'){
          border = '#579BCC'
          back = '#7CBDEC'
        }else{
          if (elem.type === 'theory'){
            border = '#F1DE33'
            back = '#FFF973'
          }
        }
      }

      return (
        <Link to={'/card#' + elem.type + '_' + elem.id} key={elem.id} style={{textDecoration:'none'}}>
          <div className='level'
          style={{backgroundColor:`${back}`, borderColor:`${border}`}}
          
          >
            {index+1}
          </div>
        </Link>
      )
    })
    return a
  }


  return (
    <div className='home'>
      <header style={{display:'flex',position:'fixed', height:'50px', width:'100%', backgroundColor:'#fafafa'}}>
        <h1 style={{margin:'10px auto 10px 10px'}}>Weiter</h1>
        <Link to={'/user'}>
          <img style={{margin: '10px', backgroundColor:'white', borderRadius:45}} src={user} width={40} height={40} alt='yes'/>
        </Link>
      </header>
      <div style={{paddingTop:'100px'}}>

          <div className='description'>
            <div style={{fontSize:'16px', fontWeight:'bold', marginLeft:'5px'}}>У нас тут все просто. Выполняй задания, чтобы быть умнее. Проходя блоки, которых всего 4 (легкий, средний, сложный, ультрасложный), ты открываешь следующих по сложности.</div>
            <div style={{display:'flex',margin:'7px 0px'}}>
              <div style={{backgroundColor:'green', borderRadius:'45px', width:'20px', height:'20px'}}></div>
              <div style={{fontSize:'16px', fontWeight:'bold', marginLeft:'5px'}}> - задачи для решения письменно</div>
            </div>
            <div style={{display:'flex',margin:'7px 0px'}}>
              <div style={{backgroundColor:'blue', borderRadius:'45px', width:'20px', height:'20px', marginRight:'5px'}}></div>
              <div style={{fontSize:'16px', fontWeight:'bold'}}> - задачи для решения в уме</div>
            </div>
            <div style={{display:'flex',margin:'7px 0px'}}>
              <div style={{backgroundColor:'yellow', borderRadius:'45px', width:'20px', height:'20px'}}></div>
              <div style={{fontSize:'16px', fontWeight:'bold', marginLeft:'5px'}}> - теория для решения задач</div>
            </div>
            <div style={{display:'flex',margin:'7px 0px'}}>
              <div style={{backgroundColor:'red', borderRadius:'45px', width:'20px', height:'20px'}}></div>
              <div style={{fontSize:'16px', fontWeight:'bold', marginLeft:'5px'}}> - итоговая работа по разделу</div>
            </div>
          </div>

          <div className='step'>
            <div style={{width:'95%', margin:'25px 0px',height:'30px', borderRadius:'25px', backgroundColor:'#23d5ab'}}></div>
            {BuildListLevels(levels.easy)}
          </div>
          <div className='step'>
            <div style={{width:'95%', margin:'25px 0px',height:'30px', borderRadius:'25px', backgroundColor:'#23a6d5'}}></div>
            {BuildListLevels(levels.normal)}
          </div>
          <div className='step'>
            <div style={{width:'95%', margin:'25px 0px',height:'30px', borderRadius:'25px', backgroundColor:'#ee7752'}}></div>
            {BuildListLevels(levels.hard)}
          </div>
          <div className='step'>
            <div style={{width:'95%', margin:'25px 0px',height:'30px', borderRadius:'25px', backgroundColor:'red'}}></div>
            {BuildListLevels(levels.extrahard)}
          </div>
      </div>
    </div>
  );
}

export default Home;
