import { useState } from "react";
import { useNavigate } from "react-router-dom";

const Login = () =>{

    let navigate = useNavigate();
    let [nickName,setNickName] = useState('');

    let onClickThing = () =>{
        navigate('/main',{
            state: {
                nickName:nickName,
            }
        })
    }

    let onChange = (e) =>{
       setNickName(e.target.value);
    }

    return(
        <>
        <h2>Login Page</h2>
        <input type='text' onChange={onChange} value={nickName}placeholder="NickName" onKeyPress={(e)=>{
            if(e.key === 'Enter'){
                onClickThing();
            }
        }}></input>
        <button onClick={onClickThing}>입력</button>
        </>
    )
}

export default Login;