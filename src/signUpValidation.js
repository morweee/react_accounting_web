function validation(values){
    let error = {}
    const username_pattern = /^[a-zA-Z0-9_]{3,16}$/
    const email_pattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
    const password_pattern = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])[a-zA-Z0-9]{8,}$/ 

    // validation for username
    if (values.username === ""){
        error.name = "Name should not be empty"
    }
    else if (!username_pattern.test(values.username)){
        error.name = "Name should not start with space"
    }
    else error.name = ""
    
    // validation for email
    if (values.email === ""){
        error.email = "Email should not be empty"
    }
    else if (!email_pattern.test(values.email)){
        error.email = "Email does not match the format: _@gmail.com"
    }
    else error.email = ""

    // validation for password
    if (values.password === ""){
        error.password = "Password should not be empty"
    }
    else if (!password_pattern.test(values.password)){
        error.password = "Password does not match the format: at least 8 characters"
    }
    else error.email = ""
    
    return error
}

export default validation;