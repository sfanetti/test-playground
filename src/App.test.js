import { render, screen } from '@testing-library/react';
import App from './App';

test('It renders the button and header', () => {
  render(<App />);
  const header = screen.getByText(/testing playground/i);
  expect(header).toBeInTheDocument();
});