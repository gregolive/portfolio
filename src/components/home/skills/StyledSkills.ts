import styled from 'styled-components';

const StyledSkills = styled.article`
  color: ${(props) => props.theme.fontColor};
  background: ${(props) => props.theme.backgroundColor};
  border: 1px solid ${(props) => props.theme.borderColor};
  border-radius: 0.8rem;
  box-shadow: 1px 1px 5px ${(props) => props.theme.boxShadowColor};
  margin: -6rem 16vw 2rem 16vw;
  padding: 2rem;
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  column-gap: 2rem;
  justify-items: center;
  position: relative;

  @media screen and (max-width: 1024px) {
    margin: -6rem 8vw 2rem 8vw;
    padding: 1.5rem;
    column-gap: 1rem;
  }
  
  @media screen and (max-width: 768px) {
    margin: -6rem 15vw 2rem 15vw;
    padding: 2rem;
    grid-template-columns: 1fr;
    row-gap: 2rem;
  }
  
  @media screen and (max-width: 480px) {
    margin: -6rem 5vw 2rem 5vw;
    padding: 1.5rem;
  }
`;

export default StyledSkills;

const StyledSkillCol = styled.div`
  font-family: 'Fira Code', monospace;
  display: flex;
  flex-direction: column;
  align-items: center;
  
  h3 {
    margin-top: 0.5rem;
  }

  svg {
    color: ${(props) => props.theme.primaryColor};
    height: 3rem;
  }

  li {
    min-width: 100px;
    font-size: 1rem;
    font-weight: 300;
    line-height: 2rem;
    text-align: center;
  }
`;

const SkillsGrid = styled.ul`
  margin-top: 0.5rem;
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 1rem;

  li {
    display: grid;
  }

  li:last-child:not(:nth-child(even)) {
    grid-column: 1 / -1;
  }

  i {
    font-size: 2rem;
  }
`;

export { StyledSkillCol, SkillsGrid };
