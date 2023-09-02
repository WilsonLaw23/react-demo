import { render } from '@testing-library/react';
import LanguageDropdown from "./LanguageDropdown";

test('dropdown should be in the page', () => {
    const { getByTestId } = render(<LanguageDropdown />)
    const Dropdown = getByTestId ("dropdown")
    expect(Dropdown).toBeInTheDocument()

  });