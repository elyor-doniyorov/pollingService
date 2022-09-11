import React from "react";
import { useState } from "react";
// import { AiOutlinePlus } from 'react-icons/ai';

function AnswerOptions() {

  const [serviceList, setServiceList] = useState([
    {service: ''}
  ]);

  const handleServiceAdd = () => {
    setServiceList([...serviceList, {service: ''}])
  }

  const handleServiceRemove = (index) => {
    const list = [...serviceList];
    list.splice(index, 1);
    setServiceList(list);
  }

  return (
    <form className='App' autoComplete='off'>
      <div className='form-field'>
        <label htmlFor='service'>Service(s)</label>
        {serviceList.map((singleService, index) => (
          <div key={index} className='services'>
            <div className='first-division'>
              <input name='service' type="text" id='service' required />
              {serviceList.length - 1 === index && serviceList.length < 4 && 
               (
                 <button 
                  type='button' 
                  className='add-btn'
                  onClick={handleServiceAdd}
                 >
                  <span>Add a Service</span>
                </button>
                )}
            </div>
            <div className='second-division'>
              {serviceList.length > 1 && (
                <button 
                  type='button' 
                  className='remove-btn'
                  onClick={() => handleServiceRemove(index)}
                  >
                  <span>Remove</span>
                </button>
              )}
            </div>
          </div>
        ))}
      </div>
    </form>

  );
}

export default AnswerOptions;