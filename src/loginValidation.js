function validation(values){
    let error = {}
    const email_pattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
    const password_pattern = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])[a-zA-Z0-9]{8,}$/ 

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
        error.password = "Password does not match the format: at least 8 characters include: 1 number, 1 small letter, and 1 capital letter"
    }
    else error.email = ""
    
    return error
}

export default validation;