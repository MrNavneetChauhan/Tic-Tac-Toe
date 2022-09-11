import './App.css';
import {Routes,Route} from "react-router-dom"
import { Join } from './component/join/Join';
import { Navbar } from './component/Navbar/Navbar';
import { useEffect, useRef } from 'react';
import { TicTac } from './component/tictoc/TicTac';
import { Chat } from './component/chat/Chat';
function App() {

  return (
    <div  className="App">
      <Navbar/>
      <Routes>
        <Route path='/' element={<Join/>} ></Route>
        <Route path='/tictac' element={<TicTac/>} ></Route>
        <Route path='/chat' element={<Chat/>} ></Route>
      </Routes>
    </div>
  );
}

export default App;
