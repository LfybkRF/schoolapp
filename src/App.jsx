import {Routes, Route} from 'react-router-dom';

import './App.css';

import Intro from './panels/intro';
import Home from './panels/home';
import User from './panels/user';
import Card from './panels/card';


const App = () => {
  
  return (
      <main>
              <Routes>
                <Route path='/' element={<Intro/>}/>
                <Route path='/home' element={<Home/>}/>
                <Route path='/user' element={<User/>}/>
                <Route path='/card' element={<Card/>}/>

              </Routes>
      </main>
  );
}

export default App;
