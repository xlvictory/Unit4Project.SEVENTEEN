import React from "react";
import { useState, useContext } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { urlContext, UserContext } from "./ContextAPI";

export default function Login({ token, setToken, user, setUser }) {
    const API_URL = useContext(urlContext);
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    const [error, setError] = useState(null);
    const navigate = useNavigate();

    async function handleSubmit(event) {
        event.preventDefault();
        try {
            const response = await fetch(`${API_URL}/carat/login`, {
                method: "POST",
                headers: { 
                    "Content-Type": "application/json",
                    "Authorization": `Bearer ${token}`, 
                },
                body: JSON.stringify({
                    username: username,
                    password: password,
                })
            });
            const result = await response.json();
            setToken(result.token); 
            setUser(result);

            if (result.token) {
                setUsername("");
                setPassword("");
                navigate(`/carat/${result.carat.carat_id}`);
            }
            return result;

        } catch (error) {
            setError(error);
            console.error(error);
        }
    }
    return (
        <>
            <div className='form-container'>
                <h2>Login</h2>
                <form className="login-form" onSubmit={handleSubmit}>
                    <label>
                        Username:
                        <input type="text" onChange={(event) => {
                            setUsername(event.target.value)
                        }} />
                    </label><br />
                    <label>
                        Password:
                        <input type="password" onChange={(event) => {
                            setPassword(event.target.value)
                        }} />
                    </label><br /><br />
                    <button type="submit">Log In</button><br />
                    <p>Want to join our fandom? <a href="/carat/register">Slip into the Diamond Life</a></p>
                </form>
            </div>
        </>
    )
}