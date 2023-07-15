import React, { useState } from 'react';
import { Button } from 'react-bootstrap';
import AlertDismissible from './AlertDismissible';

const ButtonWithCount = ({ title }) => {
  const [count, setCount] = useState(0);

  const handleButtonClick = () => {
    setCount(() => count + 1);
  };

  return (
    <div>
      <Button variant="danger" onClick={handleButtonClick}>
        {title}
      </Button>
      <p>Count: {count}</p>
      <AlertDismissible buttonName={title} />s{' '}
    </div>
  );
};

export default ButtonWithCount;
