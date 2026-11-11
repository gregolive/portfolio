import { Code, StyledSection } from '../styled/Styled';
import Projects from './projects/Projects';
import { personalProjects } from '../../assets/helpers/projects';

const PersonalProjects = () => {
  return (
    <StyledSection id='projects'>
      <div className='section-description'>
        <Code className='h2' content={<h2>Recent projects</h2>} />
        <Code className='p' content={<p>Here are some of my personal projects.</p>} />
      </div>
      
      <Projects projects={personalProjects} />
    </StyledSection>
  );
};

export default PersonalProjects;
