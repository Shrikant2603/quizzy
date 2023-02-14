import TextField  from "@mui/material/TextField";
import React, { useState } from "react";
import Categories from "../data/Categories";
import MenuItem from "@mui/material/MenuItem";
import Button from '@mui/material/Button';
import { useNavigate } from "react-router-dom";
import ErrorMessage from "../components/ErrorMessage";

const Home = ({ name, setName,fetchQuestions }) => {

    const [category, setCategory] = useState("");
    const [difficulty, setDifficulty] = useState("");
    const [error, setError] = useState(false);

    const navigate = useNavigate();

    const handleSubmit = () => {
        if (!category || !difficulty || !name) {
        setError(true);
        return;
        } else {
        setError(false);
        fetchQuestions(category, difficulty);
        navigate("/quiz");
        }
    };

  return (
    <div className="flex lg:place-content-around flex-col-reverse lg:flex-row">
      <div className="w-45 p-5 flex flex-col items-center font-poppins font-light ">
        <span className="text-2xl md:text-4xl lg:text-6xl text-[#426696] font-poppins lg:mt-10">
          Quiz settings
        </span>
        <div className="flex flex-col p-5 w-full place-content-evenly flex-basis-0.8">
            {error && <ErrorMessage>Please Fill all the fields</ErrorMessage>}
            <TextField
                style={{ marginBottom: 25 }}
                label="Enter Your Name"
                variant="outlined"
                onChange={(e) => setName(e.target.value)}
            />
            <TextField
                select
                label="Select Category"
                variant="outlined"
                style={{ marginBottom: 30 }}
                value={category}
                onChange={(e) => setCategory(e.target.value)}
            >
            {Categories.map((cat) => (
              <MenuItem
                style={{ backgroundColor: "#426696", color: "white" }}
                key={cat.category}
                value={cat.value}
              >
                {cat.category}
              </MenuItem>
            ))}
            </TextField>
            <TextField
                select
                label="Select Difficulty"
                variant="outlined"
                value={difficulty}
                onChange={(e) => setDifficulty(e.target.value)}
                style={{ marginBottom: 30 }}
            >
                <MenuItem key="Easy" value="easy">
                    Easy
                </MenuItem>
                <MenuItem key="Medium" value="medium">
                    Medium
                </MenuItem>
                <MenuItem key="Hard" value="hard">
                    Hard
                </MenuItem>
            </TextField>
            <Button variant="contained" color="primary" size="large" onClick={handleSubmit}>
                Start Quiz
            </Button>
        </div>
      </div>
      <img
        src={process.env.PUBLIC_URL + "undraw_questions_re_1fy7.svg"}
        alt="Quiz"
        className="m-10 mb-4"
      />
    </div>
  );
};

export default Home;
