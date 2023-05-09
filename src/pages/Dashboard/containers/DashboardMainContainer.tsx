import {useState} from "react"
import QuestionBox from "../../../components/QuestionBox";
import ResponseBox from "../../../components/ResponseBox";
import LeftArrow from '../../../assets/arrow-left-svgrepo-com.svg'
import RightArrow from '../../../assets/arrow-right-svgrepo-com.svg'

const mockQs = {
  0: 'What are the features of React?',
  1: 'What is JSX?',
  2: 'Can web browsers read JSX directly?',
  3: 'What is the virtual DOM?',
  4: 'Why use React instead of other frameworks, like Angular?',
}

const DashboardMainContainer = (props) => {
  const [questions, setQuestions] = useState(mockQs); //TODO: use real props
  const [curQuestion, setCurQuestion] = useState(0);
  const [responses, setResponses] = useState({0: 'Type response here...'});
  
  const toggleQuestion = (right:boolean) => {
    const dir = right ? 1 : -1;
    const keys = Object.keys(questions).sort();
    console.log(keys)
    console.log('finding index of ' + curQuestion)
    let idx = keys.findIndex((s) => { return parseInt(s) == parseInt(curQuestion + ''); });
    console.log(idx)
    if (idx != undefined) {
      if (idx + dir >= keys.length) idx = -1;
      else if (idx + dir < 0) idx = keys.length; 
      console.log('next question is ' + keys[idx+1] + ':' + questions[keys[idx + dir]])
      setCurQuestion(keys[idx + dir]);
    }
    else {
      console.log('cant find the question; defaulting to start');
      setCurQuestion(keys[0]);
    }
  }

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
          <QuestionBox question={questions[curQuestion]}/>
          <ResponseBox response={responses[curQuestion]} setResponse={setResponses}/>
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
