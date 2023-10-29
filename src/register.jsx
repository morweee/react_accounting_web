import React, {useState} from "react";
import Axios from "axios";
import validation from "./signUpValidation";


export const Register = (props) => {
    const [values, setValues] = useState({
        username: "",
        email: "", 
        password: ""
    });
    const [errors, setErrors] = useState({})

    const handleInput = (e) => {
        setValues(prev => ({...prev, [e.target.name]: e.target.value}))
    }
    
    const handleSubmit = (e) => {
        e.preventDefault();
        setErrors(validation(values))
        Axios.post(  
            "http://localhost:3001/register",
            {
                username: values.username,
                email: values.email,
                password: values.password
            }
        ).then((response)=>{console.log(response.data)})
    }

    return(
        <div className="form-container"> 
        <h2>Register</h2> 
            <form className="register-form" onSubmit={handleSubmit}>
                <label htmlFor="name" >Create Username</label>
                <input onChange={(handleInput)} type="name" placeholder="username" id="username" name="username"></input>
                {errors.name && <span className="text-danger">{errors.name}</span>}
                <label htmlFor="email" >Email</label>
                <input onChange={(handleInput)} type="email" placeholder="@gmail.com" id="email" name="email"></input>
                {errors.email && <span className="text-danger">{errors.email}</span>}
                <label htmlFor="password" >Password</label>
                <input  onChange={(handleInput)} type="password" placeholder="********" id="password" name="password"></input>
                {errors.password && <span className='text-danger'>{errors.password}</span>}
                <button type="button" onClick={handleSubmit}>Create Account</button>
            </form>
            <button className="link-btn" onClick={() => props.onFormSwitch('login')}>Already have an account? log in now</button>
        </div>
    )
}