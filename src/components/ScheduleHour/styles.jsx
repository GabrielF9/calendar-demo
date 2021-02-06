import styled from "styled-components";
import { convertHexToRgba } from "../../helpers/utils";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: flex-end;
  width: 100%;
  min-height: 100px;
`;

export const ScheduleHeader = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  width: 100%;
`;

export const Hour = styled.p`
  font-size: 2rem;
  font-weight: 500;
  color: #E5E5E5;
  width: 20%;
  text-align: end;

  @media (max-width: 1024px) {
    font-size: 2rem;
    width: 30%
  }
`;

export const Divider = styled.div`
  height: 2px;
  width: 80%;
  margin-left: 1rem;
  background-color: #E5E5E5;

  
  @media (max-width: 1024px) {
    width: 70%
  }
`;

export const Reminder = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: center;
  padding-left: 1rem;
  width: 75%;
  height: 100px;
  margin-right: 1rem;
  margin-bottom: 1rem;
  background-color: ${props => convertHexToRgba(props.color || '#ef476f', 0.25)};
  color: ${props => props.color || '#ef476f'};
  cursor: pointer;
`;
