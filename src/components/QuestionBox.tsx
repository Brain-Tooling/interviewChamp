import React from "react"

const QuestionBox = (props) => {


  return (
    <div>
      {props.question ? props.question : <div />}
    </div>
  )
};

export default QuestionBox;
