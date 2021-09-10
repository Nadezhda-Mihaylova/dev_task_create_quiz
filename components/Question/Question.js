import React, { Fragment } from 'react';

function Question(props) {
    return (
        <Fragment>
            <h1>{props.question}</h1>
            <section>{props.example_optional}</section>
        </Fragment>
    );
}

export default Question;