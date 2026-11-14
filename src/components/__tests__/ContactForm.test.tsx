import { fireEvent, render, screen } from '@testing-library/react';
import { ThemeProvider } from 'styled-components';
import emailjs from '@emailjs/browser';
import { lightTheme } from '@/assets/themes/themes';
import ContactForm from '@/components/home/contact/ContactForm';

vi.mock('@emailjs/browser', () => ({ default: { sendForm: vi.fn() } }));
const sendForm = vi.mocked(emailjs.sendForm);

const renderForm = () => render(
  <ThemeProvider theme={lightTheme}>
    <ContactForm />
  </ThemeProvider>
);

const fillAndSubmit = () => {
  fireEvent.change(screen.getByLabelText('Name'), { target: { value: 'Ada' } });
  fireEvent.change(screen.getByLabelText('Email'), { target: { value: 'ada@example.com' } });
  fireEvent.change(screen.getByLabelText('Subject'), { target: { value: 'Hello' } });
  fireEvent.change(screen.getByLabelText('Message'), { target: { value: 'Hi there' } });
  fireEvent.click(screen.getByRole('button', { name: /send/i }));
};

let now = 1_000_000;
beforeEach(() => {
  sendForm.mockReset();
  vi.spyOn(Date, 'now').mockImplementation(() => now);
});
afterEach(() => vi.restoreAllMocks());

test('sends the form with rate limiting and headless blocking', async () => {
  sendForm.mockResolvedValue({ status: 200, text: 'OK' });
  renderForm();
  now += 10_000;
  fillAndSubmit();

  expect(sendForm).toHaveBeenCalledTimes(1);
  expect(sendForm.mock.calls[0][3]).toMatchObject({
    blockHeadless: true,
    limitRate: { id: 'contact-form', throttle: 60_000 },
  });
  expect(await screen.findByText(/thanks for reaching out/i)).toBeInTheDocument();
});

test('quietly drops submissions that fill in the honeypot', () => {
  const { container } = renderForm();
  now += 10_000;
  fireEvent.change(container.querySelector('input[name="website"]')!, { target: { value: 'spam.example' } });
  fillAndSubmit();

  expect(sendForm).not.toHaveBeenCalled();
  expect(screen.getByText(/thanks for reaching out/i)).toBeInTheDocument();
});

test('quietly drops submissions made too soon after the form appears', () => {
  renderForm();
  now += 1_000;
  fillAndSubmit();

  expect(sendForm).not.toHaveBeenCalled();
  expect(screen.getByText(/thanks for reaching out/i)).toBeInTheDocument();
});

test('asks people to wait when the rate limit is hit', async () => {
  sendForm.mockRejectedValue({ status: 429, text: 'Too Many Requests' });
  vi.spyOn(console, 'error').mockImplementation(() => {});
  renderForm();
  now += 10_000;
  fillAndSubmit();

  expect(await screen.findByRole('alert')).toHaveTextContent(/wait a minute/i);
});
