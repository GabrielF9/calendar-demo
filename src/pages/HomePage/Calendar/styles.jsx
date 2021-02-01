import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
  width: 60%;
  height: 100%;
  padding: 32px;
  padding-bottom: 60px;

  @media (max-width: 1024px) {
    width: 100%;
  }
`;

export const Saudation = styled.p`
  font-size: 3rem;
  font-weight: 600;

  @media (max-width: 1024px) {
    font-size: 5rem;
  }
`;

