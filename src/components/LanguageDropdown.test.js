import React from 'react';
import { render, screen } from '@testing-library/react';
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

test('renders language dropdown with initial active locale', () => {
  renderWithProviders(<LanguageDropdown />);

  const dropdownButton = screen.getByTestId('Dropdown');
  expect(dropdownButton).toHaveTextContent('English');
});
