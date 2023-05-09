import React,{useState} from "react"
import NavBar from "./../../components/NavBar.tsx"
import DashboardMainContainer from './containers/DashboardMainContainer.tsx'

const mockQs = {
  0: 'What are the features of React?',
  1: 'What is JSX?',
  2: 'Can web browsers read JSX directly?',
  3: 'What is the virtual DOM?',
  4: 'Why use React instead of other frameworks, like Angular?',
}

const Dashboard: React.FC = () => {
  const [questions, setQuestions] = useState(mockQs); //TODO: use real props
  const [curQuestion, setCurQuestion] = useState(0);
  const [responses, setResponses] = useState({});

  return (
    <div>
      <NavBar />
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
