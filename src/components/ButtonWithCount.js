import React, { useState } from 'react';

const ButtonWithCount = () => {
  const [count, setCount] = useState(0);

  const handleButtonClick = () => {
    setCount(() => count + 1);
  };

  return (
    <div>
      <button onClick={handleButtonClick}>Click me</button>
      <p>Count: {count}</p>
    </div>
  );
};

export default ButtonWithCount;
