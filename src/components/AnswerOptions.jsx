import React from 'react';
import { AiOutlinePlus } from 'react-icons/ai';

function AnswerOptions() {
  return (
    <>
    
    <div className='mt-5 flex justify-start items-center flex-col'>
      <div className='flex justify-start mt-4 items-center'>
        <input className='mr-4 p-2 w-64 text-center' type="text" name="answer" placeholder='Type your answer here' />
      </div>
      <div className='flex justify-start mt-4 items-center'>
        <input className='mr-4 p-2 w-64 text-center' type="text" name="answer" placeholder='Type your answer here' />
      </div>
    </div>

      <a href='##' className='flex justify-end'>
        <AiOutlinePlus />
      </a>
    </>

  );
}

export default AnswerOptions;