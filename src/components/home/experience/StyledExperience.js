import styled from 'styled-components';

const ExperienceList = styled.div`
  display: grid;
  gap: 4rem;
  width: 100%;
  max-width: 70rem;
`;

const StyledJob = styled.article`
  display: grid;
  gap: 2.5rem;
`;

const JobCard = styled.div`
  background: ${(props) => props.theme.backgroundColor};
  border: 1px solid ${(props) => props.theme.borderColor};
  border-top: 4px solid ${(props) => props.color};
  border-radius: 0.5rem;
  box-shadow: 1px 1px 5px ${(props) => props.theme.boxShadowColor};
  padding: 1.5rem 2rem;
  display: grid;
  gap: 1.25rem;

  @media screen and (max-width: 480px) {
    padding: 1.25rem 1rem;
  }
`;

const JobHeader = styled.div`
  display: grid;
  grid-template-columns: auto 1fr;
  align-items: center;
  gap: 1.25rem;

  .job-company {
    display: flex;
    flex-direction: column;
    gap: 0.25rem;
  }

  .job-company h3 {
    font-family: 'Fira Code', monospace;
    color: ${(props) => props.color};
    font-size: 1.65rem;
    margin: 0;
  }

  .job-company h3 a:hover {
    text-decoration: underline;
  }

  .job-location {
    font-size: 1rem;
    font-weight: 300;
    opacity: 0.8;
  }

  @media screen and (max-width: 480px) {
    grid-template-columns: 1fr;
    justify-items: center;
    text-align: center;
  }
`;

const JobLogo = styled.div`
  background: ${(props) => props.theme.inputColor};
  border: 1px solid ${(props) => props.theme.borderColor};
  border-radius: 0.5rem;
  height: 4.5rem;
  width: 4.5rem;
  overflow: hidden;
  display: flex;
  align-items: center;
  justify-content: center;
  font-family: 'Fira Code', monospace;
  font-size: 1.75rem;
  font-weight: 500;
  color: ${(props) => props.color};

  img {
    height: 100%;
    width: 100%;
    object-fit: contain;
  }
`;

const JobRoles = styled.ul`
  list-style: none;
  margin: 0;
  padding: 0 0 0 1.25rem;
  border-left: 2px solid ${(props) => props.color};
  display: grid;
  gap: 0.75rem;

  li {
    position: relative;
    display: flex;
    flex-direction: column;
  }

  li:before {
    content: '';
    background: ${(props) => props.color};
    border-radius: 50%;
    height: 0.75rem;
    width: 0.75rem;
    position: absolute;
    left: calc(-1.25rem - 7px);
    top: 0.45rem;
  }

  .role-title {
    font-size: 1.2rem;
    font-weight: 500;
  }

  .role-dates {
    font-size: 0.95rem;
    font-weight: 300;
    opacity: 0.8;
  }

  @media screen and (max-width: 480px) {
    text-align: left;
  }
`;

const JobDetails = styled.div`
  display: grid;
  gap: 1rem;

  p {
    font-size: 1.1rem;
  }

  .job-responsibilities {
    display: grid;
    gap: 0.5rem;
  }

  h4 {
    font-family: 'Fira Code', monospace;
    font-size: 1.1rem;
    font-weight: 500;
    margin: 0;
  }

  ul {
    font-size: 1.05rem;
    font-weight: 200;
    line-height: 1.6rem;
    margin: 0;
    padding-left: 1.25rem;
    display: grid;
    gap: 0.25rem;
  }

  li {
    list-style: disc;
  }

  @media screen and (max-width: 768px) {
    text-align: left;
  }
`;

const HighlightList = styled.div`
  display: grid;
  gap: 3rem;

  .highlights-heading {
    font-family: 'Fira Code', monospace;
    font-size: 1.1rem;
    font-weight: 500;
    opacity: 0.6;
    margin: 0;
    text-align: center;
  }
`;

const StyledHighlight = styled.div`
  display: grid;
  grid-template-columns: repeat(2, minmax(0, 1fr));
  align-items: center;
  gap: 3rem;

  .carousel {
    justify-self: stretch;
  }

  .highlight-overview {
    display: flex;
    flex-direction: column;
    gap: 0.75rem;
    justify-content: center;
  }

  .highlight-overview p {
    font-size: 1.1rem;
    font-weight: 200;
    line-height: 1.6rem;
    margin: 0;
  }

  .highlight-impact {
    font-size: 1.05rem;
    font-weight: 300;
    line-height: 1.6rem;
    margin: 0;
    padding-left: 1.25rem;
    display: grid;
    gap: 0.25rem;

    li {
      list-style: disc;
    }
  }

  @media screen and (min-width: 768px) {
    &:nth-of-type(even) .highlight-overview {
      grid-area: 1 / 1 / 2 / 2;
    }

    &:nth-of-type(even) .carousel {
      grid-column: 2 / 3;
    }
  }

  @media screen and (max-width: 1024px) {
    gap: 2rem;
  }

  @media screen and (max-width: 768px) {
    grid-template-columns: minmax(0, 1fr);
    gap: 1.5rem;
    text-align: center;

    .highlight-impact {
      text-align: left;
    }
  }
`;

export { ExperienceList, StyledJob, JobCard, JobHeader, JobLogo, JobRoles, JobDetails, HighlightList, StyledHighlight };
