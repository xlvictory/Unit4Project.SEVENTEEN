import React from 'react';
import { useState, useContext } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { urlContext } from "./ContextAPI";



export default function Register({ setToken }) {
    const API_URL = useContext(urlContext);
    const [firstName, setFirstName] = useState("");
    const [username, setUsername] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [error, setError] = useState(null);
    const navigate = useNavigate();
    const { carat_id } = useParams();

    async function handleSubmit(event) {
        event.preventDefault();

        if(email.length < 5) {
            setError('Please provide a valid email address', error);
        } else if (password.length < 8) {
            setError('Password requires at least 8 characters', error);
        } else {
            try {
                const response = await fetch(`${API_URL}/carat/register`, {
                    method: "POST",
                    headers: { "Content-Type": "application/json" },
                    body: JSON.stringify({
                        first_name: firstName,
                        username: username,
                        email: email,
                        password: password,
                    })
            
                });
                const result = await response.json();
                console.log(result);
                setToken(result.token);
                console.log(result.token)

                if(result.token) {
                setFirstName("");
                setUsername("");
                setEmail("");
                setPassword(""); 
                navigate(`/carat/login`);
                }

            } catch(error) {
                setError("Couldn't create account");
                console.error(error);
            }
        }
    }
    return (
        <>
        <div className='register-form'>
            <h2>Create Account</h2>
            {<p>{error}</p>}
            <form onSubmit={handleSubmit}>
                <label>
                    First Name: <input type='text' onChange={(event) => {
                        setFirstName(event.target.value)
                    }} />
                </label><br />
                <label>
                    Username: <input type='text' onChange={(event) => {
                        setUsername(event.target.value)
                    }} />
                </label><br />
                <label>
                    Email: <input type='text' onChange={(event) => {
                        setEmail(event.target.value)
                    }} />
                </label><br />
                <label>
                    Password: <input type='password' onChange={(event) => {
                        setPassword(event.target.value)
                    }} />
                </label><br /><br />
                <button type="submit">Sign Up</button> <br/>
            </form>
        </div>
        </>
    )
}