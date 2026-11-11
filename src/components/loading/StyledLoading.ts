import styled, { keyframes } from 'styled-components';

const StyledLoading = styled.div`
  background: rgba(0, 0, 0, 0.6);
  height: 100%;
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  position: fixed;
  top: 0;
  left: 0;
  z-index: 3;
`;

export default StyledLoading;

const loading = keyframes`
  0%, 80%, 100% {
    box-shadow: 0 1.5rem 0 -1.3rem;
  }
  40% {
    box-shadow: 0 1.5rem 0 0;
  }
`;

const LoadingAnimation = styled.div`
  color: #fff;
  border-radius: 50%;
  width: 1.5rem;
  height: 1.5rem;
  position: relative;
  animation: ${loading} 1.5s infinite ease-in-out;
  animation-fill-mode: both;
  animation-delay: -0.16s;

  &:before, &:after {
    content: '';
    border-radius: 50%;
    width: 1.5rem;
    height: 1.5rem;
    position: absolute;
    top: 0;
    animation: ${loading} 1.5s infinite ease-in-out;
    animation-fill-mode: both;
  }

  &:before {
    left: -2.5rem;
    animation-delay: -0.32s;
  }

  &:after {
    left: 2.5rem;
  }
`;

export { LoadingAnimation };
