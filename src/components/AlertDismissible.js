import { useState } from 'react';
import Alert from 'react-bootstrap/Alert';
import Button from 'react-bootstrap/Button';
import { FormattedMessage } from 'react-intl';

function AlertDismissible({}) {
  const [show, setShow] = useState(false);

  const handleShow = () => {
    setShow(true);
  };

  if (show) {
    return (
      <Alert variant="danger" onClose={() => setShow(false)} dismissible>
        <Alert.Heading><FormattedMessage id= 'AlertHead'/></Alert.Heading>
        <p>
          <FormattedMessage id = "SpecialError"/>
        </p>
      </Alert>
    );
  }
  return <Button onClick={handleShow}><FormattedMessage id='Press'/></Button>;
}

export default AlertDismissible;