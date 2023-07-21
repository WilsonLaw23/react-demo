import React, { useState, useContext } from 'react';
import 'bootstrap/js/dist/dropdown';
import { Context } from './wrapper';

const LanguageDropdown = ({ title }) => {
  const [local, setLocal] = useState('en_us');

  const handleSelect = (selectedLocal) => {
    setLocal(selectedLocal);
  };

  const currentLang = `this page is in ${local}`;
  const Context = useContext(Context);

  return (
    <div className="dropdown">
      <div>{currentLang}</div>
      <button
        className="btn btn-secondary dropdown-toggle"
        type="button"
        data-bs-toggle="dropdown"
        aria-expanded="false"
      >
        {local}
      </button>

      <ul className="dropdown-menu">
        <li>
          <button
            className={`dropdown-item ${local === 'en_us' ? 'active' : ''}`}
            type="button"
            onClick={() => handleSelect('en_us')}
          >
            en-us
          </button>
        </li>
        <li>
          <button
            className={`dropdown-item ${local === '中文' ? 'active' : ''}`}
            type="button"
            onClick={() => handleSelect('中文')}
          >
            中文
          </button>
        </li>
      </ul>
    </div>
  );
};

export default LanguageDropdown;
