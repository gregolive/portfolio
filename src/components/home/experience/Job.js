import Highlight from './Highlight';
import { ProjectTags } from '../projects/StyledProjects';
import { StyledJob, JobCard, JobHeader, JobLogo, JobRoles, JobDetails, HighlightList } from './StyledExperience';

const Job = ({ job }) => {
  const { company, logo, link, location, color, roles = [], summary, responsibilities = [], tags = [], highlights = [] } = job;

  return (
    <StyledJob>
      <JobCard color={color}>
        <JobHeader color={color}>
          <JobLogo color={color}>
            {logo ? <img src={logo} alt={`${company} logo`} /> : company.charAt(0)}
          </JobLogo>

          <div className='job-company'>
            <h3>
              {link ? <a href={link} target='_blank' rel='noreferrer'>{company}</a> : company}
            </h3>
            {location && <span className='job-location'>{location}</span>}
          </div>
        </JobHeader>

        <JobRoles color={color}>
          {roles.map((role, i) =>
            <li key={i}>
              <span className='role-title'>{role.title}</span>
              <span className='role-dates'>{role.start} - {role.end}</span>
            </li>
          )}
        </JobRoles>

        <JobDetails>
          {summary && <p>{summary}</p>}

          {(responsibilities.length > 0) && (
            <div className='job-responsibilities'>
              <h4>Responsibilities</h4>
              <ul>
                {responsibilities.map((item, i) => <li key={i}>{item}</li>)}
              </ul>
            </div>
          )}

          {(tags.length > 0) && (
            <ProjectTags color={color}>
              {tags.map((tag, i) =>
                <span key={i}>
                  {tag.icon}
                  {tag.text}
                </span>
              )}
            </ProjectTags>
          )}
        </JobDetails>
      </JobCard>

      {(highlights.length > 0) && (
        <HighlightList>
          <h4 className='highlights-heading'>Shipped features highlights</h4>
          {highlights.map((highlight, i) =>
            <Highlight highlight={highlight} color={color} key={i} />
          )}
        </HighlightList>
      )}
    </StyledJob>
  );
};

export default Job;
