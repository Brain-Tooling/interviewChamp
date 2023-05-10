import React from "react"
import editIcon from './../assets/edit-svgrepo-com.svg'
import { Link } from "react-router-dom";
import { QuestionResponseCardProps } from "../../types/interfaces";
import ReactQuill from "react-quill"
import 'react-quill/dist/quill.bubble.css'

const QuestionResponseCard = (props:QuestionResponseCardProps) => {
  return (
    <div className='max-w-sm rounded overflow-hidden shadow-lg p-4 grid grid-rows-4 bg-gradient-to-t from-yellow-300 to-yellow-200'>
      <div className='row-span-1 font-bold text-l mb-2'>{props.question}</div>
      <div className='row-span-2 text-sm'>
        <ReactQuill
          theme='bubble'
          value={props.response}
          readOnly={true}
          modules={{toolbar:[]}}
          />  
      </div>
      
      <div className='row-span-1'>
        <span className="bottom-0 my-4 inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">{'#' + props.type}</span>
      </div>
    </div>
  )
};

export default QuestionResponseCard;
