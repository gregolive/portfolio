import { Code, StyledSection } from '../../styled/Styled';
import Job from './Job';
import { ExperienceList } from './StyledExperience';
import { experience } from '../../../assets/helpers/experience';

const Experience = () => {
  return (
    <StyledSection id='experience'>
      <div className='section-description'>
        <Code className='h2' content={<h2>Experience</h2>} />
        <Code className='p' content={<p>Where I've worked and some of the features I've helped ship.</p>} />
      </div>
      <ExperienceList>
        {experience.map((job, i) => <Job job={job} key={i} />)}
      </ExperienceList>
    </StyledSection>
  );
};

export default Experience;
