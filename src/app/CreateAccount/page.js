"use client"
import axios from "axios";
import { useState } from "react"

export default function CreateAccount(){
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState(null);

    const handleSubmit = async (e)=>{
        e.preventDefault();
        try{
            const response = await axios.post('/api/users', {
                name,
                email,
                password,
            });
            console.log('User created with account: ', response.data);
        } catch(error) {
            console.log("Error creating user with account: ", error);
            setError(error.message || "An error occured");
        }
    }
    return (
        <form onSubmit={handleSubmit}>
            <div>
                <label htmlFor="name">Name: </label>
                <input 
                    type="text"
                    id="name"
                    value={name}
                    onChange={(e)=> setName(e.target.value)}
                    required
                />
            </div>
            <div>
                <label htmlFor="email">Email: </label>
                <input 
                    type="email"
                    id="email"
                    value={email}
                    onChange={(e)=> setEmail(e.target.value)}
                    required
                />
            </div>
            <div>
                <label htmlFor="password">Password: </label>
                <input 
                    type="password"
                    id="password"
                    value={password}
                    onChange={(e)=> setPassword(e.target.value)}
                    required
                />
            </div>
            <button type="submit">Create User</button>
            {error && <div>Error: {error}</div>}
        </form>
    )
}