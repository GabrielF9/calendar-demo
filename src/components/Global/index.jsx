import styled, { createGlobalStyle } from "styled-components";

export const Global = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    font-family: 'Montserrat', sans-serif;

    @media (max-width: 1024px) {
      height: auto;
    }
  }

  #root, body, html {
    height: 100%;
  }
`;

export const ThinText = styled.p`
  font-weight: 100;
  align-self: center;
`;

export const MediumText = styled.p`
  font-weight: 500;
`;

export const RowCenteredStart = styled.p`
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
  align-items: center;
`;

export default Global;