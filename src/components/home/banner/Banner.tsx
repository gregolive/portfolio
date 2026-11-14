import useTypewriter from '@/hooks/useTypewriter';
import StyledBanner, { Console, Arrows } from './StyledBanner';
import { Code } from '@/components/styled/Styled';

const TITLES = ['Full-stack developer', 'OS Contributor', 'Designer'];

const Banner = () => {
  const title = useTypewriter(TITLES, { typeSpeed: 100, backDelay: 2000, backSpeed: 60 });

  return (
    <StyledBanner className='banner'>
      <Code className='h1' content={<h1>GREG OLIVE</h1>} />
      
      <Console>
        <span className='prompt'>C:\Users\guest&#62;&nbsp;</span>
        {/* Screen readers get the full list once instead of every keystroke */}
        <span className='command' aria-hidden='true'>{title}</span>
        <span className='sr-only'>{TITLES.join(', ')}</span>
      </Console>

      <Arrows>
        <svg xmlns='http://www.w3.org/2000/svg' version='1.1' width='36' height='36' viewBox='0 0 24 24' fill='currentColor'><path d='M7.41,8.58L12,13.17L16.59,8.58L18,10L12,16L6,10L7.41,8.58Z' /></svg>
        <svg xmlns='http://www.w3.org/2000/svg' version='1.1' width='36' height='36' viewBox='0 0 24 24' fill='currentColor'><path d='M7.41,8.58L12,13.17L16.59,8.58L18,10L12,16L6,10L7.41,8.58Z' /></svg>
        <svg xmlns='http://www.w3.org/2000/svg' version='1.1' width='36' height='36' viewBox='0 0 24 24' fill='currentColor'><path d='M7.41,8.58L12,13.17L16.59,8.58L18,10L12,16L6,10L7.41,8.58Z' /></svg>
      </Arrows>
    </StyledBanner>
  );
};

export default Banner;
