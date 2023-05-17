import React, { useState } from "react"
import FormContainer from "../containers/FormContainer";
//import SignUpFormValues from '../../types/interfaces'
import Logo from "../components/Logo";
const SignUp = () => {

  

  return ( 
    <div className="flex flex-col h-screen items-center justify-start bg-gradient-to-b from-green-400 to-green-600">        
       <Logo />
      <FormContainer formType="sign-up-form"/>  
    </div>
  )
};

export default SignUp;
