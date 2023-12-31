import '../App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import ButtonWithCount from '../components/ButtonWithCount';
import Badge from 'react-bootstrap/Badge';
import { FormattedMessage } from 'react-intl';

export default function Home() {
  const title = 'Dog Page'

  return (

      <div className="Home">
        <h1>
          <FormattedMessage id="title" defaultMessage="Dog Page" />
        </h1>
        <p>
          <FormattedMessage id="dlove" defaultMessage="Things dogs love" />
        </p>
        <h1>
        <FormattedMessage id= "example"/> <Badge bg="secondary"><FormattedMessage id= "hello"/></Badge>
        </h1>
        <ul>
          <li>
            <FormattedMessage id="l1" defaultMessage="Treats" />
          </li>
          <li>
            <FormattedMessage id="l2" defaultMessage="Exercise" />
          </li>
          <li>
            <FormattedMessage id="l3" defaultMessage="Playtime" />
          </li>
        </ul>
        <p>
          <FormattedMessage id="dhate" defaultMessage="Things dogs hate" />
        </p>
        <ol>
          <li>
            <FormattedMessage id="h1" defaultMessage="Loud Noise" />
          </li>
          <li>
            <FormattedMessage id="h2" defaultMessage="Abandon" />
          </li>
          <li>
            <FormattedMessage id="h3" defaultMessage="Punishment" />
          </li>
        </ol>
        <ButtonWithCount title={title} />
      </div>
  );
}

