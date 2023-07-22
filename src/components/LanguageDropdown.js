import React, { useState, useContext } from 'react';
import 'bootstrap/js/dist/dropdown';
import { LocalContext } from './wrapper';

const LanguageDropdown = ({ title }) => {
  const { locale, selectLang } = useContext(LocalContext);

  const [local, setLocal] = useState(locale);

  const handleSelect = (selectedLocal) => {
    setLocal(selectedLocal);
    selectLang(selectedLocal)
  };

  const currentLang = `this page is in ${local}`;

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
            className={`dropdown-item ${local.toLocaleLowerCase() === 'en-us' ? 'active' : ''}`}
            type="button"
            onClick={() => handleSelect('en-us')}
          >
            en-us
          </button>
        </li>
        <li>
          <button
            className={`dropdown-item ${local.toLocaleLowerCase() === 'zh-hk' ? 'active' : ''}`}
            type="button"
            onClick={() => handleSelect('zh-hk')}
          >
            中文
          </button>
        </li>
      </ul>
    </div>
  );
};

export default LanguageDropdown;
