import { useRef, useState } from 'react';
import type { FocusEvent, FormEvent } from 'react';
import emailjs from '@emailjs/browser';
import StyledContactForm, { StyledInput, StyledTextarea, ErrorMsg, Honeypot } from './StyledContactForm';
import StyledButton from '@/components/button/StyledButton';
import Loading from '@/components/loading/Loading';
import SuccessMsg from '@/components/loading/SuccessMsg';

const INVALID_EMAIL = 'Invalid email address';

// Spam protection
const HONEYPOT = 'website';      // hidden field only bots fill in
const MIN_FILL_MS = 3000;        // nobody types a whole message faster than this
const THROTTLE_MS = 60 * 1000;   // one message per minute per browser (EmailJS limitRate)

const ContactForm = () => {
  const [formErr, setFormErr] = useState('');
  const [loading, setLoading] = useState(false);
  const [showMsg, setShowMsg] = useState(false);
  const shownAt = useRef(Date.now());

  const updateFormErr = () => {
    if (formErr === INVALID_EMAIL) { return; }
    setFormErr('');
  };

  const validateEmail = (e: FocusEvent<HTMLInputElement>) => {
    setFormErr(e.target.validity.typeMismatch ? INVALID_EMAIL : '');
  };

  const sendEmail = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const formEl = e.currentTarget;

    if (!formEl.checkValidity()) {
      setFormErr('Please fill in all fields and enter a valid email address');
      return;
    }
    setFormErr('');

    // Looks like a bot: act as if it worked so it has no reason to retry, but send nothing
    const honeypot = formEl.elements.namedItem(HONEYPOT) as HTMLInputElement | null;
    if (honeypot?.value || Date.now() - shownAt.current < MIN_FILL_MS) {
      setShowMsg(true);
      formEl.reset();
      return;
    }

    setLoading(true);
    emailjs.sendForm(import.meta.env.VITE_EMAILJS_SERVICE_ID, import.meta.env.VITE_EMAILJS_TEMPLATE_ID, formEl, {
      publicKey: import.meta.env.VITE_EMAILJS_PUBLIC_KEY,
      blockHeadless: true,
      limitRate: { id: 'contact-form', throttle: THROTTLE_MS },
    })
      .then(() => {
        setShowMsg(true);
        formEl.reset();
      })
      .catch((err: { status?: number; text?: string }) => {
        console.error(err);
        if (err?.status === 429) {
          setFormErr('Thanks! You just sent a message, please wait a minute before sending another.');
          return;
        }
        setFormErr(`Sorry, your message could not be sent${err?.text ? ` (${err.text})` : ''}. Please try again later.`);
      })
      .finally(() => setLoading(false));
  };

  return (
    <>
      <StyledContactForm onSubmit={sendEmail} noValidate>
        <StyledInput type='text' name='user_name' placeholder='Name' aria-label='Name' onChange={updateFormErr} required />
        <StyledInput type='email' name='user_email' placeholder='Email' aria-label='Email' onBlur={validateEmail} required />
        <StyledInput type='text' name='subject' placeholder='Subject' aria-label='Subject' onChange={updateFormErr} required />
        <Honeypot aria-hidden='true'>
          <label>
            Leave this field empty
            <input type='text' name={HONEYPOT} tabIndex={-1} autoComplete='off' />
          </label>
        </Honeypot>
        <StyledTextarea name='message' placeholder='Message' aria-label='Message' rows={4} onChange={updateFormErr} required />
        <ErrorMsg role='alert'>{formErr}</ErrorMsg>
        <StyledButton type='submit' disabled={loading}>Send</StyledButton>
      </StyledContactForm>

      {(loading) ? <Loading /> : null}
      {(showMsg) ? <SuccessMsg setShowMsg={setShowMsg} /> : null}
    </>
  );
};

export default ContactForm;
