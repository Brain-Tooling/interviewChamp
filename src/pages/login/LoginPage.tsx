import React from "react"
import { useNavigate } from 'react-router-dom';
import FormContainer from "../../containers/FormContainer";
import Logo from '../../components/Logo';
const LoginPage = () => {

  const navigate = useNavigate();
  
  return (
    <div className="flex flex-col h-screen items-center justify-center bg-gradient-to-b from-green-400 to-green-600">
      <Logo />
      <FormContainer formType="login-form"/>
    </div>
  )
};

export default LoginPage;
