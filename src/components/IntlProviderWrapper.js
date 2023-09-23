import React, { useContext, useEffect, useState } from 'react';
import '../App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { IntlProvider } from 'react-intl';
import { LocalContext } from './LocalContextProvider';

export default function IntlProviderWrapper({children}) {

    const { locale } = useContext(LocalContext);
    const [messages, setMessages] = useState(null);

    async function loadMessages() {
      const lowercaseLocale = locale.toLocaleLowerCase();


      try {
        // Dynamically import the JSON file based on the locale
        const messages = await import(`../translations/${lowercaseLocale}.json`);

        setMessages(messages);
      } catch (error) {
        // If the JSON file for the specified locale is not found, fall back to 'en-US'
        const defaultMessages = await import(`../translations/en-US.json`);
        setMessages(defaultMessages);
      }
    }

    useEffect(() => {
      loadMessages();
    }, [locale]);

    if (!messages) {
      return null;
    }

    return (
      <IntlProvider messages={messages} locale={locale}>
        {children}
      </IntlProvider>
    );
  }

