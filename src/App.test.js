import { render, screen } from '@testing-library/react';
import App from './App';

test('Input Text:', () => {
  render(<App />);
  const linkElement = screen.getByText(/input text:/i);
  expect(linkElement).toBeInTheDocument();
});
