// import React, { Component } from "react";

// class TestQuestions extends Component {
//   // state = [
//   //   {
//   //     testId: 1,
//   //     question1: "Напишете куче на английски",
//   //     question2: "Напишете котка на английски",
//   //     question3: "Напишете паяк на английски",
//   //   },
//   //   {
//   //     testId: 2,
//   //     question1: "Напишете kuche на английски",
//   //     question3: "Напишете koptka на английски",
//   //     question2: "Напишете paqk на английски",
//   //   },
//   //   {
//   //     testId: 3,
//   //     question1: "Напишете asd на английски",
//   //     question2: "Напишете dsa на английски",
//   //     question3: "Напишете sad на английски",
//   //   },
//   // ];

//   render() {
//     let tests = this.state.map((q) => (
//       <div className="questions">
//         <p className={q.question1}>{q.question1}</p>
//         <input type="text"></input>
//       </div>
//     ));
//     return <div>{tests}</div>;
//   }
// }
// export default TestQuestions;


import React from 'react';
import TestItem from '../test-item/test-item.component';

const TestQuestions =(props) =>(
  <TestItem 
     questions={this.props.test.questions}
  />
)
export default TestQuestions;