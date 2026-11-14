import { useState } from 'react';
import useActiveSection from '../../hooks/useActiveSection';
import { RESUME_URL } from '../../assets/helpers/links';
import StyledHeader, { NavbarLogo, NavbarSwitch, Slider, SwitchIcon, NavbarBurger, NavbarMenu, NavbarLink, NavbarResume } from './StyledHeader';

const sections = [
  { id: 'bio', label: 'Bio' },
  { id: 'experience', label: 'Experience' },
  { id: 'projects', label: 'Projects' },
  { id: 'contact', label: 'Contact' },
];

const SECTION_IDS = sections.map(({ id }) => id);

// A section is active once its top passes this offset (header height plus some breathing room)
const ACTIVE_OFFSET = 200;

interface NavProps {
  toggleTheme: () => void;
  dark: boolean;
}

const Nav = ({ toggleTheme, dark }: NavProps) => {
  const [menu, setMenu] = useState(false);
  const active = useActiveSection(SECTION_IDS, ACTIVE_OFFSET);
  const toggleMenu = () => setMenu((open) => !open);
  const closeMenu = () => setMenu(false);

  return (
    <StyledHeader>
      <NavbarLogo href='#'>go</NavbarLogo>

      <NavbarSwitch>
        <input type='checkbox' onChange={toggleTheme} checked={dark} aria-label='Toggle dark mode' />
        <Slider />
        <SwitchIcon className='moon'>🌜</SwitchIcon>
        <SwitchIcon className='sun'>🌞</SwitchIcon>
      </NavbarSwitch>

      <NavbarBurger type='button' onClick={toggleMenu} aria-label='Toggle navigation menu' aria-expanded={menu}>
        <svg xmlns='http://www.w3.org/2000/svg' version='1.1' width='24' height='24' viewBox='0 0 24 24' fill='currentColor'><path d='M3,6H21V8H3V6M3,11H21V13H3V11M3,16H21V18H3V16Z' /></svg>
      </NavbarBurger>

      <NavbarMenu className={(menu) ? 'navbar-menu open' : 'navbar-menu close'}>
        {sections.map(({ id, label }) =>
          <NavbarLink href={`#${id}`} className={(active === id) ? 'active' : ''} onClick={closeMenu} key={id}>{label}</NavbarLink>
        )}
        <NavbarResume href={RESUME_URL} target='_blank' rel='noreferrer' onClick={closeMenu} aria-label='Resume (PDF, opens in a new tab)'>
          Resume
          <svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24' fill='none' stroke='currentColor' strokeWidth='2.5' strokeLinecap='round' strokeLinejoin='round' aria-hidden='true'><path d='M7 17L17 7M8 7h9v9' /></svg>
        </NavbarResume>
      </NavbarMenu>
    </StyledHeader>
  );
};

export default Nav;
