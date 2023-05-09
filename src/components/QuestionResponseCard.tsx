import React from "react"
import editIcon from './../assets/edit-svgrepo-com.svg'
import { Link } from "react-router-dom";
import { QuestionResponseCardProps } from "../../types/interfaces";

const QuestionResponseCard = (props:QuestionResponseCardProps) => {
  return (
    <div className='max-w-sm rounded overflow-hidden shadow-lg p-4 grid grid-rows-5'>
      <div className='row-span-1 font-bold text-l mb-2'>{props.question}</div>
      <div className='row-span-3 text-sm'>{props.response}</div>
      
      <div className='row-span-1'>
        <span className="bottom-0 my-4 inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">{'#' + props.type}</span>
        <Link to="/dashboard">
          <button className="bottom-0 right-0 inline-block px-3 py-2 text-white bg-blue-500 rounded-lg shadow-sm hover:bg-blue-400 focus:outline-none focus:ring-1 focus:ring-blue-500 focus:ring-offset-1 sm:text-sm"><img src={editIcon} width='12px'></img></button>
        </Link>
      </div>
    </div>
  )
};

export default QuestionResponseCard;
