import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
  max-width: 100%;
  height: 100%;

  @media (max-width: 1024px) {
    flex-direction: column;
  }
`;