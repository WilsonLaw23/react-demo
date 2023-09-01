import React, { useContext } from 'react';
import '../App.css';
import 'bootstrap/dist/css/bootstrap.min.css'
import { IntlProvider } from 'react-intl';
import { LocalContext } from './LocalContextProvider';
import messages_en_us from '../translations/en-US.json';
import messages_zh_hk from '../translations/zh-hk.json';

export default function IntlProviderWrapper({children}) {
    const { locale } = useContext(LocalContext);
    let lang;
    if (locale.toLocaleLowerCase() === 'en-us') {
      lang = messages_en_us;
    } else {
      lang = messages_zh_hk;
    }
  
    return (<IntlProvider messages={lang} locale={locale}>
        {children}
            </IntlProvider>
  );
}

