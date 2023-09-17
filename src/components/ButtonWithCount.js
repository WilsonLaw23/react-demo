import React, { useState } from 'react';
import { Button } from 'react-bootstrap';
import AlertDismissible from './AlertDismissible';
import { FormattedMessage } from 'react-intl';

const ButtonWithCount = ({ title }) => {
  const [count, setCount] = useState(0);

  const handleButtonClick = () => {
    setCount(() => count + 1);
  };

  return (
    <div>
      <Button variant="danger" onClick={handleButtonClick}>
        <FormattedMessage id = "Press"/>
      </Button>
      <p><FormattedMessage id='Count'/> {count}</p>
      <AlertDismissible />
    </div>
  );
};

export default ButtonWithCount;
