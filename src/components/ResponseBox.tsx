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

  const setResponse = (response:string) => {
    if (props.curQuestion != undefined && response != '<p><br></p>') {
      const newResponses = Object.assign(props.responses);
      newResponses[props.curQuestion] = response;
      props.setResponses(newResponses);
      fetch('http://localhost:5001/qr/storeResponse', {
        method: 'POST',
        headers: {
          'content-type': 'application/json'
        },
        body: JSON.stringify({
          'user_id': 2, 
          'question_id':props.curQuestion, 
          'response_content':response
        })
      })
      .then(result => result.json())
      .then(data => console.log(data))
    }
  }

  return (
    <div className='row-span-3'>
      <ReactQuill
        theme='snow'
        value={props.responses[props.curQuestion]}
        onChange={setResponse}
        style={{minHeight: '300px'}}
        modules={modules}
        formats={formats}
      />      
    </div>
  )
};

export default ResponseBox;

