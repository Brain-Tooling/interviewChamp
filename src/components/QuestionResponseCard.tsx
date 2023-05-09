import React from "react"

const QuestionResponseCard = (props) => {
  return (
    <div className='max-w-sm rounded overflow-hidden shadow-lg p-4 grid grid-rows-5'>
      <div className='row-span-1 font-bold text-xl mb-2'>{props.question}</div>
      <div className='row-span-3'>{props.response}</div>
      
      <div className='row-span-1'>
        <button
          className='bottom-0 my-8 float-right px-5 py-2 bg-red-500 text-white text-sm font-bold tracking-wide rounded-full focus:outline-none'
        >{props.type}</button>
      </div>
    </div>
  )
};

export default QuestionResponseCard;
