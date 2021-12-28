import { useEffect, useState } from 'react';
import {useLocation, Routes, Route} from 'react-router-dom';

import './App.css';

import Intro from './panels/intro';
import Home from './panels/home';
import User from './panels/user';
import Card from './panels/card';


const App = () => {
  
  return (
      <main>
              <Routes>
                <Route path='/intro' element={<Intro/>}/>
                <Route path='/' element={<Home/>}/>
                <Route path='/user' element={<User/>}/>
                <Route path='/card' element={<Card/>}/>

              </Routes>
      </main>
  );
}

export default App;
