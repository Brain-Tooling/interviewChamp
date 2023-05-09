import React from "react"

const QuestionBox = (props) => {


  return (
    <div className='row-span-1 text-xl font-semibold'>
      {props.question ? props.question : <div />}
    </div>
  )
};

export default QuestionBox;
