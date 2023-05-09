import {useState} from "react"
import ReactQuill from "react-quill"
import 'react-quill/dist/quill.snow.css'


const ResponseBox = (props) => {
  return (
    <div>
      <ReactQuill
        theme='snow'
        value={props.response}
        onChange={props.setResponse}
        style={{minHeight: '300px'}}
      />      
    </div>
  )
};

export default ResponseBox;

