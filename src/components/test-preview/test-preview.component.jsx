import React from "react";
import { withRouter } from "react-router-dom";


import "./test-preview.styles.scss";

const TestPreview = (props) => {
  return (
    <div className="tests">
      <div
        className="collection-item"
        onClick = {props.click}
        // onClick={() => (props.questions.map((el) => (console.log(el.question))))}
        // onClick={() => props.history.push(`${props.match.url}${props.route}`)}
      >
        <p className="title">Тест по: {props.title}</p>
        <p className="questions">Брой въпроси: {props.questions.length}</p>
        <span className="times-completed">
          {props.timesCompleted} пъти е решаван
        </span>
        <p className="author-name">
          Автор: <i>{props.authorName}</i>
        </p>
      </div>
    </div>
  );
};

export default withRouter(TestPreview);
