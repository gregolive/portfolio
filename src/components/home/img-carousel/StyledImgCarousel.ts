import styled, { keyframes } from 'styled-components';

type Accent = { $color: string };

const CarouselContainer = styled.div`
  justify-self: center;
  min-width: 0;
`;

export default CarouselContainer;

// Browser-window style frame around the screenshots
const Frame = styled.div`
  background: ${(props) => props.theme.backgroundColor};
  border: 1px solid ${(props) => props.theme.borderColor};
  border-radius: 0.75rem;
  box-shadow: ${(props) => props.theme.elevatedShadow};
  overflow: hidden;
`;

const WindowBar = styled.div`
  background: ${(props) => props.theme.inputColor};
  border-bottom: 1px solid ${(props) => props.theme.borderColor};
  height: 2rem;
  padding: 0 0.75rem;
  display: grid;
  grid-template-columns: 3rem minmax(0, 1fr) 3rem;
  align-items: center;
  gap: 0.5rem;

  .lights {
    display: flex;
    gap: 0.35rem;
  }

  .lights span {
    height: 0.6rem;
    width: 0.6rem;
    border-radius: 50%;
  }

  .lights span:nth-child(1) { background: #ff5f57; }
  .lights span:nth-child(2) { background: #febc2e; }
  .lights span:nth-child(3) { background: #28c840; }

  .title {
    font-family: 'Fira Code', monospace;
    font-size: 0.8rem;
    text-align: center;
    opacity: 0.75;
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
  }
`;

// All slides share one grid cell so the carousel is always as tall as its tallest slide
const Slides = styled.div`
  display: grid;
  overflow: hidden;
  touch-action: pan-y;
`;

const slideInRight = keyframes`
  from { transform: translateX(100%); }
  to { transform: translateX(0); }
`;

const slideOutLeft = keyframes`
  from { transform: translateX(0); }
  to { transform: translateX(-100%); visibility: hidden; }
`;

const slideInLeft = keyframes`
  from { transform: translateX(-100%); }
  to { transform: translateX(0); }
`;

const slideOutRight = keyframes`
  from { transform: translateX(0); }
  to { transform: translateX(100%); visibility: hidden; }
`;

const ImgSlide = styled.div<{ $wide: boolean }>`
  grid-area: 1 / 1;
  background: ${(props) => props.theme.backgroundColor};
  display: flex;
  align-items: center;
  visibility: hidden;

  &.active, &.leaving {
    visibility: visible;
  }

  &.animate {
    animation-duration: 0.5s;
    animation-timing-function: cubic-bezier(0.65, 0, 0.35, 1);
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
    display: block;
    ${(props) => props.$wide ? `
      width: 100%;
      height: auto;
      max-height: 28rem;
      object-fit: contain;
    ` : `
      height: 30rem;
      aspect-ratio: 0.685;
      object-fit: cover;
    `}
  }
`;

const ZoomButton = styled.button<Accent>`
  background: none;
  border: none;
  padding: 0;
  width: 100%;
  display: flex;
  justify-content: center;
  position: relative;
  cursor: zoom-in;

  .zoom-hint {
    color: white;
    background: rgba(11, 19, 43, 0.75);
    border-radius: 50%;
    height: 2.25rem;
    width: 2.25rem;
    display: flex;
    align-items: center;
    justify-content: center;
    position: absolute;
    right: 0.75rem;
    bottom: 0.75rem;
    opacity: 0;
    transform: scale(0.9);
    transition: opacity 0.2s ease, transform 0.2s ease;
  }

  .zoom-hint svg {
    height: 1rem;
    width: 1rem;
  }

  &:hover .zoom-hint, &:focus-visible .zoom-hint {
    opacity: 1;
    transform: scale(1);
  }

  &:focus-visible {
    outline: 2px solid ${(props) => props.$color};
    outline-offset: -2px;
  }

  /* Touch screens have no hover, so always hint that the image can be enlarged */
  @media (hover: none) {
    .zoom-hint {
      opacity: 0.85;
      transform: none;
    }
  }
`;

const Controls = styled.div`
  margin-top: 0.85rem;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 0.75rem;
`;

const NavButton = styled.button<Accent>`
  color: ${(props) => props.theme.fontColor};
  background: ${(props) => props.theme.backgroundColor};
  border: 1px solid ${(props) => props.theme.borderColor};
  border-radius: 50%;
  height: 2.5rem;
  width: 2.5rem;
  padding: 0;
  flex-shrink: 0;
  display: flex;
  align-items: center;
  justify-content: center;
  transition: color 0.2s ease, border-color 0.2s ease, transform 0.2s ease;

  svg {
    height: 1.1rem;
    width: 1.1rem;
  }

  &:hover {
    color: ${(props) => props.$color};
    border-color: ${(props) => props.$color};
    transform: translateY(-1px);
  }

  &:focus-visible {
    outline: 2px solid ${(props) => props.$color};
    outline-offset: 2px;
  }
`;

const Indicators = styled.div`
  display: flex;
  align-items: center;
  gap: 0.35rem;
`;

// The active pill fills up over the autoplay interval; its animationend advances the slide
const progress = keyframes`
  from { clip-path: inset(0 100% 0 0 round 999px); }
  to { clip-path: inset(0 0 0 0 round 999px); }
`;

const Pill = styled.button<Accent>`
  color: ${(props) => props.theme.fontColor};
  background: none;
  border: none;
  padding: 0;
  height: 1.5rem;
  width: 1.5rem;
  position: relative;
  transition: width 0.3s ease;

  &::before, .fill {
    content: '';
    height: 0.4rem;
    border-radius: 999px;
    position: absolute;
    left: 0;
    right: 0;
    top: calc(50% - 0.2rem);
  }

  &::before {
    background: currentColor;
    opacity: 0.2;
    transition: opacity 0.2s ease;
  }

  &:hover::before {
    opacity: 0.35;
  }

  &.active {
    width: 2.75rem;
  }

  .fill {
    background: ${(props) => props.$color};
    animation-name: ${progress};
    animation-timing-function: linear;
    animation-fill-mode: forwards;
  }

  &:focus-visible {
    outline: 2px solid ${(props) => props.$color};
    outline-offset: 2px;
    border-radius: 999px;
  }

  /* No autoplay with reduced motion: the active pill is simply shown full */
  @media (prefers-reduced-motion: reduce) {
    transition: none;

    .fill {
      animation: none;
    }
  }
`;

export { Frame, WindowBar, Slides, ImgSlide, ZoomButton, Controls, NavButton, Indicators, Pill };
