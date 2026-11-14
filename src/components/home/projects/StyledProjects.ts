import styled from 'styled-components';
import accentCard from '@/components/styled/card';

// Same width as the experience list so the boxes line up
const ProjectGrid = styled.div`
  display: grid;
  gap: 3rem;
  width: 100%;
  max-width: 70rem;
`;

export default ProjectGrid;

const StyledProject = styled.div<{ $color: string }>`
  ${accentCard}
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

const ProjectBadge = styled.span<{ $color: string }>`
  font-family: 'Fira Code', monospace;
  font-size: 0.8rem;
  font-weight: 500;
  color: ${(props) => props.$color};
  background: ${(props) => props.$color}1a;
  border: 1px solid ${(props) => props.$color}55;
  border-radius: 999px;
  padding: 0.2rem 0.7rem;
  align-self: flex-start;
  display: inline-flex;
  align-items: center;
  gap: 0.35rem;

  svg {
    height: 0.9rem;
    width: 0.9rem;
  }

  @media screen and (max-width: 768px) {
    align-self: center;
  }
`;

// Numbered steps joined by a line, e.g. how a scheduled AI job produces the content
const ProjectPipeline = styled.ol<{ $color: string }>`
  counter-reset: step;
  list-style: none;
  margin: 0.25rem 0 0;
  padding: 0;
  display: grid;
  gap: 0.6rem;
  text-align: left;

  li {
    counter-increment: step;
    display: grid;
    grid-template-columns: 1.6rem 1fr;
    column-gap: 0.75rem;
    position: relative;
    font-size: 0.95rem;
    line-height: 1.4;
  }

  li::before {
    content: counter(step);
    font-family: 'Fira Code', monospace;
    font-size: 0.8rem;
    font-weight: 600;
    color: ${(props) => props.theme.backgroundColor};
    background: ${(props) => props.$color};
    border-radius: 50%;
    height: 1.6rem;
    width: 1.6rem;
    display: flex;
    align-items: center;
    justify-content: center;
    grid-row: 1 / span 2;
    position: relative;
    z-index: 1;
  }

  /* Connector line between the numbers */
  li:not(:last-child)::after {
    content: '';
    background: ${(props) => props.$color};
    opacity: 0.35;
    width: 2px;
    position: absolute;
    left: calc(0.8rem - 1px);
    top: 1.6rem;
    bottom: -0.6rem;
  }

  strong {
    font-family: 'Fira Code', monospace;
    font-size: 0.9rem;
    color: ${(props) => props.$color};
  }

  span {
    opacity: 0.85;
  }

  @media screen and (max-width: 768px) {
    max-width: 32rem;
    justify-self: center;
    margin-inline: auto;
  }
`;

export { StyledProject, ProjectBadge, ProjectTitle, ProjectLinks, ProjectPipeline, ProjectTags };
