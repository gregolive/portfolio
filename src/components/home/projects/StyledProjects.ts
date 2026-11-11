import styled from 'styled-components';

const ProjectGrid = styled.div`
  display: grid;
  gap: 3rem;
`;

export default ProjectGrid;

const StyledProject = styled.div`
  display: grid;
  grid-template-columns: auto 1fr;
  gap: 5vw;

  .project-overview {
    display: flex;
    flex-direction: column;
    gap: 0.5rem;
    justify-content: center;
  }

  @media screen and (min-width: 768px) {
    &:nth-child(even) .project-overview {
      grid-area: 1 / 1 / 2 / 2;
    }

    &:nth-child(even) .carousel {
      grid-column: 2 / 3;
    }
  }

  @media screen and (max-width: 1024px) {
    gap: 2vw;
  }

  @media screen and (max-width: 768px) {
    grid-template-columns: 1fr;
    gap: 1.5rem;
    text-align: center;
  }
`;

const ProjectTitle = styled.h3<{ $color: string }>`
  font-family: 'Fira Code', monospace;
  color: ${(props) => props.$color};
  font-size: 1.65rem;
  margin: 0;
  display: flex;
  gap: 0.75rem;

  @media screen and (max-width: 1024px) {
    font-size: 1.55rem;
  }

  @media screen and (max-width: 768px) {
    font-size: 1.65rem;
    justify-content: center;
  }
`;

const ProjectLinks = styled.div`
  color: ${(props) => props.theme.fontColor};
  display: flex;
  gap: 0.25rem;

  svg {
    transition: 0.25s ease-in-out;
  }

  svg:hover {
    transform: scale(1.15);
  }
`;

const ProjectTags = styled.div<{ $color: string }>`
  font-family: 'Fira Code', monospace;
  font-size: 0.9rem;
  font-weight: 300;
  margin-top: 0.5rem;
  display: flex;
  flex-wrap: wrap;
  gap: 0.5rem;

  span {
    color: ${(props) => props.$color};
    background: ${(props) => props.theme.backgroundColor};
    border: 1px solid ${(props) => props.$color};
    border-radius: 1rem;
    padding: 0.3rem 0.7rem;
    display: flex;
    align-items: center;
    gap: 0.25rem;
    text-align: center;
    cursor: default;
    transition: 0.4s;
  }

  span:hover {
    color: ${(props) => props.theme.backgroundColor};
    background: ${(props) => props.$color};
  }

  span i {
    font-size: 1.25rem;
  }

  @media screen and (max-width: 768px) {
    justify-content: center;
  }
`;

export { StyledProject, ProjectTitle, ProjectLinks, ProjectTags };
