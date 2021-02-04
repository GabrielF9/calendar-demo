import React from 'react';
import { Container, DayContent } from "./styles";

function DayContainer(props) {
  const { content, weekend, selected, isWeekHeader, onClick } = props;

  return (
    <Container weekend={weekend} selected={selected} isWeekHeader={isWeekHeader || content === ''} onClick={isWeekHeader ? (e) => { e.stopPropagation(); } : (e) => { e.stopPropagation(); onClick(); }}>
      <DayContent weekend={weekend} selected={selected}>{content}</DayContent>
    </Container>
  );
}

export default DayContainer;