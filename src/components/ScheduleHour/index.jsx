import React, { useEffect, useState } from 'react';
import { convert12hTo24h } from '../../helpers/utils';
import { RegularText } from '../Global';
import { Container, Hour, Divider, ScheduleHeader, Reminder } from "./styles";

function ScheduleHour(props) {
  const { schedule, reminders, editReminder } = props;

  const [hourReminders, setHourReminders] = useState([]);

  const onEdit = (id) => {
    editReminder(id);
  }

  useEffect(() => {
    let hour = convert12hTo24h(schedule);

    let _reminders = [];
    for (let reminder of reminders) {
      if (reminder.time.split(':')[0] === hour) {
        _reminders.push(reminder);
      }
    }

    setHourReminders(_reminders);
  }, [reminders, schedule]);

  return (
    <Container>
      <ScheduleHeader>
        <Hour>{schedule}</Hour>
        <Divider />
      </ScheduleHeader>
      {
        hourReminders.map((hourReminder) => (
          <Reminder key={hourReminder.id} color={hourReminder.color} onClick={(e) => { e.stopPropagation(); onEdit(hourReminder.id); }}>
            <RegularText fontSize="26px">{hourReminder.name}</RegularText>
            <RegularText fontSize="18px">Forecast: {hourReminder.weather}</RegularText>
          </Reminder>
        ))
      }
    </Container>
  );
}

export default ScheduleHour;