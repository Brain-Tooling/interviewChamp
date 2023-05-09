import React, { useState } from "react";
import { useNavigate } from 'react-router-dom';
import SignUpForm  from '../components/SignUpForm';
import LoginForm  from '../components/LoginForm';
import { LogInFormValues } from '../../types/interfaces';
import { SignUpFormValues } from "../../types/interfaces";
import { LogInProps } from "../../types/interfaces";

// import { v4 as uuidv4 } from 'uuid';

type SelectProps = {
  formType: string; 
}

const FormContainer: React.FC<SelectProps> = ( { formType } ) => {

  const [loginValues, setLoginValues] = useState<LogInFormValues>({
    username: '', 
    password: ''
  });
  const [signupValues, setSignUpValues] = useState<SignUpFormValues>({})

    const navigate = useNavigate();
  // pass in correct form
  const form = formType === 'sign-up-form' ?  
    <SignUpForm
      setSignupValues={setSignUpValues}
    /> 
    : 
    <LoginForm
    />
  return (
    <div className="w-full max-w-sm border p-5">
      Form Container
      {form}
      <p className="text-center text-gray-500 text-xs">
    &copy;2023 Dragon Corp. All rights reserved.
  </p>
    </div>
  )
};

export default FormContainer;