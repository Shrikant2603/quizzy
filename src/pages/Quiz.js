import { CircularProgress } from '@mui/material';
import React, { useEffect, useState } from 'react'

const Quiz = ({ name, questions, score, setScore, setQuestions }) => {

    const [options, setOptions] = useState();
    const [currQues, setCurrQues] = useState(0);

    useEffect(() => {
        setOptions(
          questions &&
            handleShuffle([
              questions[currQues]?.correct_answer,
              ...questions[currQues]?.incorrect_answers,
            ])
        );
      }, [currQues, questions]);

    const handleShuffle = (options) => {
        return options.sort(() => Math.random() - 0.5);
    };

  return (
    <div className='flex flex-col items-center font-poppins'>
        <span className='text-2xl p-5'>
            Welcome, {name}
        </span>
        {questions ? (
        <>
            <div className="w-full flex place-content-between capitalize m-5 px-16">
                <span>{questions[currQues].category}</span>
                <span>
                {/* {questions[currQues].difficulty} */}
                Score : {score}
            </span>
            </div>
            {/* <Question
                currQues={currQues}
                setCurrQues={setCurrQues}
                questions={questions}
                options={options}
                correct={questions[currQues]?.correct_answer}
                score={score}
                setScore={setScore}
                setQuestions={setQuestions}
            /> */}
        </>
        ) : (
        <CircularProgress
            style={{ margin: 100 }}
            color="inherit"
            size={150}
            thickness={1}
        />
        )}
    </div>
  )
}

export default Quiz