import { useState } from "react";
import styled from "styled-components";

const CARD_LIST = [1, 2, 3, 4, 5];

function App() {
  const [count, setCount] = useState<number>(3);
  const [cardList, setCardList] = useState<number[]>([]);

  const getCardList = () => {
    const cards = [count];

    cards.push((count + 1) % CARD_LIST.length);
    cards.push((count + 2) % CARD_LIST.length);

    const unSiiftNum1 = (count - 1) % CARD_LIST.length;
    cards.unshift(
      unSiiftNum1 >= 0 ? unSiiftNum1 : CARD_LIST.length + unSiiftNum1 + 1
    );
    const unSiiftNum2 = (count - 2) % CARD_LIST.length;
    cards.unshift(
      unSiiftNum2 >= 0 ? unSiiftNum2 : CARD_LIST.length + unSiiftNum2 + 1
    );

    console.log(cards);

    setCardList(cards);
  };

  getCardList();

  return <Container></Container>;
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
`;
