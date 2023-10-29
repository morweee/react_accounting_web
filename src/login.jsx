import React, { useState } from "react";
import validation from './loginValidation';

export const Login = (props) => {
    const [values, setValues] = useState({
        email: "", 
        password: ""
    });
    const [errors, setErrors] = useState({})

    const handleInput = (e) => {
        setValues(prev => ({...prev, [e.target.name]: [e.target.value]}))
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        setErrors(validation(values))
    }

    return (
        <div className="auth-form-container">
            <h2>Sign In</h2>
            <form className="login-form" onSubmit={handleSubmit}>
                <label htmlFor="email">email</label>
                <input type="email" placeholder="enter email" id="email" name="email"
                 onChange={(handleInput)} />
                 {errors.email && <span className="text-danger">{errors.email}</span>}
                <label htmlFor="password">password</label>
                <input onChange={(handleInput)} 
                 type="password" placeholder="********" id="password" name="password" />
                 {errors.password && <span className="text-danger">{errors.password}</span>}
                <button type="submit">Log In</button>
            </form>
            <button className="link-btn" onClick={() => props.onFormSwitch('register')}>Don't have an account? Register now</button>
        </div>
    )
}