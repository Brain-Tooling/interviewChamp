import React,{useState} from "react"
import QuestionResponseCard from "../../components/QuestionResponseCard";
import { Link } from "react-router-dom";
import NavBar from "../../components/NavBar";

const mockResponses = [
  {id: 0, type: 'React', question: 'What are the features of React?', response: 'React is a popular JavaScript library used for building user interfaces. '},
  {id: 1, type: 'React', question: 'What is JSX?', response: 'JSX is an extension to JavaScript that allows you to write HTML-like syntax in your JavaScript code. It\'s used to describe the structure and appearance of React components, and it allows you to combine the power of JavaScript with the expressiveness of HTML.'},
  {id: 2, type: 'React', question: 'Can web browsers read JSX directly?', response: 'No, web browsers cannot read JSX directly. JSX must be compiled into plain JavaScript using a build tool like Babel before it can be run in a browser.'},
  {id: 3, type: 'React', question: 'What is the virtual DOM?', response: 'The virtual DOM is a representation of the actual DOM in memory. When you update a React component, instead of directly manipulating the DOM, React creates a new virtual DOM tree and compares it to the previous one. React then updates only the parts of the DOM that have changed, resulting in better performance and fewer unnecessary updates.'},
  {id: 4, type: 'React', question: 'Why use React instead of other frameworks, like Angular?', response: 'React\'s virtual DOM provides faster rendering and improved performance compared to traditional DOM manipulation.'},
  {id: 5, type: 'Redux', question: 'Redux 1', response: ''},
  {id: 6, type: 'Redux', question: 'Redux 2', response: ''},
  {id: 7, type: 'Redux', question: 'Redux 3', response: ''},
  {id: 8, type: 'Node', question: 'Node 1', response: ''},
  {id: 9, type: 'Node', question: 'Node 2', response: ''},
  {id: 10, type: 'Node', question: 'Node 3', response: ''}  
]

const questionTypes = [{id: 0,name:'React'},{id: 1,name:'Redux'},{id: 2,name:'Node'}]


const Responses = () => {
  const [filteredType, setFilteredType] = useState('React');

  const handleNavClick = (s) => {
    if (s != filteredType) setFilteredType(s);
    else setFilteredType('');
  }

  const responses = mockResponses;
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
      <div className="p-4 sm:ml-64">
        <div className='flex justify-end'>
          <Link to="/dashboard">
            <button className="px-3 py-2 text-white bg-gray-500 rounded-lg shadow-sm hover:bg-blue-400 focus:outline-none focus:ring-1 focus:ring-blue-500 focus:ring-offset-1 sm:text-sm"
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
