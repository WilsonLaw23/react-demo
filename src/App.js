import React from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/js/dist/dropdown';

import dogimage from '../src/assets/dog-image.png';
import ButtonWithCount from './components/ButtonWithCount';
import Badge from 'react-bootstrap/Badge';
import { FormattedMessage } from 'react-intl';

export default function App() {
  const title = 'Dog Page';
  const love = 'Things dogs love';
  const hate = 'Things dogs hate';
  return (
    <div className="App">
      <h1>{title}</h1>
      <p>
        Click here to view more{''}
        <a href="https://www.pexels.com/search/dog/"> dog photos</a>.
      </p>
      <img src={dogimage} alt="cute dog is taking a rest"></img>
      <p>{love}:</p>
      <h1>
        Example heading <Badge bg="secondary">Hello</Badge>
      </h1>
      <ul>
        <li>Treats</li>
        <li>Exercise</li>
        <li>Playtime</li>
      </ul>
      <p>{hate}:</p>
      <ol>
        <li>Loud Noise</li>
        <li>Abandon</li>
        <li>Punishment</li>
      </ol>
      <div class="dropdown">
        <button
          class="btn btn-secondary dropdown-toggle"
          type="button"
          data-bs-toggle="dropdown"
          aria-expanded="false"
        >
          <FormattedMessage id="description" />
        </button>
        <ul class="dropdown-menu">
          <li>
            <button class="dropdown-item" type="button">
              en-us
            </button>
          </li>
          <li>
            <button class="dropdown-item" type="button">
              chinese
            </button>
          </li>
        </ul>
      </div>
      <ButtonWithCount title={title} />
    </div>
  );
}
