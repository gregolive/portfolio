import styled from 'styled-components';

const StyledButton = styled.button`
  font-family: 'Inter', sans-serif;
  font-size: 1.1rem;
  font-weight: 600;
  letter-spacing: 0.5px;
  background: ${(props) => `linear-gradient(135deg, ${props.theme.primaryColor}, ${props.theme.secondaryColor})`};
  color: white;
  border: none;
  border-radius: 0.5rem;
  padding: 0.75rem 2.25rem;
  box-shadow: 0 4px 14px ${(props) => props.theme.primaryColor}66;
  transition: transform 0.25s ease, box-shadow 0.25s ease, filter 0.25s ease;

  &:hover {
    transform: translateY(-2px);
    box-shadow: 0 8px 20px ${(props) => props.theme.secondaryColor}55;
    filter: brightness(1.08);
  }

  &:active {
    transform: translateY(0);
    box-shadow: 0 2px 8px ${(props) => props.theme.primaryColor}66;
  }

  &:focus-visible {
    outline: 2px solid ${(props) => props.theme.fontColor};
    outline-offset: 3px;
  }
`;

export default StyledButton;
