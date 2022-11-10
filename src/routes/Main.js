import { useLocation } from 'react-router-dom';
import '../App.css'
import Menu from '../component/Menu';



function Main(){
    return(
        <div>
            <Menu></Menu>
            <h2>메인화면</h2>
            <p>chatting App</p>
        </div>
    )
}

export default Main;