import React from "react"
import { useNavigate } from 'react-router-dom';
const LoginPage = (props) => {

  const navigate = useNavigate();
  const goToDash = () => {
    navigate('/dashboard');
  }
  return (
    <div>
      Login Page
      <button onClick={goToDash}>Click me to go to dashboard</button>
    </div>
  )
};

export default LoginPage;
