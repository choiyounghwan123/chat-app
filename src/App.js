import './App.css';
import {io} from "socket.io-client";
import { useState } from 'react';
function App() {

  let socket = io("http://localhost:8080",{
    cors:{
      origin:"*"
    }
  });

  let [msg,setMsg] = useState('');

  const onChangeInput = (e) =>{
    setMsg(e.target.value);
    console.log(msg);
  }


  return (
    <div className="App">
     
    <input type="text" value={msg} onChange={onChangeInput}></input>
    <button onClick={()=>{
      socket.emit('msg',msg);
      setMsg('');
    }}>emit</button>

    </div>
  );
}

export default App;
