import React, { useEffect, useState } from "react";
import { MediumText, RowCenteredStart, ThinText } from "../../../components/Global";
import ScheduleHour from "../../../components/ScheduleHour";
import { getCurrentDay } from "../../../helpers/utils";
import { Container, CreateReminderButton, ScheduleOverflow, CurrentDay } from "./styles";

function Schedule(props) {
  const { actualDate, createNewReminder, update, setUpdate, editReminder } = props;

  const [currentDay, setCurrentDay] = useState('');
  const [currentDayName, setCurrentDayName] = useState('');

  const [schedules, setSchedules] = useState([]);

  const [reminders, setReminders] = useState([]);

  useEffect(() => {
    const _current = getCurrentDay(actualDate);

    setCurrentDay(_current.currentDay);
    setCurrentDayName(_current.currentDayName);

    const _schedules = ['12 am'];
    for (let i = 1; i < 12; i++) {
      _schedules.push(`${i} am`);
    }
    _schedules.push(`12 pm`);
    for (let i = 1; i < 12; i++) {
      _schedules.push(`${i} pm`);
    }

    let _reminders = localStorage.getItem('reminders') ? JSON.parse(localStorage.getItem('reminders')) : [];
    _reminders = _reminders.filter(reminder => parseInt(reminder.date.split('-')[2]) === actualDate.getDate());

    setReminders(_reminders);

    setSchedules(_schedules);
    setUpdate(false);
  }, [setCurrentDay, setCurrentDayName, setSchedules, actualDate, update, setUpdate]);

  return (
    <Container>
      <RowCenteredStart>
        <CurrentDay>
          <ThinText>{currentDay},&nbsp;</ThinText>
          <MediumText>{currentDayName}</MediumText>
        </CurrentDay>
        <CreateReminderButton onClick={createNewReminder}>
          <MediumText>+ CREATE</MediumText>
        </CreateReminderButton>
      </RowCenteredStart>
      <ScheduleOverflow>
        {schedules.map((schedule) => <ScheduleHour key={schedule} schedule={schedule} reminders={reminders} editReminder={editReminder} />)}
      </ScheduleOverflow>
    </Container>
  );
}

export default Schedule;