import React from "react"
import { useNavigate } from 'react-router-dom';
import FormContainer from "../../containers/FormContainer";

const LoginPage = () => {

  const navigate = useNavigate();
  
  return (
    <div className="flex flex-col h-screen items-center justify-center">
      Login Page
      <FormContainer formType="login-form"/>
      <button onClick={() => navigate('/dashboard')}>Click me to go to dashboard</button>
    </div>
  )
};

export default LoginPage;
