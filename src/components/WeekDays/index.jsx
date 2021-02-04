import React from 'react';
import { Container } from "./styles";
import DayContainer from "../DayContainer";
import { resumeWeekDays } from "../../helpers/utils";

function WeekDays(props) {
  const { isWeekHeader, days } = props;

  return (
    <Container isWeekHeader={isWeekHeader}>
      {
        isWeekHeader
          ? resumeWeekDays.map((weekDay, index) => <DayContainer key={weekDay} isWeekHeader={isWeekHeader} content={weekDay} weekend={index === 0 || index === resumeWeekDays.length - 1} selected={!isWeekHeader} />)
          : days
      }
    </Container>
  );
}

export default WeekDays;