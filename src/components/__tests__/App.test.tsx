import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import App from '../../App';

beforeAll(() => {
  // jsdom doesn't implement matchMedia
  window.matchMedia = window.matchMedia || ((query: string) => ({
    matches: false,
    media: query,
    onchange: null,
    addListener: jest.fn(),
    removeListener: jest.fn(),
    addEventListener: jest.fn(),
    removeEventListener: jest.fn(),
    dispatchEvent: jest.fn(),
  }));
});

test('renders the main sections and navigation', () => {
  render(<App />);
  expect(screen.getByRole('heading', { level: 1, name: /greg olive/i })).toBeInTheDocument();
  ['Bio', 'Experience', 'Contact'].forEach((label) => {
    expect(screen.getByRole('link', { name: label })).toBeInTheDocument();
  });
  expect(screen.getByRole('button', { name: /send/i })).toBeInTheDocument();
});
