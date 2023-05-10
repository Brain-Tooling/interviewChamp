import React,{useState} from "react"
import ReactQuill from "react-quill"
import 'react-quill/dist/quill.snow.css'
import { ResponseBoxProps } from "../../types/interfaces";
import Cookies from 'js-cookie';
import copyIcon from '../assets/copy-svgrepo-com.svg'
import upIcon from '../assets/push-up-svgrepo-com.svg'
import loadingIcon from '../assets/Spinner-1s-200px.gif'



const ResponseBox = (props: ResponseBoxProps) => {
  const [inc,setInc] = useState(0);
  const [loading,setLoading] = useState(false);
  

  const modules = {
    toolbar: [
      ['bold', 'italic', 'underline','strike', 'blockquote','code-block'],
      [{'list': 'ordered'}, {'list': 'bullet'}],
      ['link'],
      ['clean']
    ],
  }
  
  const formats = [
    'header',
    'bold', 'italic', 'underline', 'strike', 'blockquote', 'code-block',
    'list', 'bullet', 'indent',
    'link', 'image'
  ]

  const submit = () => {
    const userId = Cookies.get('user');
    if (!userId) {
      console.log('Unable to retrieve user ID; can\'t submit')
      return;
    }

    fetch('http://localhost:5001/qr/storeResponse', {
      method: 'POST',
      headers: {
        'content-type': 'application/json'
      },
      body: JSON.stringify({
        'user_id': userId, 
        'question_id':props.curQuestion, 
        'response_content':props.responses[props.curQuestion]
      })
    })
    .then(result => result.json())
    .then(data => {
      props.next(true);
    })
  }

  const setResponse = (response:string) => {
    if (props.curQuestion != undefined && response != '<p><br></p>') {
      const newResponses = Object.assign(props.responses);
      newResponses[props.curQuestion] = response;
      props.setResponses(newResponses);
      setInc(inc+1);
    }
  }

  const refineResponse = () => {
    if (!props.responses) {
      console.log('Can\'t find any responses to send...')
      return;
    }
    let myResponse = '';
    if (props.responses) myResponse = props.responses[props.curQuestion];
    if (myResponse && myResponse.length) myResponse = myResponse.replace(/<\/?[^>]+(>|$)/g, "");
    setLoading(true);

    fetch('http://localhost:5001/api', {
      method: 'POST',
      headers: {
        'content-type': 'application/json'
      },
      body: JSON.stringify({
        'question': props.question, 
        'answer':myResponse 
      })
    })
    .then(result => result.json())
    .then(data => {
      setLoading(false);
      props.setAiGeneratedResponse(data);
    })

  }

  const aiDiv = 
    props.aiGeneratedResponse ?
    <div>
      <button onClick={() => {setResponse(props.aiGeneratedResponse)}}
        className='mt-2 mr-2 px-1 py-1 text-white bg-slate-500 rounded-lg shadow-sm hover:bg-blue-400 focus:outline-none focus:ring-1 focus:ring-blue-500 focus:ring-offset-1 sm:text-sm>'
        title='Use this answer'>
        <img src={upIcon} width='12px'></img>
      </button>
      <button onClick={() => {navigator.clipboard.writeText(props.aiGeneratedResponse);}}
        className='mt-2 mr-2 px-1 py-1 text-white bg-slate-500 rounded-lg shadow-sm hover:bg-blue-400 focus:outline-none focus:ring-1 focus:ring-blue-500 focus:ring-offset-1 sm:text-sm>'
        title='Copy'>
        <img src={copyIcon} width='12px'></img>
      </button>
      {props.aiGeneratedResponse}
    </div>
    :
    ''

  return (
    <div className='row-span-3'>
      <ReactQuill
        theme='snow'
        value={props.responses ? props.responses[props.curQuestion] : ''}
        onChange={setResponse}
        modules={modules}
        formats={formats}
      />
      <div className='flex justify-end top-0'>
        {loading ? <img src={loadingIcon} width='48px'></img> : <div />}
        <button className='mt-2 ml-2 mr-2 px-3 py-2 text-white bg-slate-500 rounded-lg shadow-sm hover:bg-blue-400 focus:outline-none focus:ring-1 focus:ring-blue-500 focus:ring-offset-1 sm:text-sm'
          onClick={refineResponse}>
          Refine
        </button>
        <button 
          className='mt-2 px-3 py-2 text-white bg-blue-500 rounded-lg shadow-sm hover:bg-blue-400 focus:outline-none focus:ring-1 focus:ring-blue-500 focus:ring-offset-1 sm:text-sm'
          onClick={submit}>Submit</button>      
      </div>
      {aiDiv}
    </div>
  )
};

export default ResponseBox;

