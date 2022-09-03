import React, {useState, useEffect} from "react";
import AnswerOptions from "./AnswerOptions";

function PollForm() {
  const [questions, setQuestions] = useState({question: ""});
  const [validation, setValidation] = useState({question: ""});


  function handleChange(event) {
    const { name, value } = event.target;
    setQuestions({ ...questions, [name]: value });
  }

  const checkValidation = () => {
    let errors = JSON.parse(JSON.stringify(validation));

    //question validation
    if (!questions.question.trim()) {
      errors.question = 'Question is required';
    } else {
      errors.question = '';
    }
    setValidation(errors);
  }

  useEffect(() => {
    checkValidation();
    // eslint-disable-next-line
  }, [questions]);

  const handleSubmit = event => {
    event.preventDefault();
  }
  
  return (
    <div>
      <form onSubmit={handleSubmit} className="flex flex-col justify-center">
        
        <input 
          className="p-2 w-full" 
          type="text" 
          name="question"
          onChange={(event) => handleChange(event)}
          placeholder="Type your question here" 
          value={questions.question} 
        />
        {validation.question && <p>{validation.question}</p>}
        {validation.question && console.log(validation)}
        <AnswerOptions />
        
        <button type="submit" className='mt-10 p-2 text-white w-full bg-cyan-600'>Create poll</button>

      </form>
    </div>
  );
}

export default PollForm;
