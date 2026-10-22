import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import { ThemeProvider } from 'styled-components';
import { lightTheme } from '../../assets/themes/themes';
import Experience from '../home/experience/Experience';
import { experience } from '../../assets/helpers/experience';

test('renders each job with its role and highlights', () => {
  render(
    <ThemeProvider theme={lightTheme}>
      <Experience />
    </ThemeProvider>
  );

  experience.forEach((job) => {
    expect(screen.getByText(job.company)).toBeInTheDocument();
    job.roles.forEach((role) => expect(screen.getByText(role.title)).toBeInTheDocument());
    job.highlights.forEach((highlight) => expect(screen.getByText(highlight.title)).toBeInTheDocument());
  });
});
