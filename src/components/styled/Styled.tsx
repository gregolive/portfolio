import type { ReactNode } from 'react';
import styled, { keyframes } from 'styled-components';

const StyledCode = styled.span`
  position: relative;
  justify-self: center;

  &:before, &:after {
    font-family: 'Fira Code', monospace;
    font-size: 1.1rem;
    font-weight: 500;
    font-style: italic;
    color: ${(props) => props.theme.fontColor};
    opacity: 0.07;
    position: absolute;
  }

  &:before {
    content: '<${(props) => props.className}>';
    top: -0.75rem;
    left: -2.25rem;
  }

  &:after {
    content: '</${(props) => props.className}>';
    bottom: -0.75rem;
    right: -2.75rem;
  }

  &.h1&:before, &.h1&:after {
    font-size: 1.75rem;
    opacity: 0.14;
  }

  &.h1&:before {
    top: -2.25rem;
    left: 0;
  }

  &.h1&:after {
    bottom: -2.25rem;
    right: 0;
  }

  &.h2&:before {
    top: -0.75rem;
    left: -2.75rem;
  }

  &.h2&:after {
    bottom: -0.75rem;
    right: -3.25rem;
  }

  @media screen and (max-width: 1024px) {
    &.p&:before {
      top: -1rem;
      left: -1.5rem;
    }
  
    &.p&:after {
      bottom: -1rem;
      right: -1.5rem;
    }
  }

  @media screen and (max-width: 768px) {
    &:before, &:after {
      font-size: 1rem;
    }

    &.h1&:before {
      font-size: 1.5rem;
      top: -1.75rem;
    }

    &.h1&:after {
      font-size: 1.5rem;
      bottom: -1.75rem;
    }
    
    &.h2&:before {
      top: -0.5rem;
      left: -2.5rem;
    }

    &.h2&:after {
      bottom: -0.5rem;
      right: -3rem;
    }
  }

  @media screen and (max-width: 480px) {
    &.p&:before {
      left: -0.5rem;
    }
  
    &.p&:after {
      right: -0.5rem;
    }
  }
`;

interface CodeProps {
  className: string;
  content: ReactNode;
}

const Code = ({ className, content }: CodeProps) => {
  return (
    <StyledCode className={className}>
      {content}
    </StyledCode>
  );
};

const StyledSection = styled.section`
  padding: 3rem 6rem;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 2rem;
  position: relative;

  &.bio {
    padding-bottom: 8rem !important;
  }

  &:before, &:after {
    font-family: 'Fira Code', monospace;
    font-size: 1.1rem;
    font-weight: 500;
    font-style: italic;
    color: ${(props) => props.theme.fontColor};
    opacity: 0.07;
    position: absolute;
  }

  &:before {
    content: '<section class="${(props) => props.id}">';    
    top: 1rem;
    left: 3vw;
  }

  &:after {
    content: "</section>";
    bottom: 1rem;
    right: calc(3vw + 7px);
  }

  .bio&:before, .bio&:after, &.bio * *:after, &.bio * *:before {
    color: white;
    opacity: 0.12;
  }

  .section-description {
    padding: 0 10vw;
    text-align: center;
    display: flex;
    flex-direction: column;
    align-items: center;
    grid-template-columns: auto;
    gap: 1.5rem;
  }

  h2 {
    font-size: 2.25rem;
    margin: 0;
  }

  p {
    font-size: 1.2rem;
    font-weight: 200;
    line-height: 1.75rem;
    margin: 0;
    justify-self: center;
  }

  @media screen and (max-width: 1024px) {
    padding: 3rem 3rem;

    &:before {
      top: 0.5rem;
      left: 1vw;
    }

    &:after {
      right: calc(1vw + 7px);
    }

    .section-description {
      padding: 0;
    }

    &.bio&:after {
      bottom: calc(6rem + 1vw);
    }
  }

  @media screen and (max-width: 768px) {
    padding: 3rem 2rem;

    &:before, &:after {
      font-size: 1rem;
    }
  }

  @media screen and (max-width: 480px) {
    padding: 3rem 1rem;

    h2 {
      font-size: 2rem;
    }

    p {
      font-size: 1.1rem;
    }
  }
`;

const gradient = keyframes`
  0% {
    background-position: 0% 50%;
  }
  50% {
    background-position: 100% 50%;
  }
  100% {
    background-position: 0% 50%;
  }
`;

const AnimatedSection = styled(StyledSection)`
  color: white;
  background: ${(props) => `linear-gradient(-45deg, ${props.theme.bgPrimaryColor}, ${props.theme.bgSecondaryColor}) no-repeat`};
  background-size: 400% 100%;
  animation: ${gradient} 15s ease infinite;
`;

export { Code, StyledSection, AnimatedSection, gradient };
