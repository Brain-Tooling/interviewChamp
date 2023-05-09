import React, { Component, ReactComponentElement } from "react";
import SignUpForm  from '../components/SignUpForm';
import LoginForm  from '../components/LoginForm';
// import { v4 as uuidv4 } from 'uuid';

type SelectProps = {
  formType: string;
  
}
const FormContainer: React.FC<SelectProps> = ( { formType } ) => {
  // pass in correct form
  const form = formType === 'sign-up-form' ? <SignUpForm/> : <LoginForm/>
  return (
    <div className="w-full max-w-xs">
      Form Container
      {form}
      <p className="text-center text-gray-500 text-xs">
    &copy;2023 Dragon Corp. All rights reserved.
  </p>
    </div>
  )
};

export default FormContainer;