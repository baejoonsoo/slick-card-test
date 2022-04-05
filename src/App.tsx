import { useEffect, useState } from "react";
import styled from "styled-components";

const CARD_LIST = [1, 2, 3, 4, 5];

function App() {
  const [count, setCount] = useState<number>(0);
  const [cardList, setCardList] = useState<number[]>([]);

  const getCardList = () => {
    const cards = [count];

    cards.push((count + 1) % CARD_LIST.length);

    const unSiiftNum1 = (count - 1) % CARD_LIST.length;
    cards.unshift(
      unSiiftNum1 >= 0 ? unSiiftNum1 : CARD_LIST.length + unSiiftNum1
    );

    console.log(cards);
    setCardList(cards);
  };

  useEffect(() => {
    getCardList();
    setCount(1);
  }, []);

  const addCount = () => {
    setCount((prev) => {
      return prev === CARD_LIST.length - 1 ? 0 : prev + 1;
    });
    getCardList();
  };

  const delCount = () => {
    setCount((prev) => (prev === 0 ? CARD_LIST.length - 1 : prev - 1));
    getCardList();
  };

  return (
    <div>
      <button onClick={addCount}>add</button>
      <button onClick={delCount}>d</button>
      <Container>
        <Card className="pre">{cardList[0]}</Card>
        <Card>{cardList[1]}</Card>
        <Card className="next">{cardList[2]}</Card>
      </Container>
    </div>
  );
}

export default App;

const Container = styled.div`
  display: flex;
  width: 100%;
  height: 100vh;
  align-items: center;
  justify-content: center;
`;

const Card = styled.div`
  background-color: bisque;
  height: 300px;
  border: black 1px solid;
  width: 200px;
  border-radius: 10px;
  z-index: 2;

  font-size: 40px;
  justify-content: center;
  align-items: center;
  display: flex;

  &.pre,
  &.next {
    z-index: 1;
    transform: scale(0.9);
  }

  &.pre {
    margin-right: -90px;
  }

  &.next {
    margin-left: -90px;
  }
`;
