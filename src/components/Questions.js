import { Button } from '@mui/material'
import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom';
import ErrorMessage from './ErrorMessage';
import DOMPurify from 'dompurify';


export const Questions = ({
    currQues,
    setCurrQues,
    questions,
    options,
    correct,
    setScore,
    score,
    setQuestions,
}) => {

  

    const [selected, setSelected] = useState();
    const [error, setError] = useState(false);

    const navigate = useNavigate();

    const handleSelect = (i) => {
        if (selected === i && selected === correct) return "bg-green-500 text-white shadow-sm";
        else if (selected === i && selected !== correct) return "bg-red-600 text-white shadow-sm";
        else if (i === correct) return "bg-green-500 text-white shadow-sm";
      };
    
      const handleCheck = (i) => {
        setSelected(i);
        if (i === correct) setScore(score + 1);
        setError(false);
      };
    
      const handleNext = () => {
        if (currQues > 8) {
            navigate("/result");
        } else if (selected) {
          setCurrQues(currQues + 1);
          setSelected();
        } else setError("Please select an option first");
      };
    
      const handleQuit = () => {
        setCurrQues(0);
        setQuestions();
      };

      const sanitizedQuestion = DOMPurify.sanitize(questions[currQues].question);

  return (
    <div className="w-full flex flex-col items-center text-[#426696]">
      <h1>Question {currQues + 1} :</h1>

      <div className="w-11/12 lg:w-9/12 min-h-fit flex flex-col items-center justify-around  border-grey lg:p-32 p-5  my-2.5    bg-gradient-to-br from-slate-100/70 to-slate-100/30 rounded-3xl z-2 backdrop-blur-md text-[#426696]">
      <h2 dangerouslySetInnerHTML={{ __html: sanitizedQuestion }} />
        <div className="w-full flex flex-wrap flex-1 items-center justify-around m-2.5 text-[#426696]">
          {error && <ErrorMessage>{error}</ErrorMessage>}
          {options &&
            options.map((i) => (
              <button
                className={`lg:w-5/12 h-12 px-4  w-full m-2.5 shadow-lg border-t-2 rounded-md  ${selected && handleSelect(i)}`}
                key={i}
                onClick={() => handleCheck(i)}
                disabled={selected}
              >
                {i}
              </button>
            ))}
        </div>
        <div className="flex lg:w-3/5 w-3/5 lg:justify-around justify-between lg:mt-10">
          <Button
            variant="contained"
            size="large"
            sx={{
              backgroundColor: "#426696",
              '&:hover': {
                backgroundColor: '#255270',
                transform: 'scale(1.1)',
              },
            }}
            href="/"
            onClick={() => handleQuit()}
            className="w-20 lg:w-72"
          >
            Quit
          </Button>
          <Button
            variant="contained"
            sx={{
              backgroundColor: "#426696",
              '&:hover': {
                backgroundColor: '#255270',
                transform: 'scale(1.1)',
              },
            }}
            size="large"
            onClick={handleNext}
            className="w-20 lg:w-72"
          >
            {currQues > 20 ? "Submit" : "Next"}
          </Button>
        </div>
      </div>
    </div>
  )
}
