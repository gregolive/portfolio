import { render, screen } from '@testing-library/react';
import App from '@/App';

test('renders the main sections and navigation', () => {
  render(<App />);
  expect(screen.getByRole('heading', { level: 1, name: /greg olive/i })).toBeInTheDocument();
  ['Bio', 'Experience', 'Projects', 'Contact'].forEach((label) => {
    expect(screen.getByRole('link', { name: label })).toBeInTheDocument();
  });
  expect(screen.getByRole('button', { name: /send/i })).toBeInTheDocument();
  expect(screen.getByRole('heading', { level: 3, name: /japanese word of the day/i })).toBeInTheDocument();
  expect(screen.getByRole('list', { name: /how it works/i })).toBeInTheDocument();

  // Header button plus the icon links in the bio and footer
  const resumeLinks = screen.getAllByRole('link', { name: /resume/i });
  expect(resumeLinks).toHaveLength(3);
  resumeLinks.forEach((link) => {
    // The /portfolio/ base path only applies to real builds, so just check the file
    expect(link).toHaveAttribute('href', expect.stringMatching(/\/gregory-olive-resume\.pdf$/));
    expect(link).toHaveAttribute('target', '_blank');
  });
});
