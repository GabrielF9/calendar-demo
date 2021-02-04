import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  background-color: ${props => props.selected ? '#426DC9' : props.weekend ? '#E5E5E5' : '#FFFFFF'};
  align-items: center;
  width: 100%;
  height: 100%;
  cursor: ${props => props.isWeekHeader ? 'auto' : 'pointer'};

  &:hover {
    background-color: ${props => props.isWeekHeader ? props.selected ? '#426DC9' : props.weekend ? '#E5E5E5' : '#FFFFFF' : props.selected ? '#5682e0' : '#EFEFEF'};
  }
`;

export const DayContent = styled.p`
  font-size: 26px;
  color: ${props => props.selected ? '#FFFFFF' : props.weekend ? '#426DC9' : '#14213D'};
`;