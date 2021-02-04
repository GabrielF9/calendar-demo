import { Box } from '@material-ui/core';
import React from 'react';
import { Container, Hour, Divider, ScheduleHeader } from "./styles";

function ScheduleHour(props) {
  const { schedule, reminders } = props;
  return (
    <Container>
      <ScheduleHeader>
        <Hour>{schedule}</Hour>
        <Divider />
      </ScheduleHeader>
    </Container>
  );
}

export default ScheduleHour;