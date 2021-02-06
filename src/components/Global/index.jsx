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
  font-size: ${props => props.fontSize || 'auto'}
`;

export const MediumText = styled.p`
  font-weight: 500;
  font-size: ${props => props.fontSize || 'auto'}
`;

export const RegularText = styled.p`
  font-size: ${props => props.fontSize || 'auto'}
`;

export const RowCenteredStart = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
  align-items: center;
`;

export const ColumnCenteredStart = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;
  padding: ${props => props.padding || 0};
`;

export default Global;