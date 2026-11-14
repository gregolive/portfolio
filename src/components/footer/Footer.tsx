import StyledFooter, { FooterLogo } from './StyledFooter';
import SocialLinks from '@/components/links/Links';

const Footer = () => {
  return (
    <StyledFooter>
      <FooterLogo href='#'>go</FooterLogo>
      <SocialLinks email={false} />
      <small>Built with care by @gregolive</small>
    </StyledFooter>
  );
};

export default Footer;
