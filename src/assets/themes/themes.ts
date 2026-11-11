export interface Theme {
  primaryColor: string;
  secondaryColor: string;
  backgroundColor: string;
  bgPrimaryColor: string;
  bgSecondaryColor: string;
  fontColor: string;
  textShadowColor: string;
  borderColor: string;
  boxShadowColor: string;
  inputColor: string;
  placeholderColor: string;
  headerHighlightColor: string;
  headerHighlightOpacity: string;
}

const lightTheme: Theme = {
  primaryColor: '#2924fb',
  secondaryColor: '#fd23de',
  backgroundColor: '#fff',
  bgPrimaryColor: '#2924fb',
  bgSecondaryColor: '#fd23de',
  fontColor: '#0b132b',
  textShadowColor: '#2924fb',
  borderColor: '#e6ecf8',
  boxShadowColor: 'rgba(0,0,0,0.1)',
  inputColor: '#f5f5fa',
  placeholderColor: '#adadb8',
  headerHighlightColor: '#2924fb',
  headerHighlightOpacity: '0.08',
};

const darkTheme: Theme = {
  primaryColor: '#2924fb',
  secondaryColor: '#fd23de',
  backgroundColor: '#0b132b',
  bgPrimaryColor: '#030250',
  bgSecondaryColor: '#3617B6',
  fontColor: '#fff',
  textShadowColor: '#fff',
  borderColor: 'rgba(255,255,255,0.5)',
  boxShadowColor: 'rgba(255,255,255,0.75)',
  inputColor: '#152451',
  placeholderColor: '#5e5e66',
  headerHighlightColor: '#fff',
  headerHighlightOpacity: '0.1',
};

export { lightTheme, darkTheme };
