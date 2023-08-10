import React, {useState} from "react";
import Axios from "axios";


export const Register = (props) => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [name, setName] = useState(''); 
    
    const handleSubmit = (e) => {
        Axios.post(
            "http://localhost:3001/register",
            {
                username: name,
                email: email,
                password: password
            }
        ).then((response)=>{console.log(response.data)})

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
                <button type="button" onClick={handleSubmit}>Register</button>
            </form>
            <button className="link-btn" onClick={() => props.onFormSwitch('login')}>Already have an account? log in now</button>
        </div>
    )
}