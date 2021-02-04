import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  width: 40%;
  height: 100%;
  border-left: 2px solid #E5E5E5;
  overflow: hidden;

  @media (max-width: 1024px) {
    width: 100%;
    border: none;
  }
`;

export const ScheduleOverflow = styled.div`
  padding-left: 2rem;
  padding-top: 2rem;
  overflow: auto;

  &::-webkit-scrollbar {
    width: 6px;
    height: 6px;
  }

  &::-webkit-scrollbar-track {
    background: #f1f1f1;
  }

  &::-webkit-scrollbar-thumb {
    background: #888888;
  }

  &::-webkit-scrollbar-thumb:hover {
    background: #555555;
  }
`;

export const CurrentDay = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: flex-start;
  background-color: #14213D;
  padding-left: 2rem;
  width: 65%;
  height: 100px;
  font-size: 2rem;
  color: #FFFFFF;

  @media (max-width: 1024px) {
    font-size: 4rem;
  }
`;

export const CreateReminderButton = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  background-color: #426DC9;
  width: 35%;
  height: 100px;
  font-size: 2rem;
  color: #FFFFFF;
  cursor: pointer;

  &:hover {
    background-color: #5682e0;
  }

  @media (max-width: 1024px) {
    font-size: 4rem;
  }
`;

