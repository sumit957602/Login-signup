function Validation(values){
    alert("")
    let errors = {}
    const email_pattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/

    if(values.email === ""){
        errors.email = "Email is required"
    } 
    else if(!email_pattern.test(values.email)){
        errors.email = "Email is invalid"
    } 
    else {
        errors.email = ""
    }   

    if(values.password === ""){
        errors.password = "Password is required"
    } 
    else {
        errors.password = ""
    }

    return errors;

}

export default Validation;