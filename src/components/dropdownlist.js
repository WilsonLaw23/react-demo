import React, { useState } from 'react';
import 'bootstrap/js/dist/dropdown';

const LanguageDropdown = ({ title }) => {
  const [local, setLocal] = useState('en_us');

  const handleSelect = (selectedLocal) => {
    setLocal(selectedLocal);
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
            className={`dropdown-item ${local === 'en_us' ? 'active' : ''}`}
            type="button"
            onClick={() => handleSelect('English')}
          >
            English
          </button>
        </li>
        <li>
          <button
            className={`dropdown-item ${local === 'chinese' ? 'active' : ''}`}
            type="button"
            onClick={() => handleSelect('繁體中文')}
          >
            繁體中文
          </button>
        </li>
      </ul>
    </div>
  );
};

export default LanguageDropdown;
