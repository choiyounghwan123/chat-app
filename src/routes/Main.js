import { useLocation, useNavigate } from 'react-router-dom';
import '../App.css'
import Menu from '../component/Menu';



function Main({history}){

    let navigation = useNavigate();

    return(
        <div>
            <Menu></Menu>
            <h2>메인화면</h2>
            <p>chatting App</p>
            <button onClick={()=>{
                navigation('/login');
            }
            }>rr</button>
        </div>
    )
}

export default Main;