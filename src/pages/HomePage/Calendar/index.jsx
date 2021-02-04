import React from 'react';
import WeekDays from "../../../components/WeekDays";
import { getCurrentMonth, getMonthDaysPerWeek, getSaudation } from "../../../helpers/utils";
import { Container, Saudation, CalendarContainer, CalendarContent } from "./styles";
import { MediumText } from "../../../components/Global";
import DayContainer from "../../../components/DayContainer";

function Calendar(props) {
  const { actualDate, setActualDate } = props;

  return (
    <Container>
      <Saudation>{getSaudation()}</Saudation>
      <CalendarContainer>
        <MediumText fontSize={'2rem'}>{getCurrentMonth()}</MediumText>
        <CalendarContent>
          <WeekDays isWeekHeader />
          {getMonthDaysPerWeek().map((weekDays, index) =>
            <WeekDays key={`weekDay${index}`} days={weekDays.map((weekDay, index) =>
              <DayContainer
                key={`${weekDay}${index}`}
                content={weekDay}
                weekend={index === 0 || index === weekDays.length - 1}
                selected={parseInt(weekDay) === actualDate.getDate()}
                onClick={() => {
                  let date = actualDate;
                  let auxDate = new Date(date);
                  auxDate.setDate(weekDay);

                  setActualDate(auxDate);
                }}
              />
            )} />
          )}
        </CalendarContent>
      </CalendarContainer>
    </Container>
  );
}

export default Calendar;