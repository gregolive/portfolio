import { useState, useEffect } from 'react';
import styled, { ThemeProvider } from 'styled-components';
import { lightTheme, darkTheme } from './themes/themes';
import Header from './components/header/Header';
import Home from './components/home/Home';
import Footer from './components/footer/Footer';

const StyledApp = styled.div`
  background: ${(props) => props.theme.backgroundColor};
  color: ${(props) => props.theme.fontColor};
`;

const App = () => {
  const [theme, setTheme] = useState(lightTheme);
  const [scroll, setScroll] = useState(0);

  const toggleTheme = () => (theme === lightTheme) ? setTheme(darkTheme) : setTheme(lightTheme);

  const handleScroll = () => setScroll(window.scrollY);

  useEffect(() => {
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <ThemeProvider theme={theme}>
      <StyledApp>
        <Header toggleTheme={toggleTheme} scroll={scroll} />
        <Home />
        <Footer />
      </StyledApp>
    </ThemeProvider>
  );
};

export default App;
