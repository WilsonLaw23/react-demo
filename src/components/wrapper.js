import React, { useState } from 'react';
import { IntlProvider } from 'react-intl';
import messages_en_us from '../translations/en-us.json';
import messages_zh_hk from '../translations/zh-hk.json';

export const LocalContext = React.createContext();

const local = navigator.language;

let lang;
if (local === 'en-us') {
  lang = messages_en_us;
} else {
  lang = messages_zh_hk;
}

const Wrapper = ({ children }) => {
  const [locale, setLocale] = useState(local);

  function selectLang(value) {
    setLocale(value);
  }

  return (
    <LocalContext.Provider value={{ locale, selectLang }}>
        {children}
    </LocalContext.Provider>
  );
};

export default Wrapper;
