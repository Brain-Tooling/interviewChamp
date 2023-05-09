import React,{useState, useEffect} from "react"
import NavBar from "./../../components/NavBar.tsx"
import DashboardMainContainer from './containers/DashboardMainContainer.tsx'

const mockReactQs = {
  0: 'What are the features of React?',
  1: 'What is JSX?',
  2: 'Can web browsers read JSX directly?',
  3: 'What is the virtual DOM?',
  4: 'Why use React instead of other frameworks, like Angular?',
}

const mockReduxQs = {
  5: 'Redux 1',
  6: 'Redux 2',
  7: 'Redux 3',
}

const mockNodeQs = {
  8: 'Node 1',
  9: 'Node 2',
  10: 'Node 3',
}

const mockNavBarData = [{id: 0,name:'React'},{id: 1,name:'Redux'},{id: 2,name:'Node'}]


const Dashboard: React.FC = () => {
  const [questions, setQuestions] = useState(mockReactQs); //TODO: use real props
  const [curQuestion, setCurQuestion] = useState(0);
  const [responses, setResponses] = useState({});
  const [questionTypes, setQuestionTypes] = useState(mockNavBarData);
  const [curType, setCurType] = useState(questionTypes[0] ? questionTypes[0] : undefined)

  useEffect( () => {
    if (curType == 'React') setQuestions(mockReactQs);
    else if (curType == 'Redux') setQuestions(mockReduxQs);
    else if (curType == 'Node') setQuestions(mockNodeQs);
    setCurQuestion(-1);
  }, [curType])

  useEffect( () => {
    fetch('qr/getQuestions/React')
    .then(response => response.json())
    .then(data => console.log(data))
  }, [])

  return (
    <div>
      <NavBar navBarData={questionTypes} setCurType={setCurType} />
      <DashboardMainContainer
        questions={questions}
        setQuestions={setQuestions}
        curQuestion={curQuestion}
        setCurQuestion={setCurQuestion}
        responses={responses}
        setResponses={setResponses}
         />
    </div>
  )
};

export default Dashboard;
