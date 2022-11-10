import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import Home from './routes/Home';
import Main from './routes/Main';

function App() {


  return (
    <div>
    
    <BrowserRouter>
    <Routes>
        <Route path='/' element={<Main></Main>}></Route>
        <Route path='/login'></Route>
        <Route path='/main' element={<Home></Home>}></Route>
    </Routes>
    </BrowserRouter>

    </div>
  );
}

export default App;
