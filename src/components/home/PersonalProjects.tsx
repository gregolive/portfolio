import { Code, StyledSection } from '../styled/Styled';
import Projects from './projects/Projects';
import { recentProjects } from '../../assets/helpers/projects';

const PersonalProjects = () => {
  return (
    <StyledSection id='projects'>
      <div className='section-description'>
        <Code className='h2' content={<h2>Recent projects</h2>} />
        <Code className='p' content={<p>Things I've built recently, outside of work.</p>} />
      </div>
      
      <Projects projects={recentProjects} />
    </StyledSection>
  );
};

export default PersonalProjects;
