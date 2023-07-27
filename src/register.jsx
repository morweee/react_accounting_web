<<<<<<< HEAD
import React, { useState } from "react";

export const Register = (props) => {
    const [email, setEmail] = useState('');
    const [pass, setPass] = useState('');
    const [name, setName] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log(email);
    }

    return (
        <div className="auth-form-container">
            <h2>Register</h2>
        <form className="register-form" onSubmit={handleSubmit}>
            <label htmlFor="name">Full name</label>
            <input value={name} name="name" onChange={(e) => setName(e.target.value)} id="name" placeholder="full Name" />
            <label htmlFor="email">email</label>
            <input value={email} onChange={(e) => setEmail(e.target.value)}type="email" placeholder="youremail@gmail.com" id="email" name="email" />
            <label htmlFor="password">password</label>
            <input value={pass} onChange={(e) => setPass(e.target.value)} type="password" placeholder="********" id="password" name="password" />
            <button type="submit">Log In</button>
        </form>
        <button className="link-btn" onClick={() => props.onFormSwitch('login')}>Already have an account? Login here.</button>
    </div>
=======
import React, {useState} from "react";

export const Register = (props) => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [name, setName] = useState(''); 

    const handleSubmit = (e) => {
        e.preventDeault();
        console.log(email);
    }

    return(
        <div className="form-container"> 
        <h2>Register</h2> 
            <form className="register-form" onSubmit={handleSubmit}>
                <label htmlFor="name" >Create Username</label>
                <input value={name} onChange={(e) => setName(e.target.value)} type="name" placeholder="username" id="name" name="name"></input>
                <label htmlFor="email" >Email</label>
                <input value={email} onChange={(e) => setEmail(e.target.value)} type="email" placeholder="@gmail.com" id="email" name="email"></input>
                <label htmlFor="password" >Password</label>
                <input value={password} onChange={(e) => setPassword(e.target.value)} type="password" placeholder="********" id="password" name="password"></input>
                <button type="submit">log in</button>
            </form>
            <button className="link" onClick={() => props.onSwitchForm('login')}>Already have an account? log in now</button>
        </div>
>>>>>>> 93817c4 (first commit)
    )
}