import React,{useState, useEffect} from "react"
import QuestionResponseCard from "../../components/QuestionResponseCard";
import { Link } from "react-router-dom";
import NavBar from "../../components/NavBar";
import Cookies from 'js-cookie';

const questionTypes = ['React','Redux','Node']

const Responses = () => {
  const [filteredType, setFilteredType] = useState('React');
  const [responses, setResponses] = useState([])

  useEffect( () => {
    const userID = Cookies.get('user');   
    if (!userID) console.log('Warning: unable to find user id, can\'t show responses...');

    fetch('http://localhost:5001/qr/getResponses/' + userID + '/' + filteredType)
    .then(result => result.json())
    .then(data => {
      const newResponses = [];
      for (let d in data) {
        const r = {};
        r.id = data[d].id;
        r.question = data[d].question_content;
        r.response = data[d].response_content;
        r.type = filteredType;
        newResponses.push(r);
      }
      setResponses(newResponses);
    })
  },[filteredType])

  const handleNavClick = (s) => {
    if (s != filteredType) setFilteredType(s);
    else setFilteredType('');
  }


  const cards:JSX.Element[] = [];
  responses.forEach( (r) => {
    if (filteredType == '' || filteredType == r.type) {
    cards.push(<QuestionResponseCard key={r.id + '|' + Math.random()} 
                                    question={r.question}  
                                    response={r.response}
                                    type={r.type}
                                    />)
    }
  } )

  return (
    <div>
      <NavBar navBarData={questionTypes} setCurType={handleNavClick}/>
      <div className="p-4 sm:ml-64 bg-gradient-to-b from-green-400 to-green-600" >
        <div className='flex justify-end'>
          <Link to="/dashboard">
            <button className="px-3 py-2 text-white bg-gray-500 rounded-lg shadow-sm hover:bg-green-500 focus:outline-none focus:ring-1 focus:ring-green-500 focus:ring-offset-1 sm:text-sm"
            >
            Dashboard
            </button>
          </Link>
        </div>
        <div className='grid grid-cols-3 gap-8 m-4'>
          {cards}
        </div>
      </div>
    </div>
  )
};

export default Responses;
