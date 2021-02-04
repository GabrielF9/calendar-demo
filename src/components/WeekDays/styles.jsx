import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  margin-top: ${props => props.isWeekHeader ? '2rem' : '0'};
  width: 100%;
  height: 100%;
`;