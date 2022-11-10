import './App.css';
import {io} from "socket.io-client";
function App() {

  let socket = io("http://localhost:8080",{
    cors:{
      origin:"*"
    }
  });

  return (
    <div className="App">
     
    </div>
  );
}

export default App;
