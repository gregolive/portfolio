import styled from 'styled-components';

const StyledLinks = styled.div`
  display: flex;
  gap: 1.3rem;
`;

export default StyledLinks;

const StyledLink = styled.a`
  border: 2px solid rgba(255,255,255,0.4);
  height: 2.8rem;
  width: 2.8rem;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  transition: all 0.4s;
  
  &:hover {
    border: 2px solid white;
  }
`;

export { StyledLink };
