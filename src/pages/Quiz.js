import { CircularProgress } from '@mui/material';
import React, { useEffect, useState } from 'react'
import { Questions } from '../components/Questions';

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
        <span className='text-2xl p-5 text-[#426696]'>
            Welcome, <span className='font-bold'>{name}</span>
        </span>
        {questions ? (
        <>
            <div className="w-full flex place-content-between capitalize m-5 px-8 lg:px-16 lg:text-2xl text-lg text-[#426696] ">
                <span>{questions[currQues].category}</span>
                <span className='font-bold'>
                {/* {questions[currQues].difficulty} */}
                Score : {score}
            </span>
            </div>
            <Questions
                currQues={currQues}
                setCurrQues={setCurrQues}
                questions={questions}
                options={options}
                correct={questions[currQues]?.correct_answer}
                score={score}
                setScore={setScore}
                setQuestions={setQuestions}
            />
        </>
        ) : (
        <CircularProgress
            style={{ margin: 100 }}
            color="inherit"
            size={150}
            thickness={1}
            sx={{
              color: '#426696'
            }}
        />
        )}
    </div>
  )
}

export default Quiz