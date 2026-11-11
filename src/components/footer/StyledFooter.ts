import styled from 'styled-components';
import { gradient } from '../styled/Styled';

const StyledFooter = styled.footer`
  color: white;
  background: ${(props) => `linear-gradient(-45deg, ${props.theme.bgPrimaryColor}, ${props.theme.bgSecondaryColor}) no-repeat`};
  background-size: 400% 100%;
  animation: ${gradient} 15s ease infinite;
  padding: 3rem 0;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 1.5rem;

  small {
    font-size: 1rem;
    font-weight: 200;
  }
`;

export default StyledFooter;

const FooterLogo = styled.a`
  color: ${(props) => props.theme.backgroundColor};
  font-family: 'Simplaform';
  font-size: 2.5rem;
  text-shadow: ${(props) => `${props.theme.secondaryColor} 2px -2px, ${props.theme.primaryColor} -2px 2px`};
  letter-spacing: 2px;
`;

export { FooterLogo };
