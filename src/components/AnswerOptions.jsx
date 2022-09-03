import React from 'react';
import { AiOutlinePlus } from 'react-icons/ai';

function AnswerOptions() {
  return (
    <>
    
    <div className='mt-5 flex justify-start items-center flex-col'>
      <div className='flex justify-start mt-4 items-center'>
        <input className='mr-4' type="radio" name="radio" checked />
        <p>answer</p>
      </div>
      <div className='flex justify-start mt-4 items-center'>
        <input className='mr-4' type="radio" name="radio" checked />
        <p>answer</p>
      </div>
    </div>

      <a href='##' className='flex justify-end'>
        <AiOutlinePlus />
      </a>

      <button className='mt-10 w-full bg-cyan-600'>Create poll</button>
    </>

  );
}

export default AnswerOptions;