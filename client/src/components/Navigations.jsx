
import React from "react";
import { Link, useNavigate } from "react-router-dom";
import { UserContext } from "./ContextAPI";
import { useContext, useState } from "react";

export default function Navigations({ token, setToken, user, setUser }) { 
    const navigate = useNavigate();
    const diamond = "https://media4.giphy.com/media/3o7aCQrLIjocfdPYYM/giphy.gif?cid=82a1493b2ft3i62x6bhhu2f5ie1jtoh99sjg8fxj511birii&ep=v1_gifs_search&rid=giphy.gif&ct=s"
    // const { user, setUser } = useContext(UserContext);
console.log(user);
    return (
        <> 

            <div id='logo'>
                <h1>SEVENTEEN <img src={diamond} className="diamond" /></h1>
                <div id="links">
                    <Link className="home" to='/'>Home</Link>
                <Link className="members" to='/members'>Members</Link>
                <Link className="albums" to='/albums'>Albums</Link>
                <Link className="mvs" to='/MVs'>Music Videos</Link>
                
            {!token ? <Link className="login" to='/carat/login'>Login</Link> : ""} 
             {token ? <Link className="acc" to={`/carat/${user.carat.carat_id}`}>Account</Link> : ""}
             {token ? <button id="logout" onClick={() => { setToken(null); navigate('/carat/login') }}>Log Out</button> : ""}
               </div>
            </div>
        </>
    )
}