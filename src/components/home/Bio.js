import { Code, AnimatedSection } from '../styled/Styled';
import SocialLinks from '../links/Links';

const Bio = () => {
  const bioText = `
    I started coding almost 10 years ago, and I've been building for the web as a professional developer since 2022.
    I am a problem solver, curious, and love working towards improving my skills in whatever I do.
    I was drawn to software development because it allows me to flex my creative muscles while creating something I am passionate about.
    I'm always happy to connect with people to share ideas!
  `;

  return (
    <AnimatedSection id='bio' className='bio'>
      <div className='section-description'>
        <Code className='h2' content={<h2>Hello world!</h2>} />
        <Code className='p' content={<p>{bioText}</p>} />
      </div>
      <SocialLinks email={true} />
    </AnimatedSection>
  );
};

export default Bio;
