import React from 'react';
import { render, screen, waitFor } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import IntlProviderWrapper from './IntlProviderWrapper';
import LanguageDropdown from './LanguageDropdown';
import LocalContextProvider from './LocalContextProvider';

const mockContextValue = {
  locale: 'en-us',
  selectLang: jest.fn(),
};

const renderWithProviders = (component) => {
  return render(
    <LocalContextProvider value={mockContextValue}>
      <IntlProviderWrapper>{component}</IntlProviderWrapper>
    </LocalContextProvider>
  );
};

test('renders language dropdown with initial active locale', async () => {
  renderWithProviders(<LanguageDropdown />);

  await waitFor( () => { 
    const dropdownButton = screen.getByTestId('languageDropdown');
    expect(dropdownButton).toHaveTextContent('English');

  });

});