import React, { useState } from "react";
import QuestionForm from "./components/QuestionForm";
import QuestionList from "./components/QuestionList";
import loadingAnimation from "./assets/loading-spinner.json";
import { Player } from "@lottiefiles/react-lottie-player";
import ParticlesBackground from "./components/ParticlesBackground";
import "./App.css";

const App = () => {
  const [questions, setQuestions] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  const handleQuestionsGenerated = (newQuestions) => {
    setQuestions(newQuestions);
  };

  return (
    <div className="app-container">
      {/* Interactive particle background */}
      <ParticlesBackground />

      <h1>Technical Interview Question Generator</h1>

      {/* Loading spinner */}
      {isLoading && (
        <div className="spinner-container">
          <Player
            autoplay
            loop
            src={loadingAnimation}
            style={{ height: "120px", width: "120px" }}
          />
        </div>
      )}

      {/* Form to generate questions */}
      <QuestionForm
        onQuestionsGenerated={handleQuestionsGenerated}
        setLoading={setIsLoading}
      />

      {/* Render questions if available */}
      {questions.length > 0 && (
        <div className="question-container">
          <QuestionList questions={questions} />
        </div>
      )}
    </div>
  );
};

export default App;
