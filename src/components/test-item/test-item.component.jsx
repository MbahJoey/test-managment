import React from "react";

import "./test-item.styles.scss";

const TestItem = (props) => 
  props.show ? (
    <div className="item" >
    <h1 >{props.title}</h1>
    <span>от {props.authorName}</span>
    <p>Timer(yet to be implemented)</p>
      {props.questions.map(({ type, question , testId}) => (
        <form key={testId} >
          <p className="question">{question}</p>
          <input type={type} />
        </form>
      ))}
      <button type="submit">Готов съм!!!</button>
    </div>
) : null

export default TestItem;
