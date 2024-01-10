
import React, { useState } from 'react';
import { GoPlusCircle } from 'react-icons/go';
import { AiOutlineMinusCircle } from 'react-icons/ai';

const CountInput = () => {
  const [count, setCount] = useState(0);

  const handleIncrement = () => {
    setCount(count + 1);
  };

  const handleDecrement = () => {
    if (count > 0) {
      setCount(count - 1);
    }
  };

  const handleInputChange = (e) => {
    const inputValue = parseInt(e.target.value, 10);
    if (!isNaN(inputValue)) {
      setCount(inputValue);
    }
  };

  return (
    <div style={{ borderRadius: 22, height: '20%', display: 'flex', backgroundColor: '#80CBC4', justifyContent: 'center', alignItems: 'center', flexDirection: 'row', border: 2, borderColor: 'black', padding: 7 }}>

      <button onClick={handleDecrement}>
        <AiOutlineMinusCircle color={'#f5f5f5'} size={25} />
      </button>

      <input
        type="text"
        value={count}
        onChange={handleInputChange}
        style={{ color: 'black', width: '50px', backgroundColor: '#80CBC4', border: 10, borderRadius: 8, borderColor: '#80CBC4' }}
      />

      <button onClick={handleIncrement}>
        <GoPlusCircle color={'#f5f5f5'} size={25} />
      </button>

    </div>
  );
};

export default CountInput;