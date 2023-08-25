import React, { useContext } from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import dogimage from '../src/media/Dog-image.png';
import ButtonWithCount from './components/ButtonWithCount';
import Badge from 'react-bootstrap/Badge';
import { FormattedMessage, IntlProvider } from 'react-intl';
import LanguageDropdown from './components/LanguageDropdown';
import { LocalContext } from './components/wrapper';
import messages_en_us from './translations/en-US.json';
import messages_zh_hk from './translations/zh-hk.json';
import Navbar from './components/Navbar';


export default function App() {
  const title = 'Dog Page';
  const { locale } = useContext(LocalContext);
  let lang;
  if (locale.toLocaleLowerCase() === 'en-us') {
    lang = messages_en_us;
  } else {
    lang = messages_zh_hk;
  }

  return (<IntlProvider messages={lang} locale={locale}>
    <Navbar />
      <div className="App">
        <h1>
          <FormattedMessage id="title" defaultMessage="Dog Page" />
        </h1>
        <p>
          Click here to view more{''}
          <a href="https://www.pexels.com/search/dog/"> dog photos</a>.
        </p>
        <img src={dogimage} alt="cute dog is taking a rest"></img>
        <p>
          <FormattedMessage id="dlove" defaultMessage="Things dogs love" />
        </p>
        <h1>
          Example heading <Badge bg="secondary">Hello</Badge>
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
    </IntlProvider>
  );
}

