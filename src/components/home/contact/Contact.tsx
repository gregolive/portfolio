import { Code, StyledSection } from '../../styled/Styled';
import ContactForm from './ContactForm';

const Contact = () => {
  return (
    <StyledSection id='contact'>
      <div className='section-description'>
        <Code className='h2' content={<h2>Get in touch</h2>} />
        <Code className='p' content={<p>For information about me or my work, feel free to reach out!</p>} />
      </div>

      <ContactForm />
    </StyledSection>
  )
};

export default Contact;
