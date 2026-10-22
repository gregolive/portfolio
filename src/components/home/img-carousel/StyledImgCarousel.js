import styled, { keyframes } from 'styled-components';

const StyledCarousel = styled.div`
  position: relative;

  button {
    color: gray;
    opacity: 0.5;
    padding: 0;
    position: absolute;
    top: 50%;
    transition: 0.25s;
  }

  button:hover {
    color: ${(props) => props.color};
    opacity: 1;
  }

  button:first-of-type {
    left: 0;
  }

  button:last-of-type {
    right: 0;
  }

  button svg {
    height: 3rem;
    width: auto;
  }
`;

export default StyledCarousel;

const CarouselContainer = styled.div`
  justify-self: center;
`;

// All slides share one grid cell so the carousel is always as tall as its tallest slide.
// The padding/negative margin gives the image shadows room without clipping them.
const Slides = styled.div`
  display: grid;
  overflow: hidden;
  padding: 0.5rem;
  margin: -0.5rem;
`;

// Slides travel past the wrapper's padding so no edge of a neighbouring slide stays visible
const slideInRight = keyframes`
  from { transform: translateX(calc(100% + 1rem)); }
  to { transform: translateX(0); }
`;

const slideOutLeft = keyframes`
  from { transform: translateX(0); }
  to { transform: translateX(calc(-100% - 1rem)); visibility: hidden; }
`;

const slideInLeft = keyframes`
  from { transform: translateX(calc(-100% - 1rem)); }
  to { transform: translateX(0); }
`;

const slideOutRight = keyframes`
  from { transform: translateX(0); }
  to { transform: translateX(calc(100% + 1rem)); visibility: hidden; }
`;

const ImgSlide = styled.div`
  grid-area: 1 / 1;
  align-self: center;
  visibility: hidden;

  &.active, &.leaving {
    visibility: visible;
  }

  &.animate {
    animation-duration: 0.5s;
    animation-timing-function: ease-in-out;
    animation-fill-mode: forwards;
  }

  &.animate.active.next { animation-name: ${slideInRight}; }
  &.animate.leaving.next { animation-name: ${slideOutLeft}; }
  &.animate.active.prev { animation-name: ${slideInLeft}; }
  &.animate.leaving.prev { animation-name: ${slideOutRight}; }

  @media (prefers-reduced-motion: reduce) {
    &.animate {
      animation-duration: 0.01s;
    }
  }

  img {
    border: 1px solid ${(props) => props.theme.borderColor};
    border-radius: 0.5rem;
    box-shadow: 1px 1px 5px ${(props) => props.theme.boxShadowColor};
    display: block;
    ${(props) => props.wide ? `
      width: 100%;
      height: auto;
      max-height: 28rem;
      object-fit: contain;
    ` : `
      height: 30rem;
      aspect-ratio: 0.685;
    `}
  }
`;

const NavDots = styled.div`
margin-top: 0.25rem;
  height: var(--dot-div-height);
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 0.4rem;
`;

const Dot = styled.span`
  background: ${(props) => props.theme.boxShadowColor};
  border-radius: 50%;
  height: 0.75rem;
  width: 0.75rem;
  cursor: pointer;
  transition: 0.4s;

  &.active, &:hover {
    background: ${(props) => props.color};
  }
`;

export { CarouselContainer, Slides, ImgSlide, NavDots, Dot };
