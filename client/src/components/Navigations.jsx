import { Link, useNavigate } from "react-router-dom";

export default function Navigations({ token, setToken }) 
   { const navigate = useNavigate();
    const diamond = "https://media4.giphy.com/media/3o7aCQrLIjocfdPYYM/giphy.gif?cid=82a1493b2ft3i62x6bhhu2f5ie1jtoh99sjg8fxj511birii&ep=v1_gifs_search&rid=giphy.gif&ct=s"
    return (
        <>
            <div id='nav'>
                <h1>SEVENTEEN <img src={diamond} className="diamond" /></h1>
                <Link className="home" to='/'>Home</Link>
                <Link className="members" to='/members'>Members</Link>
                <Link className="albums" to='/albums'>Albums</Link>
                <Link className="mvs" to='/MVs'>Music Videos</Link>
            {!token ? <Link className="login" to='/login'>Login</Link> : ""} 
             {token ? <Link className="acc" to='/carat'>Account</Link> : ""}
             {token ? <button id="logout" onClick={() => { setToken(null); navigate('/login') }}>Log Out</button> : ""}
               
            </div>
        </>
    )
}