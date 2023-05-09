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
      const response = await fetch(`/login/signup`, {
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
      if (response.status === 200) navigate('/dashboard');
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
  return (
    <div className="flex flex-col items-center justify-center w-full">
      
      <div className='form-container border w-full' >
        <form id='signup-form' onSubmit={handleSubmit} className='border-gray-400'>
          <div className='block mb-2 text-sm font-bold text-gray-700'>
            <input 
              type='text' 
              name='firstName' 
              id='firstName' 
              placeholder='First Name' 
              value={formValues.firstName} 
              onChange={handleChange} required 
              className="w-full px-3 py-2 placeholder-gray-400 border rounded-lg shadow-sm appearance-none focus:outline-none focus:ring-1 focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
              />
          </div>
          <div className='block mb-2 text-sm font-bold text-gray-700'>
            <input 
              type='text' 
              name='lastName' 
              id='lastName' 
              placeholder='Last Name' 
              value={formValues.lastName} 
              onChange={handleChange} required 
              className="w-full px-3 py-2 placeholder-gray-400 border rounded-lg shadow-sm appearance-none focus:outline-none focus:ring-1 focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
              />
          </div>
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
              type='email' 
              name='email' 
              id='email' 
              placeholder='Email' 
              value={formValues.email} 
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
            className="w-full px-3 py-2 mb-2 text-white bg-blue-500 rounded-lg shadow-sm hover:bg-blue-400 focus:outline-none focus:ring-1 focus:ring-blue-500 focus:ring-offset-1 sm:text-sm"
            type='submit'
            >
              Sign Up
            </button>
            <button 
              className="w-full px-3 py-2 text-white bg-blue-500 rounded-lg shadow-sm hover:bg-blue-400 focus:outline-none focus:ring-1 focus:ring-blue-500 focus:ring-offset-1 sm:text-sm"
              onClick={() => navigate('/login')}
            >
              Log In
            </button>
        </form>
      </div>      
    </div>
  )
};

export default SignUpForm;