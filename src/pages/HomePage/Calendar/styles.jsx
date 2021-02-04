import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  width: 60%;
  height: 100%;
  padding: 32px;
  padding-bottom: 60px;
  overflow: hidden;

  @media (max-width: 1024px) {
    width: 100%;
  }
`;

export const CalendarContainer = styled.div`
  margin-top: 3.75rem;
  padding: 0 2rem;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;
  height: 100%;
`;

export const CalendarContent = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  width: 100%;
  height: 100%;
`;

export const Saudation = styled.p`
  font-size: 3rem;
  font-weight: 600;

  @media (max-width: 1024px) {
    font-size: 5rem;
  }
`;

