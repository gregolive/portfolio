import styled, { keyframes } from 'styled-components';

const fadeIn = keyframes`
  from { opacity: 0; }
  to { opacity: 1; }
`;

const Overlay = styled.div`
  color: white;
  background: rgba(5, 8, 20, 0.95);
  backdrop-filter: blur(8px);
  -webkit-backdrop-filter: blur(8px);
  padding: 1rem;
  position: fixed;
  inset: 0;
  z-index: 10;
  display: grid;
  grid-template-rows: auto minmax(0, 1fr) auto;
  gap: 0.75rem;
  outline: none;
  animation: ${fadeIn} 0.2s ease-out;

  @media (prefers-reduced-motion: reduce) {
    animation: none;
  }
`;

export default Overlay;

const TopBar = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;

  .counter {
    font-family: 'Fira Code', monospace;
    font-size: 0.9rem;
    opacity: 0.75;
  }
`;

const Stage = styled.div`
  min-height: 0;
  display: flex;
  align-items: center;
  justify-content: center;
  touch-action: pan-y;

  img {
    max-height: 100%;
    max-width: min(100%, 90rem);
    object-fit: contain;
    border-radius: 0.5rem;
    box-shadow: 0 20px 60px rgba(0, 0, 0, 0.5);
    animation: ${fadeIn} 0.25s ease-out;
  }

  @media (prefers-reduced-motion: reduce) {
    img {
      animation: none;
    }
  }
`;

const BottomBar = styled.div`
  display: grid;
  grid-template-columns: 3rem minmax(0, 1fr) 3rem;
  align-items: center;
  gap: 1rem;
  width: min(100%, 40rem);
  justify-self: center;

  .caption {
    font-family: 'Fira Code', monospace;
    font-size: 1rem;
    text-align: center;
    margin: 0;
  }
`;

const LightboxButton = styled.button<{ $color: string }>`
  color: white;
  background: rgba(255, 255, 255, 0.1);
  border: 1px solid rgba(255, 255, 255, 0.2);
  border-radius: 50%;
  height: 3rem;
  width: 3rem;
  padding: 0;
  display: flex;
  align-items: center;
  justify-content: center;
  transition: background 0.2s ease, border-color 0.2s ease;

  svg {
    height: 1.25rem;
    width: 1.25rem;
  }

  &:hover {
    background: rgba(255, 255, 255, 0.2);
    border-color: ${(props) => props.$color};
  }

  &:focus-visible {
    outline: 2px solid white;
    outline-offset: 2px;
  }
`;

export { TopBar, Stage, BottomBar, LightboxButton };
