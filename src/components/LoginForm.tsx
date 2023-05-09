import React, { useState } from 'react';
import Form from './Form';

const LoginForm: React.FC = () => {
// handle login form submission
  const [inputs, setInputs] = useState({ username: '', password: ''});

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>, data: Record<string, string>) => {
    event.preventDefault();
    // do something with username and password here.
    console.log('Login Form data:', data);
  }

  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setInputs({ ...inputs, [event.target.name]: event.target.value })
  }
  return (
    <Form inputs={inputs} onSubmit={handleSubmit}>
      <input type='username' name='username' value={inputs.username} onChange={handleInputChange}/>
      <input type='password' name='password' value={inputs.password} onChange={handleInputChange}/>
    </Form>
  )
};

export default LoginForm;