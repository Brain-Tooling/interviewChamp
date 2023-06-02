import React, { useState } from "react"
import { useNavigate } from 'react-router-dom';
import { SignUpFormValues } from "../../types/interfaces";
import Form from "./Form";

const SignUpForm: React.FC = () => {
// handle sign up form submission
  
  const [formValues, setFormValues] = useState<SignUpFormValues>({
    firstName: '',
    lastName: '',
    username: '',
    email: '', 
    password: '',
  })

  const navigate = useNavigate();

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    console.log(formValues)
    try {
      console.log('Login Form data:', formValues);
      const response = await fetch(`http://localhost:5001/login/signup`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          firstName: formValues.firstName,
          lastName: formValues.lastName,
          username: formValues.username, 
          email: formValues.email, 
          password: formValues.password }),
      });
      const data = await response.json();
      console.log(data);
      if (response.status === 200) {
        document.cookie = `user=${data}`
        navigate('/dashboard');
      }  
    } catch (error) {
      console.log(error);
    }
  }

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = event.target;
    console.log('name: ', name)
    console.log('event.targetvalue: ', event.target)
    setFormValues((prevValues: SignUpFormValues) => ({ ...prevValues, [name]: value}))
  }
  const googleSubmit = async () => {
    try {
      const response = await fetch('http://localhost:5001/auth/google');
      const data = await response.json();
      console.log('data from Google submit ', data);
      if (response.status === 200) navigate('/dashboard');
    } catch (error) {
      console.log(error)
    }
  }
  return (
    <div className="flex flex-col items-center justify-center w-full">
      
      <div className='form-container w-full' >
        <form id='signup-form' onSubmit={handleSubmit} className='border-gray-400'>
          <div className='block mb-2 text-sm font-bold text-gray-700'>
            <input 
              type='text' 
              name='username' 
              id='username' 
              placeholder='Pick a User Name' 
              value={formValues.username} 
              onChange={handleChange} required 
              className="w-full px-3 py-2 placeholder-gray-400 border rounded-lg shadow-sm appearance-none focus:outline-none focus:ring-1 focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
              />
          </div>
          <div className='block mb-2 text-sm font-bold text-gray-700'>
            <input 
              type='password' 
              name='password' 
              id='password' 
              placeholder='Password' 
              value={formValues.password} 
              onChange={handleChange} required 
              className="w-full px-3 py-2 placeholder-gray-400 border rounded-lg shadow-sm appearance-none focus:outline-none focus:ring-1 focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
              />
          </div>
          <button 
            className="w-full px-3 py-2 mb-2 text-white bg-green-700 hover:bg-green-500 rounded-lg shadow-sm focus:outline-none focus:ring-1 focus:ring-blue-500 focus:ring-offset-1 sm:text-sm"
            type='submit'
            >
              Sign Up
            </button>
            <button 
              className="w-full px-3 py-2 text-white bg-green-700 hover:bg-green-500 rounded-lg shadow-sm focus:outline-none focus:ring-1 focus:ring-blue-500 focus:ring-offset-1 sm:text-sm mb-2"
              onClick={() => navigate('/')}
            >
              Log In
            </button>
            <div className="px-6 sm:px-0 max-w-sm">
            <button 
              type="button" 
              onClick={googleSubmit}
              className="text-white w-full  bg-green-700 hover:bg-green-500 focus:ring-4 focus:outline-none focus:ring-[#4285F4]/50 font-medium rounded-lg text-sm px-5 py-2.5 text-center inline-flex items-center justify-between dark:focus:ring-[#4285F4]/55 mr-2 mb-2">
                <svg className="mr-2 -ml-1 w-4 h-4" aria-hidden="true" focusable="false" data-prefix="fab" data-icon="google" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 488 512">
                  <path fill="currentColor" d="M488 261.8C488 403.3 391.1 504 248 504 110.8 504 0 393.2 0 256S110.8 8 248 8c66.8 0 123 24.5 166.3 64.9l-67.5 64.9C258.5 52.6 94.3 116.6 94.3 256c0 86.5 69.1 156.6 153.7 156.6 98.2 0 135-70.4 140.8-106.9H248v-85.3h236.1c2.3 12.7 3.9 24.9 3.9 41.4z"></path>
                </svg>
                  Sign up with Google
                <div></div>  
            </button>
          </div>
        </form>
      </div>      
    </div>
  )
};

export default SignUpForm;