import React from 'react'
import { Link } from 'react-router-dom'
import { useState } from 'react'
import Validation from './SignupValidation'

const Signup = () => {
    const [values, setValues] = React.useState({
        name: "",
        email: "",
        password: ""
    });

    const [errors, setErrors] = useState({});

    const handleInput = (event) => {
        setValues(prev => ({ ...prev, [event.target.name]: event.target.value }));
    }

    const handleSubmit = (event) => {
        event.preventDefault();   
        setErrors(Validation(values));
    }

  return (
    <div className="d-flex justify-content-center allign-items-center bg-primary vh-100">
    <div className="bg-white p-3 rounded w-26">
        <h2>Signup</h2>
        <form action="" onSubmit={handleSubmit}>
            <div className="mb-3">
                <label htmlFor="name"> <strong>Name</strong> </label>
                <input type="text" placeholder="Enter Name" name='name'
                onChange={handleInput} className="form-control rounded 0"/>
                {errors.name && <span className="text-danger"> {errors.name} </span> }
            </div>
            <div className="mb-3">
                <label htmlFor="email"> <strong>Email</strong> </label>
                <input type="email" placeholder="Enter Email" name='email' 
                onChange={handleInput} className="form-control rounded 0"/>
                {errors.email && <span className="text-danger"> {errors.email} </span> }
            </div>
            <div className="mb-3">
                <label htmlFor="password"> <strong>Password</strong> </label>
                <input type="password" placeholder="Enter Password" name='password'
                onChange={handleInput} className="form-control rounded 0"/>
                {errors.password && <span className="text-danger"> {errors.password} </span> }
            </div>
            <button type='submit' className="btn btn-success w-100 rounded-0"> <strong>Sign up</strong> </button>
            <p>You are agree to term and conditions</p>
            <Link to="/" className="btn btn-default w-100 bg-light rounded-0 text-decoration-none"> <strong>Login</strong> </Link>
        </form>
    </div>
    </div>
  ) 
}

export default Signup