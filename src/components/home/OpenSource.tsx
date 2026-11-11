import { Code, StyledSection } from '../styled/Styled';
import Projects from './projects/Projects';
import { openSourceProjects } from '../../assets/helpers/projects';

const OpenSource = () => {
  return (
    <StyledSection id='open-source'>
      <div className='section-description'>
        <Code className='h2' content={<h2>Open source</h2>} />
        <Code className='p' content={<p>The open source projects I have contributed to.</p>} />
      </div>
  
      <Projects projects={openSourceProjects} />
    </StyledSection>
  );
};

export default OpenSource;
