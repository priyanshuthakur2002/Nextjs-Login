"use client"
import axios from "axios";
import { useState } from "react";
import styles from './CreateAccount.module.css'; // Import CSS module

export default function CreateAccount() {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState("");

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const response = await axios.post('/api/users', {
                name,
                email,
                password,
            });
            if(response.error){
                setError(response.error);
            }
            console.log('User created with account: ', response.data);
        } catch (error) {
            console.log("Error creating user with account: ", error);
            setError(error.message || "An error occured");
        }
    }

    return (
        <div className={styles.createAccountContainer}>
            <div className={styles.wrapper}>
            <h2 className={styles.heading}>Create Account</h2>
            <hr className={styles.hrLine} />
            <p className={error === "" ? styles.hide : styles.show}>{error}</p>
                <form onSubmit={handleSubmit}>
                    <div>
                        <label htmlFor="name" className={styles.Label}>Name</label>
                        <input
                            type="text"
                            id="name"
                            value={name}
                            onChange={(e) => setName(e.target.value)}
                            required
                            className={styles.Input}
                        />
                    </div>
                    <div>
                        <label htmlFor="email" className={styles.Label}>Email</label>
                        <input
                            type="email"
                            id="email"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                            required
                            className={styles.Input}
                        />
                    </div>
                    <div>
                        <label htmlFor="password" className={styles.Label}>Password</label>
                        <input
                            type="password"
                            id="password"
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                            required
                            className={styles.Input}
                        />
                    </div>
                    <button type="submit" className={styles.btn}>Create User</button>
                    {error && <div className={styles.show}>Error: {error}</div>}
                </form>
            </div>
        </div>
    )
}
