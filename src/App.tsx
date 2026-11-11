import { useState, useEffect } from 'react';
import styled, { ThemeProvider } from 'styled-components';
import { lightTheme, darkTheme } from './assets/themes/themes';
import Header from './components/header/Header';
import Home from './components/home/Home';
import Footer from './components/footer/Footer';

const StyledApp = styled.div`
  background: ${(props) => props.theme.backgroundColor};
  color: ${(props) => props.theme.fontColor};
`;

const getInitialDark = (): boolean => {
  try {
    const stored = localStorage.getItem('dark');
    if (stored !== null) return stored === 'true';
  } catch {
    // localStorage can be unavailable (private mode, blocked storage)
  }
  return window.matchMedia?.('(prefers-color-scheme: dark)').matches ?? false;
};

const App = () => {
  const [dark, setDark] = useState<boolean>(getInitialDark);
  const [scroll, setScroll] = useState(0);

  const toggleTheme = () => {
    setDark((prev) => {
      const next = !prev;
      try {
        localStorage.setItem('dark', String(next));
      } catch {
        // ignore storage failures; the theme still toggles for this visit
      }
      return next;
    });
  };

  useEffect(() => {
    const handleScroll = () => setScroll(window.scrollY);
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <ThemeProvider theme={dark ? darkTheme : lightTheme}>
      <StyledApp>
        <Header toggleTheme={toggleTheme} scroll={scroll} dark={dark} />
        <Home scroll={scroll} />
        <Footer />
      </StyledApp>
    </ThemeProvider>
  );
};

export default App;
