import { getSaudation } from "../../../helpers/utils";
import { Container, Saudation } from "./styles";

function Calendar() {
  return (
    <Container>
      <Saudation>{getSaudation()}</Saudation>
    </Container>
  );
}

export default Calendar;