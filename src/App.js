import './App.css';
import { useState } from 'react';

import dice1 from "./zarfotolar/dice1.png";
import dice2 from "./zarfotolar/dice2.png";
import dice3 from "./zarfotolar/dice3.png";
import dice4 from "./zarfotolar/dice4.png";
import dice5 from "./zarfotolar/dice5.png";
import dice6 from "./zarfotolar/dice6.png";


function App() {

  var zarFoto = [
    dice1,
    dice2,
    dice3,
    dice4,
    dice5,
    dice6
   ]

  const[ilkzar, setNewImage] = useState(zarFoto[0])
  const[ikincizar, setNewImage2] = useState(zarFoto[1])

  const zarat=() =>
  {
    var rastgelesayi1=Math.floor(Math.random()*6);
    var rastgelesayi2=Math.floor(Math.random()*6);
    setNewImage(zarFoto[rastgelesayi1]);
    setNewImage2(zarFoto[rastgelesayi2]);

  }
  return (
    <div className="App">
      <div className="container">
      <img className='square' src={ilkzar}></img>
      <div style={{width: '3px', display: 'inline-block'}}></div>
      <img className='square' src={ikincizar}></img>
      </div>
      <button type='button' className='btn btn-outline-primary' onClick={zarat}>Zar At</button>

    </div>
  );
}

export default App;
