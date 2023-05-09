import React, { useState } from 'react';
import Form from './Form';
import { useNavigate } from 'react-router-dom';

const LoginForm: React.FC = () => {
// handle login form submission
  const [inputs, setInputs] = useState({ username: '', password: ''});
  const [username, setUsername] = useState((null));
  const [password, setPassword] = useState((null));
  const navigate = useNavigate();

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>, data: Record<string, string>) => {
    event.preventDefault();
    // do something with username and password here.
    console.log('Login Form data:', data);
  }

  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    console.log('inputa: ', inputs)
    setInputs({ ...inputs, [event.target.name]: event.target.value })
  }
  return (
    <div>
       <Form inputs={inputs} onSubmit={handleSubmit}>
      <input type='username' name='username' value={inputs.username} onChange={handleInputChange}/>
      <input type='password' name='password' value={inputs.password} onChange={handleInputChange}/>
      </Form>
      <button 
        className="w-full px-3 py-2 text-white bg-blue-500 rounded-lg shadow-sm hover:bg-blue-400 focus:outline-none focus:ring-1 focus:ring-blue-500 focus:ring-offset-1 sm:my-2 "
        onClick={() => navigate('/signup')}
      >
        Create Account
      </button>
    </div>
   
  )
};

export default LoginForm;