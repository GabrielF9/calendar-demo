import Calendar from "./Calendar";
import Schedule from "./Schedule";
import { Container } from "./styles";

function Home() {
  return (
    <Container>
      <Calendar />
      <Schedule />
    </Container>
  );
}

export default Home;