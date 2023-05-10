import React from "react"
import { QuestionBoxProps } from "../../types/interfaces";
import checkIcon from './../assets/check-svgrepo-com.svg'

const QuestionBox = (props: QuestionBoxProps) => {


  return (
    <div className='row-span-1 text-xl font-semibold grid grid-rows-6'>
      <div className='row-span-4 flex inline-flex'>
        {props.answered ? <img src={checkIcon} width='32px'></img> : ''}        
        {props.question ? props.question : ''}
       <div />
      </div>
      <div className='text-xs text-slate-400 row-span-1 flex justify-end'>
        #{props.num}
      </div>
    </div>
  )
};

export default QuestionBox;
