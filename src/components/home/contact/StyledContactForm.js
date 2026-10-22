import styled from 'styled-components';

const StyledContactForm = styled.form`
  width: 80%;
  display: grid;
  grid-template: repeat(3, auto) / repeat(2, 1fr);
  column-gap: 1rem;

  * {
    font-family: 'Inter', sans-serif;
    font-size: 1.1rem;
    border-radius: 0.5rem;
  }

  input, textarea {
    background: ${(props) => props.theme.inputColor};
    color: ${(props) => props.theme.fontColor};
    border: 1px solid transparent;
    padding: 0.8rem 1rem;
    outline: none;
    transition: border-color 0.25s ease, box-shadow 0.25s ease, background 0.25s ease;

    &::placeholder {
      color: ${(props) => props.theme.placeholderColor};
      transition: opacity 0.25s ease;
    }

    &:hover {
      border-color: ${(props) => props.theme.borderColor};
    }

    &:focus {
      border-color: ${(props) => props.theme.primaryColor};
      box-shadow: 0 0 0 3px ${(props) => props.theme.primaryColor}33, 0 2px 12px ${(props) => props.theme.primaryColor}22;
    }

    &:focus::placeholder {
      opacity: 0.5;
    }
  }

  button {
    margin-top: 0.5rem;
    justify-self: start;
    grid-column: 1 / -1;
  }

  @media screen and (max-width: 1024px) {
    width: 90%;
  }

  @media screen and (max-width: 768px) {
    width: 100%;
    grid-template-columns: 1fr;

    button {
      justify-self: stretch;
    }
  }
`;

export default StyledContactForm;

const StyledInput = styled.input`
  margin-bottom: 1rem;

  &:nth-child(3) {
    grid-column: 1 / -1;
  }
`;

const StyledTextarea = styled.textarea`
  grid-column: 1 / -1;
  resize: vertical;
  margin-bottom: 0.5rem;
`;

const ErrorMsg = styled.small`
  font-size: 0.85rem;
  color: #ff3860;
  background: none;
`;

export { StyledInput, StyledTextarea, ErrorMsg };
