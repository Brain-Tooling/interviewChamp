import React from "react"
import { useNavigate } from 'react-router-dom';
import FormContainer from "../../containers/FormContainer";
const LoginPage = () => {

  const navigate = useNavigate();
  
  return (
    <div className="flex flex-col h-screen items-center justify-center">
      Login Page
      <FormContainer formType="login-form"/>  
      <button 
        className="w-5/12 px-3 py-2 text-white bg-blue-500 rounded-lg shadow-sm hover:bg-blue-400 focus:outline-none focus:ring-1 focus:ring-blue-500 focus:ring-offset-1 sm:my-2 "
        onClick={() => navigate('/dashboard')}>Click me to go to dashboard(temp)
      </button>
    </div>
  )
};

export default LoginPage;
