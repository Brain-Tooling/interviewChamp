import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { LogInFormValues } from '../../types/interfaces';
import { LogInProps } from "../../types/interfaces";

const LoginForm: React.FC = () => {
// handle login form submission
  const [formValues, setFormValues] = useState<LogInFormValues>({ 
    username: '', 
    password: ''
  });

  const navigate = useNavigate();
  // const handleSend = async (endpoint) => {
  //   //TO DO: fix body so that html injection attacks can't happen
  //   try {
  //     console.log(loginValues.username, loginValues.password, endpoint);
  //     const response = await fetch(`/${endpoint}`, {
  //       method: 'POST',
  //       headers: { 'Content-Type': 'application/json' },
  //       body: JSON.stringify({ username: loginValues.username, password: loginValues.password }),
  //     });
  //     console.log(response.status);
  //     if (response.status === 200) navigate('/dashboard');
      
  //   } catch (err) {
  //     console.log(err);
  //   }
  // };

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    // do something with username and password here.
    try {
      console.log('Login Form data:', formValues);
      const response = await fetch('http://localhost:5001/login/', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ username: formValues.username, password: formValues.password }),
      });
      const data = await response.json();
      console.log('THIS IS DATA', data);
      if (data.exist === true) navigate('/dashboard');
      else { alert('Incorrect login credentials')};
    } catch (error) {
      console.log(error);
    }
    
  }

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = event.target;
    setFormValues((prevValues: LogInFormValues) => ({...prevValues, [name]: value}))
  }
  return (
    <div className="flex flex-col items-center justify-center w-full">
      
      <div className='form-container border w-full' >
        <form id='signup-form' onSubmit={handleSubmit} className='border-gray-400'>
          <div className='block mb-2 text-sm font-bold text-gray-700'>
            <input 
              type='username' 
              name='username' 
              id='username' 
              placeholder='UserName' 
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
            className="w-full px-3 py-2 mb-2 text-white bg-blue-500 rounded-lg shadow-sm hover:bg-blue-400 focus:outline-none focus:ring-1 focus:ring-blue-500 focus:ring-offset-1 sm:text-sm"
            type='submit'
          >
            Log In
          </button>
          <button 
          className="w-full px-3 py-2 text-white bg-blue-500 rounded-lg shadow-sm hover:bg-blue-400 focus:outline-none focus:ring-1 focus:ring-blue-500 focus:ring-offset-1 sm:text-sm"
          onClick={() => navigate('/signup')}
          >
            Create Account
          </button>
        </form>
      </div>
    </div>
  )
};

export default LoginForm;

{/* <Form inputs={inputs} onSubmit={handleSubmit}>
      <input type='username' name='username' value={inputs.username} onChange={handleInputChange}/>
      <input type='password' name='password' value={inputs.password} onChange={handleInputChange}/>
    </Form> */}