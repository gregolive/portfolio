import { css } from 'styled-components';

/** Card with a brand-colored top border, shared by the experience and project boxes. */
const accentCard = css<{ $color: string }>`
  background: ${(props) => props.theme.backgroundColor};
  border: 1px solid ${(props) => props.theme.borderColor};
  border-top: 4px solid ${(props) => props.$color};
  border-radius: 0.5rem;
  box-shadow: 1px 1px 5px ${(props) => props.theme.boxShadowColor};
  padding: 1.5rem 2rem;

  @media screen and (max-width: 480px) {
    padding: 1.25rem 1rem;
  }
`;

export default accentCard;
