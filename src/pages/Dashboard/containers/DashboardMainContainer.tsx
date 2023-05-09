import React, {useState, useEffect} from "react"
import QuestionBox from "../../../components/QuestionBox";
import ResponseBox from "../../../components/ResponseBox";
import LeftArrow from '../../../assets/arrow-left-svgrepo-com.svg'
import RightArrow from '../../../assets/arrow-right-svgrepo-com.svg'
import { DashboardProps } from "../../../../types/interfaces";

const DashboardMainContainer = (props:DashboardProps) => {
  
  const toggleQuestion = (right:boolean) => {
    const dir = right ? 1 : -1;
    const keys = Object.keys(props.questions).sort();
    let idx = keys.findIndex((s) => { return parseInt(s) == parseInt(props.curQuestion + ''); });
    if (idx != undefined) {
      if (idx + dir >= keys.length) idx = -1;
      else if (idx + dir < 0) idx = keys.length; 
      props.setCurQuestion(parseInt(keys[idx + dir]));
    }
    else {
      props.setCurQuestion(parseInt(keys[0]));
    }
  }

  useEffect(() => {
    console.log('cur question has changed', props.curQuestion)
  }, [props.curQuestion]);


  return (
    <div className="p-4 sm:ml-64">
      <div className='p-4 border-2 border-gray-200 border-dashed rounded-lg
         dark:border-gray-700 grid grid-cols-8 gap-4'>
        <div>
          <button className="px-3 py-2 text-white bg-blue-500 rounded-lg shadow-sm hover:bg-blue-400 focus:outline-none focus:ring-1 focus:ring-blue-500 focus:ring-offset-1 sm:text-sm"
            onClick={() => {toggleQuestion(false)}}>
            <img src={LeftArrow} width='8em'></img>
          </button>
        </div>
        <div className='col-span-6'>
          <QuestionBox question={props.questions[props.curQuestion]}/>
          <ResponseBox responses={props.responses} curQuestion={props.curQuestion} setResponses={props.setResponses}/>
        </div>
        <div>
          <button className='px-3 py-2 text-white bg-blue-500 rounded-lg shadow-sm hover:bg-blue-400 focus:outline-none focus:ring-1 focus:ring-blue-500 focus:ring-offset-1 sm:text-sm'
            onClick={() => {toggleQuestion(true)}}>
            <img src={RightArrow} width='8em'></img>
          </button>
        </div>
      </div>
    </div>
 
  )
};

export default DashboardMainContainer;
