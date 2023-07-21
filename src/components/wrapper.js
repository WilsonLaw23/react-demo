import React, { useState} from "react";
import { IntlProvider } from "react-intl";
import messages_en_us from '../translations/en-us.json';
import messages_zh_hk from '../translations/zh-hk.json';

export const Context = React.createContext();

const local = navigator.language;

let lang;
if (local === "en-us") {
  lang = messages_en_us;
} else {
  lang = messages_zh_hk;
}


const Wrapper = () => {
    const [locale, setLocale] = useState(local);
    const [messages, setMessages] = useState(lang);

    function selectLang(e) {
        const newLocale = e.target.value;
        setLocale(newLocale);
        if(newLocale === "es-us") {
            setMessages(messages_en_us)
        } else {
            setMessages(messages_zh_hk);
        }


    }

    return(
        <Context.Provider value= {{ locale, selectLang }}>
        <IntlProvider messages = {messages} locale={local}>
        </IntlProvider>
        </Context.Provider>
    )
}

export default Wrapper