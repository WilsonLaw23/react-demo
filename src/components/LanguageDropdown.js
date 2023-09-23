import React, { useContext } from 'react';
import 'bootstrap/js/dist/dropdown';
import { LocalContext } from './LocalContextProvider';
import { FormattedMessage } from 'react-intl'

const LanguageDropdown = ({ title }) => {
  const { locale, selectLang } = useContext(LocalContext);

  const handleSelect = (selectedLocal) => {
    selectLang(selectedLocal);
  };

  return (
    <div className="dropdown">
      <button
        className="btn btn-secondary dropdown-toggle"
        type="button"
        data-bs-toggle="dropdown"
        aria-expanded="false"
        data-testid="language-dropdown"
      >
        <FormattedMessage id="localtitle" />
      </button>

      <ul className="dropdown-menu">
        <li>
          <button
            className={`dropdown-item ${locale.toLocaleLowerCase() === 'en-us' ? 'active' : ''}`}
            type="button"
            onClick={() => handleSelect('en-us')}
          >
            English
          </button>
        </li>
        <li>
          <button
            className={`dropdown-item ${locale.toLocaleLowerCase() === 'zh-hk' ? 'active' : ''}`}
            type="button"
            onClick={() => handleSelect('zh-hk')}
          >
            繁體中文
          </button>
        </li>
      </ul>
    </div>
  );
};

export default LanguageDropdown;
