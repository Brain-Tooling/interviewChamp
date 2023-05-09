import React from 'react';
import { FormProps } from '../../types/interfaces'

// Reusable Form component
// create React functional component that takes in type FormProps
// FormProps interface has properties - inputs and onSubmit
const Form: React.FC<FormProps> = ({ inputs, onSubmit }) => {

  // handle for submission
  // takes in event of type React.FormEvent which is a function that takes an HTMLFormElement
  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    // prevent re-render
    event.preventDefault();
    onSubmit(event, inputs);
  }

  return (
    <form onSubmit={handleSubmit}>
      {Object.entries(inputs).map(([name, value]) => (
        <div key={name} className='mb-4'>
          <label htmlFor={name} className='block mb-2 text-sm font-bold text-gray-700'>
            {name}
          </label>
          <input
            type='text'
            name={name}
            id={name}
            value={value}
            onChange={(event) => ({ ...inputs, [name]: event.target.value})}
            className="w-full px-3 py-2 placeholder-gray-400 border rounded-lg shadow-sm appearance-none focus:outline-none focus:ring-1 focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
          />
        </div>
      ))}
      <button 
        type='submit'
        className="w-full px-3 py-2 text-white bg-blue-500 rounded-lg shadow-sm hover:bg-blue-400 focus:outline-none focus:ring-1 focus:ring-blue-500 focus:ring-offset-1 sm:text-sm"
      >
        Log In
      </button>
    </form>
  );
};  

export default Form;