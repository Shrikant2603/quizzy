
import axios from 'axios';
import { useState } from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import Header from './components/Header';
import Home from './pages/Home';
import Quiz from './pages/Quiz';
import Result from './pages/Result';

function App() {

  const [questions, setQuestions] = useState();
  const [name, setName] = useState();
  const [score, setScore] = useState(0);

  const fetchQuestions = async (category = "", difficulty = "") => {
    const { data } = await axios.get(
      `https://opentdb.com/api.php?amount=10${
        category && `&category=${category}`
      }${difficulty && `&difficulty=${difficulty}`}&type=multiple`
    );

    setQuestions(data.results);
  };

  return (
    <BrowserRouter>
      <div className="min-h-screen bg-gradient-to-tr from-teal-400 to-sky-400 scrollbar-w-thin">
        <Header/>
        <Routes>
          <Route exact path="/" element={
          <Home 
              name={name}
              setName={setName}
              fetchQuestions={fetchQuestions}
          />}/>
          <Route exact path="/quiz" element={
          <Quiz
              name={name}
              questions={questions}
              score={score}
              setScore={setScore}
              setQuestions={setQuestions}
          />} />
          <Route exact path="/result" element={
          <Result
            name={name}
            score={score}
          />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
