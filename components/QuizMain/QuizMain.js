import React, { Component } from "react";
import classes from "./QuizMain.module.css";
import Answer from "../Answer/Answer";
import Question from "../Question/Question";

export default class Quiz extends Component {
  // initiating the local state
  state = {
    quiestions: {
      1: "Which is the missing line?",
      2: "Which one of these is a JavaScript package manager?",
      3: "The lifecycle methods are mainly used for ___ ?",
    },
    example_optional: {
      1: `item.addEventListener('click', () => {
          console.log(item.getAttribute('payload'));
        });`,
    },
    answers: {
      1: {
        A: "const item = document.querySelector('.item')",
        B: "const item = document",
        C: "const item = payload",
        D: "None of the above",
      },
      2: {
        A: "Node.js",
        B: "TypeScript",
        C: "npm",
        D: "None of the above",
      },
      3: {
        A: "keeping track of event history",
        B: "enhancing components",
        C: "freeing up resources",
        D: "None of the above",
      },
    },
    correctAnswers: {
      1: "1",
      2: "3",
      3: "3",
    },
    correctAnswer: 0,
    clickedAnswer: 0,
    step: 1,
    score: 0,
    progressbar: 0,
  };

  // the method that checks the correct answer
  checkAnswer = (answer) => {
    const { correctAnswers, step, score } = this.state;
    if (answer === correctAnswers[step]) {
      this.setState({
        score: score + 1,
        correctAnswer: correctAnswers[step],
        clickedAnswer: answer,
      });
    } else {
      this.setState({
        correctAnswer: 0,
        clickedAnswer: answer,
      });
    }
  };

  // method to move to the next question
  nextStep = (step) => {
    this.setState({
      step: step + 1,
      correctAnswer: 0,
      clickedAnswer: 0,
    //   progressbar:
    //     progressbar +
    //     100 / (Object.keys(this.state.quiestions).length / this.state.step),
    });
    console.log(
      100 / (Object.keys(this.state.quiestions).length / this.state.step)
    );
  };

  render() {

    let {quiestions, answers, example_optional, correctAnswer, clickedAnswer, step, score, progressbar} = this.state;

    // added dynamic Progressbar style
    let styleProgressbarFull = {
      height: "1rem",
      backgroundColor: "red",
      width: `${progressbar}` + "%",
    };

    return (
      <form>
        <div>
          {step <= Object.keys(quiestions).length ? (
            <>
              <div className={classes.Progressbar}>
                <div style={styleProgressbarFull} />
              </div>
              <Question question={quiestions[step]} />
                {example_optional=example_optional[step] != null
              ? (
                  <>
                  <code>{this.state.example_optional[step]}</code>
                  </>)
              : ""}
              <Answer
                answer={answers[step]}
                step={step}
                checkAnswer={this.checkAnswer}
                correctAnswer={correctAnswer}
                clickedAnswer={clickedAnswer}
              />
              <button
                className={classes.NextStep}
                disabled={
                  clickedAnswer && Object.keys(quiestions).length >= step
                    ? false
                    : true
                }
                onClick={() => this.nextStep(step)}
              >
                Next
              </button>
            </>
          ) : (
            <div className={classes.FinalMessage}>
              <h1>You have completed the quiz!</h1>
              <p>
                Your score is: {score} of {Object.keys(quiestions).length}
              </p>
              <p>Thank you!</p>
            </div>
          )}
        </div>
      </form>
    );
  }
}
