import React, { useContext, useState, useEffect } from "react";
import { useNavigate, useParams } from 'react-router-dom';
import { urlContext } from './ContextAPI';

export default function Carat({ token }) {
    const API_URL = useContext(urlContext);
    const navigate = useNavigate();
    const [carat, setCarat] = useState({});
    // const [faveMember, setFaveMember] = useState([]);
const { carat_id } = useParams();

    useEffect(() => {
        async function fetchCarat() {
            try {
                const response = await fetch(`${API_URL}/carat/${carat_id}`, {
                    headers: { 
                        "Content-Type": "application/json",
                        "Authorization": `Bearer ${token}`,
                    }
                });
                const result = await response.json();
                setCarat(result);
                console.log(result);
                return result;
            } catch (error) {
                console.error(error);
            }
        }
        fetchCarat();
    }, []);

    return (
        <div className="acc-container">
            <div className="account-welcome">
              <h1 id="welcome">Welcome, {carat.first_name}!</h1>
              <h3>Account Info:</h3>
              <p id='acc-key'>Username:</p>
              <p>{carat.username}</p>
              <p id='acc-key'>Email:</p> 
              <p>{carat.email}</p><br/></div>
              <div className="bongee">
                <img src="https://media0.giphy.com/media/nMbwGvI2xnyPqr6FpU/giphy.gif?cid=6c09b9525ufpd1wentz7zsfz7j7bqlrsvhki16w0sg8wy986&ep=v1_stickers_related&rid=giphy.gif&ct=s" />
              <img src="https://media0.giphy.com/media/nMbwGvI2xnyPqr6FpU/giphy.gif?cid=6c09b9525ufpd1wentz7zsfz7j7bqlrsvhki16w0sg8wy986&ep=v1_stickers_related&rid=giphy.gif&ct=s" />
              <img src="https://media0.giphy.com/media/nMbwGvI2xnyPqr6FpU/giphy.gif?cid=6c09b9525ufpd1wentz7zsfz7j7bqlrsvhki16w0sg8wy986&ep=v1_stickers_related&rid=giphy.gif&ct=s" />
              </div>
        </div>
    )
}