import React,{useState, useEffect} from "react"
import NavBar from "./../../components/NavBar.tsx"
import DashboardMainContainer from './containers/DashboardMainContainer.tsx'

const prepQuestions:object = (questionsFromDB:string[]) => {
  const result:object = {};
  for (const o in questionsFromDB) {
    result[questionsFromDB[o].id] = questionsFromDB[o].question_content;
  }
  return result;
}

const prepResponses:object = (responsesFromDB:string[]) => {
  const result = {}
  for (const o in responsesFromDB) {
    result[responsesFromDB[o].question_id] = responsesFromDB[o].response_content;
  }
  return result;
}

const navBarTypes = ['React', 'Redux', 'Node']

const Dashboard: React.FC = () => {
  const [questions, setQuestions] = useState(); 
  const [curQuestion, setCurQuestion] = useState(0);
  const [responses, setResponses] = useState({});
  const [questionTypes, setQuestionTypes] = useState(navBarTypes);
  const [curType, setCurType] = useState(questionTypes[0] ? questionTypes[0] : undefined)

  

  useEffect( () => {
    fetch('qr/getQuestions/' + curType)
    .then(response => response.json())
    .then(data => {
      //TODO: update questions
      setQuestions(prepQuestions(data));
      setCurQuestion(-1);
    })

    let userID=2;   //TODO: use real userID

    fetch('qr/getResponses/' + userID + '/' + curType)
    .then(result => result.json())
    .then(data => {
      setResponses(prepResponses(data));
    })
  }, [curType])

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
