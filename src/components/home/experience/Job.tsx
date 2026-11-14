import Highlight from './Highlight';
import useAccent from '../../../hooks/useAccent';
import { ProjectTags } from '../projects/StyledProjects';
import type { Job as JobData } from '../../../types';
import { StyledJob, JobCard, JobHeader, JobLogo, JobRoles, JobDetails, JobHighlights, HighlightList } from './StyledExperience';

interface JobProps {
  job: JobData;
}

const Job = ({ job }: JobProps) => {
  const { company, logo, link, location, color: brandColor, darkColor, roles = [], summary, responsibilities = [], tags = [], highlights = [] } = job;
  const color = useAccent(brandColor, darkColor);

  return (
    <StyledJob>
      <JobCard $color={color}>
        <JobHeader $color={color}>
          <JobLogo $color={color}>
            {logo ? <img src={logo} alt={`${company} logo`} /> : company.charAt(0)}
          </JobLogo>

          <div className='job-company'>
            <h3>
              {link ? <a href={link} target='_blank' rel='noreferrer'>{company}</a> : company}
            </h3>
            {location && <span className='job-location'>{location}</span>}
          </div>
        </JobHeader>

        <JobRoles $color={color}>
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
            <div className='job-skills'>
              <h4>Skills</h4>
              <ProjectTags $color={color}>
                {tags.map((tag) =>
                  <span key={tag.text}>
                    {tag.icon}
                    {tag.text}
                  </span>
                )}
              </ProjectTags>
            </div>
          )}
        </JobDetails>

        {(highlights.length > 0) && (
          <JobHighlights>
            <h4>Shipped feature highlights</h4>
            <HighlightList>
              {highlights.map((highlight) =>
                <Highlight highlight={highlight} color={color} key={highlight.title} />
              )}
            </HighlightList>
          </JobHighlights>
        )}
      </JobCard>
    </StyledJob>
  );
};

export default Job;
