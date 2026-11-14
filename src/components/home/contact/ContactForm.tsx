import { useState } from 'react';
import type { FocusEvent, FormEvent } from 'react';
import emailjs from '@emailjs/browser';
import StyledContactForm, { StyledInput, StyledTextarea, ErrorMsg } from './StyledContactForm';
import StyledButton from '../../button/StyledButton';
import Loading from '../../loading/Loading';
import SuccessMsg from '../../loading/SuccessMsg';

const INVALID_EMAIL = 'Invalid email address';

const ContactForm = () => {
  const [formErr, setFormErr] = useState('');
  const [loading, setLoading] = useState(false);
  const [showMsg, setShowMsg] = useState(false);

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

    setLoading(true);
    emailjs.sendForm(import.meta.env.VITE_EMAILJS_SERVICE_ID, import.meta.env.VITE_EMAILJS_TEMPLATE_ID, formEl, {
      publicKey: import.meta.env.VITE_EMAILJS_PUBLIC_KEY,
    })
      .then(() => {
        setShowMsg(true);
        formEl.reset();
      })
      .catch((err: { text?: string }) => {
        console.error(err);
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
