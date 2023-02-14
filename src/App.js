
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import Header from './components/Header';
import Home from './pages/Home';
import Quiz from './pages/Quiz';
import Result from './pages/Result';

function App() {
  return (
    <BrowserRouter>
      <div className="min-h-screen bg-gradient-to-tr from-teal-400 to-sky-400 scrollbar-w-thin">
        <Header/>
        <Routes>
          <Route exact path="/" element={<Home/>} />
          <Route exact path="/quiz" element={<Quiz/>} />
          <Route exact path="/result" element={<Result/>} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
