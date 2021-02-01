import { useEffect, useState } from "react";
import { MediumText, RowCenteredStart, ThinText } from "../../../components/Global";
import { getCurrentDay } from "../../../helpers/utils";
import { Container, CreateReminderButton, CurrentDay } from "./styles";

function Schedule() {
  const [currentDay, setCurrentDay] = useState('');
  const [currentDayName, setCurrentDayName] = useState('');

  useEffect(() => {
    const { currentDay, currentDayName } = getCurrentDay();

    setCurrentDay(currentDay);
    setCurrentDayName(currentDayName);
  }, [setCurrentDay, setCurrentDayName]);

  return (
    <Container>
      <RowCenteredStart>
        <CurrentDay>
          <ThinText>{currentDay},&nbsp;</ThinText>
          <MediumText>{currentDayName}</MediumText>
        </CurrentDay>
        <CreateReminderButton>
          <MediumText>+ CREATE</MediumText>
        </CreateReminderButton>
      </RowCenteredStart>
    </Container>
  );
}

export default Schedule;