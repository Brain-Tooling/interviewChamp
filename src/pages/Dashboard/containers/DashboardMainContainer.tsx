import React, {useState, useEffect} from "react"
import QuestionBox from "../../../components/QuestionBox";
import ResponseBox from "../../../components/ResponseBox";
import LeftArrow from '../../../assets/arrow-left-svgrepo-com.svg'
import RightArrow from '../../../assets/arrow-right-svgrepo-com.svg'
import { DashboardProps } from "../../../../types/interfaces";
import { Link } from 'react-router-dom';

const DashboardMainContainer = (props:DashboardProps) => {
  
  const toggleQuestion = (right:boolean) => {
    props.setAiGeneratedResponse('');
    const dir = right ? 1 : -1;
    const keys = Object.keys(props.questions).sort((a, b) => parseInt(a) - parseInt(b));
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
    //What do we do when current question changes?
  }, [props.curQuestion]);

  if (props.curQuestion < 0) {
    
    toggleQuestion(true);
  }

  return (
    <div className="p-4 sm:ml-64">
      <div className='flex justify-end'>
        <Link to="/myresponses">
          <button className="px-3 py-2 text-white bg-gray-500 rounded-lg shadow-sm hover:bg-blue-400 focus:outline-none focus:ring-1 focus:ring-blue-500 focus:ring-offset-1 sm:text-sm"
           >
           Responses
          </button>
        </Link>
      </div>
      <div className='p-4 rounded-lg
         dark:border-gray-700 grid grid-cols-8 gap-4'>
        <div className='flex flex-col items-center'>
          <button className="px-3 py-2 text-white bg-blue-500 rounded-lg shadow-sm hover:bg-blue-400 focus:outline-none focus:ring-1 focus:ring-blue-500 focus:ring-offset-1 sm:text-sm"
            onClick={() => {toggleQuestion(false)}}>
            <img src={LeftArrow} width='8em'></img>
          </button>
        </div>
        <div className='col-span-6 rounded overflow-hidden shadow-lg p-4 grid grid-rows-4'>
          <QuestionBox question={props.questions ? props.questions[props.curQuestion]: ''} num={props.curQuestion} answered={props.responses[props.curQuestion] ? true : false}/>
          <ResponseBox responses={props.responses} curQuestion={props.curQuestion} 
                      setResponses={props.setResponses} next={toggleQuestion} 
                      question={props.questions ? props.questions[props.curQuestion]: ''}
                      aiGeneratedResponse={props.aiGeneratedResponse}
                      setAiGeneratedResponse={props.setAiGeneratedResponse}
                      />
        </div>
        <div className='flex flex-col items-center'>
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
