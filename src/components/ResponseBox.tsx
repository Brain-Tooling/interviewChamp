import React from "react"
import ReactQuill from "react-quill"
import 'react-quill/dist/quill.snow.css'
import { ResponseBoxProps } from "../../types/interfaces";



const ResponseBox = (props: ResponseBoxProps) => {

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
    fetch('http://localhost:5001/qr/storeResponse', {
      method: 'POST',
      headers: {
        'content-type': 'application/json'
      },
      body: JSON.stringify({
        'user_id': 2, 
        'question_id':props.curQuestion, 
        'response_content':props.responses[props.curQuestion]
      })
    })
    .then(result => result.json())
    //.then(data => tbd)
  }

  const setResponse = (response:string) => {
    if (props.curQuestion != undefined && response != '<p><br></p>') {
      const newResponses = Object.assign(props.responses);
      newResponses[props.curQuestion] = response;
      props.setResponses(newResponses);
    }
  }

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
        <button 
          className='mt-2 px-3 py-2 text-white bg-blue-500 rounded-lg shadow-sm hover:bg-blue-400 focus:outline-none focus:ring-1 focus:ring-blue-500 focus:ring-offset-1 sm:text-sm'
          onClick={submit}>Submit</button>      
      </div>
    </div>
  )
};

export default ResponseBox;

