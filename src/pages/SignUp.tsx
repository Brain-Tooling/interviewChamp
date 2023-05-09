import React, { useState } from "react"
import FormContainer from "../containers/FormContainer";
//import SignUpFormValues from '../../types/interfaces'

const SignUp = () => {

  

  return ( 
    <div className="flex flex-col h-screen items-center justify-center">        
       Sign Up Page
      <FormContainer formType="sign-up-form"/>  
    </div>
  )
};

export default SignUp;
