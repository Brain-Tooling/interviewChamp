import React from "react"

const QuestionBox = (props) => {


  return (
    <div className='row-span-1 text-xl font-semibold grid grid-rows-6'>
      <div className='row-span-4'>
        {props.question ? props.question : <div />}
      </div>
      <div className='text-xs text-slate-400 row-span-1 flex justify-end'>
        #{props.num}
      </div>
    </div>
  )
};

export default QuestionBox;
