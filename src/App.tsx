import "./App.css";
import { useEffect } from "react";
import { Routes, Route } from "react-router-dom";
import { Navbar } from "./components/Navbar";
import QuizCategories from "./components/pages/QuizCategories";
import Error404 from "./components/pages/Error404";
import PlayQuiz from "./components/pages/PlayQuiz";
import { useQuizData } from "./context/QuizDataContext";
// import { quizData } from "./database/quizData";
import { Quiz } from "./database/quizData.types";
import axios from "axios";

function App() {
  const { dispatch } = useQuizData();

  const getQuizs = async () => {
    const res = await axios.get<Quiz>(
      "https://racketquizapi.ankitkarn.repl.co/quizs"
    );
    return res.data;
  };

  getQuizs();

  useEffect(() => {
    (async () => {
      const quizs = await getQuizs();
      dispatch({ type: "SET_CATEGORIES", payload: quizs.category });
    })();
  }, [dispatch]);

  return (
    <div className="App">
      <Navbar />
      <Routes>
        <Route path="/" element={<QuizCategories />} />
        <Route path="/quiz/:quizName" element={<PlayQuiz />} />
        <Route path="*" element={<Error404 />} />
      </Routes>
    </div>
  );
}

export default App;
