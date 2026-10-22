import StyledFooter, { FooterLogo } from './StyledFooter';
import SocialLinks from '../links/Links';

const Footer = () => {
  return (
    <StyledFooter>
      <FooterLogo>go</FooterLogo>
      <SocialLinks email={false} />
      <small>Built with care by @gregolive</small>
    </StyledFooter>
  );
};

export default Footer;
