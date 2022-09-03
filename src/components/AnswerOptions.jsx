import React, {useState, useEffect} from "react";
import { AiOutlinePlus } from 'react-icons/ai';

function AnswerOptions() {
  const [answers, setAnswers] = useState({answer: ""});
  const [validation, setValidation] = useState({answer: ""});

  function handleChange(event) {
    const { name, value } = event.target;
    setAnswers({ ...answers, [name]: value });
  }

  const checkValidation = () => {
    let errors = JSON.parse(JSON.stringify(validation));

    //answer validation
    if (!answers.answer.trim()) {
      errors.answer = 'Answer is required';
    } else {
      errors.answer = '';
    }
    setValidation(errors);
  }

  useEffect(() => {
    checkValidation();
    // eslint-disable-next-line
  }, [answers]);

  const handleSubmit = event => {
    event.preventDefault();
  }

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <div className='mt-5 flex justify-start items-center flex-col'>
          <div className='flex justify-start mt-4 items-center'>
            <input 
              className='mr-4 p-2 w-64 text-center' 
              type="text" 
              name="answer"
              placeholder='Type your answer here' 
              onChange={(event) => handleChange(event)}
              />
          </div>
              {validation.answer && <p>{validation.answer}</p>}
              {validation.answer && console.log(validation)}
          <div className='flex justify-start mt-4 items-center'>
            <input 
              className='mr-4 p-2 w-64 text-center' 
              type="text" 
              name="answer" 
              placeholder='Type your answer here' 
              onChange={(event) => handleChange(event)}
              />
          </div>
              {validation.answer && <p>{validation.answer}</p>}
              {validation.answer && console.log(validation)}
        </div>

        <a href='##' className='flex justify-end'>
          <AiOutlinePlus />
        </a>
      </form>
    </div>

  );
}

export default AnswerOptions;