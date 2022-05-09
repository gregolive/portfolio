import styled from 'styled-components';

const lightTheme = {
  primaryColor: '#2924fb',
  secondaryColor: '#fd23de',
  backgroundColor: '#fff',
  bgPrimaryColor: '#2924fb',
  bgSecondaryColor: '#fd23de',
  fontColor: '#0b132b',
  codeColor: '#D3D3D9',
  shadowColor: '#2924fb',
};

const darkTheme = {
  primaryColor: '#2924fb',
  secondaryColor: '#fd23de',
  backgroundColor: '#0b132b',
  bgPrimaryColor: '#030250',
  bgSecondaryColor: '#790167',
  fontColor: '#fff',
  codeColor: '#E6E6EA',
  shadowColor: '#fff',
};

const StyledApp = styled.div`
  background: ${(props) => props.theme.backgroundColor};
  color: ${(props) => props.theme.fontColor};
`;

export { lightTheme, darkTheme, StyledApp };