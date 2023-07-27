<<<<<<< HEAD
import React, { useState } from "react";
import './App.css';
import { Login } from "./login";
import { Register } from "./register";

function App() {
  const [currentForm, setCurrentForm] = useState('login');

  const toggleForm = (formName) => {
    setCurrentForm(formName);
  }

=======
import logo from './logo.svg';
import React, { useState } from "react"  
import './App.css';
import { Login } from "./login"
import { Register } from "./register"

function App() {
  const [currForm, setcurrForm] = useState('login')

  const toggleForm = (form) => {
      setcurrForm(form)
  }
>>>>>>> 93817c4 (first commit)
  return (

    <div className="App">
      {
<<<<<<< HEAD
        currentForm === "login" ? <Login onFormSwitch={toggleForm} /> : <Register onFormSwitch={toggleForm} />
=======
        currForm === 'login'? <Login onSwitchForm = {toggleForm}/> : <Register onSwitchForm = {toggleForm}/>
>>>>>>> 93817c4 (first commit)
      }
    </div>
  );
}

export default App;