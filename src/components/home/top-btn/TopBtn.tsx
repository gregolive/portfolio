import styled from 'styled-components';
import useScrolledPast from '../../../hooks/useScrolledPast';

const StyledTopBtn = styled.button`
  background: ${(props) => props.theme.primaryColor};
  color: white;
  border-radius: 50%;
  height: 3.3rem;
  width: 3.3rem;
  display: flex;
  align-items: center;
  justify-content: center;
  opacity: 0;
  visibility: hidden;
  position: fixed;
  bottom: 1.25rem;
  right: 1.25rem;
  transition: 0.4s;

  &.visible {
    opacity: 1;
    visibility: visible;
  }

  @media screen and (max-width: 768px) {
    height: 3rem;
    width: 3rem;
    bottom: 0.75rem;
    right: 0.75rem;
  }
`;

const TopBtn = () => {
  const visible = useScrolledPast(1500);
  const scrollTop = () => window.scrollTo({ top: 0 });

  return (
    <StyledTopBtn type='button' className={visible ? 'visible' : ''} onClick={scrollTop} aria-label='Back to top'>
      <svg xmlns='http://www.w3.org/2000/svg' version='1.1' width='36' height='36' viewBox='0 0 320 512' fill='currentColor'><path d='M9.39 265.4l127.1-128C143.6 131.1 151.8 128 160 128s16.38 3.125 22.63 9.375l127.1 128c9.156 9.156 11.9 22.91 6.943 34.88S300.9 320 287.1 320H32.01c-12.94 0-24.62-7.781-29.58-19.75S.2333 274.5 9.39 265.4z' /></svg>
    </StyledTopBtn>
  );
};

export default TopBtn;
