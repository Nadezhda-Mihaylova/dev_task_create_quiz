import React, { Fragment } from "react";
import classes from "./Answer.module.css";

function Answer(props) {
  let answers = Object.keys(props.answer).map((qAnswer, i) => (
    <li
        className=
        {
            props.correctAnswer === qAnswer ?
            'correct' : 
            props.clickedAnswer === qAnswer ? 
            'incorrect' : ''
        }
      onClick={() => props.checkAnswer(qAnswer)}
      key={qAnswer}
    >
      {props.answer[qAnswer]}
    </li>
  ));

  return (
    <Fragment>
      <ol
        disabled={props.clickedAnswer ? true : false}
        className={classes.Answers}
      >
          {answers}
      </ol>
    </Fragment>
  );
}

export default Answer;