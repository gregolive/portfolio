import { useState, useEffect } from 'react';
import StyledHeader, { NavbarLogo, NavbarSwitch, Slider, SwitchIcon, NavbarBurger, NavbarMenu, NavbarLink } from './StyledHeader'

const sections = [
  { id: 'bio', label: 'Bio' },
  { id: 'experience', label: 'Experience' },
  { id: 'contact', label: 'Contact' },
];

// A section is active once its top passes this offset (header height plus some breathing room)
const ACTIVE_OFFSET = 200;

const Nav = ({ toggleTheme, dark, scroll }) => {
  const [menu, setMenu] = useState(false);
  const [active, setActive] = useState('');
  const toggleMenu = () => setMenu(!menu);
  const closeMenu = () => setMenu(false);

  useEffect(() => {
    const atBottom = window.innerHeight + scroll >= document.documentElement.scrollHeight - 2;
    let current = '';

    sections.forEach(({ id }) => {
      const el = document.getElementById(id);
      if (el && el.getBoundingClientRect().top <= ACTIVE_OFFSET) current = id;
    });

    setActive(atBottom ? sections[sections.length - 1].id : current);
  }, [scroll]);

  return (
    <StyledHeader>
      <NavbarLogo href='#'>go</NavbarLogo>

      <NavbarSwitch>
        <input type='checkbox' onChange={toggleTheme} checked={(dark) ? 'checked' : ''} />
        <Slider />
        <SwitchIcon className='moon'>🌜</SwitchIcon>
        <SwitchIcon className='sun'>🌞</SwitchIcon>
      </NavbarSwitch>

      <NavbarBurger onClick={toggleMenu}>
        <svg xmlns='http://www.w3.org/2000/svg' version='1.1' width='24' height='24' viewBox='0 0 24 24' fill='currentColor'><path d='M3,6H21V8H3V6M3,11H21V13H3V11M3,16H21V18H3V16Z' /></svg>
      </NavbarBurger>

      <NavbarMenu className={(menu) ? 'navbar-menu open' : 'navbar-menu close'}>
        {sections.map(({ id, label }) =>
          <NavbarLink href={`#${id}`} className={(active === id) ? 'active' : ''} onClick={closeMenu} key={id}>{label}</NavbarLink>
        )}
      </NavbarMenu>
    </StyledHeader>
  );
};

export default Nav;
