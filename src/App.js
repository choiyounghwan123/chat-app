import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import Login from './component/Login';
import Home from './routes/Home';
import Main from './routes/Main';

function App() {


  return (
    <div>
    
    <BrowserRouter>
    <Routes>
        <Route path='/' element={<Main></Main>}></Route>
        <Route path='/login' element={<Login></Login>}></Route>
        <Route path='/main' element={<Home></Home>}></Route>
    </Routes>
    </BrowserRouter>

    </div>
  );
}

export default App;
