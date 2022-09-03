import React from "react";
import PollForm from "./components/Pollform";
import AnswerOptions from "./components/AnswerOptions";

function App() {
  return (
    <div className="w-96 mx-auto mt-10">
      <PollForm />
      <AnswerOptions />
    </div>
  );
}

export default App;
