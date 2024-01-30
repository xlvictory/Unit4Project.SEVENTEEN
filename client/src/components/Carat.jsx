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
        <>
            <div className="account-welcome">
              <h1 id="welcome">Welcome, {carat.first_name}!</h1>
                
            </div>
        </>
    )
}