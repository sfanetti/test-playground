import { fireEvent, render, screen } from '@testing-library/react';
import App from './App';

test('It renders the button and header', () => {
  render(<App />);
  const header = screen.getByText(/testing playground/i);
  expect(header).toBeInTheDocument();
});

test('Clicking the button changes the color', async () => {
  render(<App />);
  const button = screen.getByText(/^change/i);
  expect(button.getAttribute('style')).toBe('background-color: blue;');
  fireEvent.click(button);
  expect(button.getAttribute('style')).toBe('background-color: green;');
  fireEvent.click(button);
  expect(button.getAttribute('style')).toBe('background-color: blue;');
});