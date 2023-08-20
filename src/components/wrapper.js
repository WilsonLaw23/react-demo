import React, { useState } from 'react';

export const LocalContext = React.createContext();

const local = navigator.language;
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
