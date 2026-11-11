import { render, screen } from '@testing-library/react';
import App from '../../App';

test('renders the main sections and navigation', () => {
  render(<App />);
  expect(screen.getByRole('heading', { level: 1, name: /greg olive/i })).toBeInTheDocument();
  ['Bio', 'Experience', 'Contact'].forEach((label) => {
    expect(screen.getByRole('link', { name: label })).toBeInTheDocument();
  });
  expect(screen.getByRole('button', { name: /send/i })).toBeInTheDocument();
});
