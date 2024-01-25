import React from 'react';
import { useState } from 'react';

const API_URL = 'http://localhost:8080/api';

export default function Register({ setToken }) {
    const [firstName, setFirstName] = useState("");
    const [username, setUsername] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [error, setError] = useState(null);

    async function handleSubmit(event) {
        event.preventDefault();

        if(email.length < 5) {
            setError('Please provide a valid email address', error);
        } else if (password.length < 8) {
            setError('Password requires at least 8 characters', error);
        } else {
            try {
                const response = await fetch(`${API_URL}/register`, {
                    method: "POST",
                    headers: { "Content-Type": "application/json" },
                    body: JSON.stringify({
                        firstname: firstName,
                        username: username,
                        email: email,
                        password: password,
                    })
            
                });
                const result = await response.json();
                console.log(result);
                setToken(result.token);

                if(token) {
                setFirstName("");
                setUsername("");
                setEmail("");
                setPassword(""); 
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
                    Password: <input type='text' onChange={(event) => {
                        setPassword(event.target.value)
                    }} />
                </label><br /><br />
                <button type="submit">Sign Up</button> <br/>
            </form>
        </div>
        </>
    )
}