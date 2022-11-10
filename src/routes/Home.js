import { useLocation } from "react-router-dom";

function Home(){

    let location = useLocation();
    let nickName = location.state.nickName;

    return(
        <>
        <p>Home</p>
        <p>{nickName}</p>
        </>
    )
}

export default Home;