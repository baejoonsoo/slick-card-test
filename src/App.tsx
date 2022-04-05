import { useEffect, useRef, useState } from "react";
import styled from "styled-components";

const CARD_LIST = [1, 2, 3, 4, 5];

function App() {
  const [count, setCount] = useState<number>(0);
  const [cardList, setCardList] = useState<number[]>([]);

  const preCardRef = useRef<HTMLDivElement>(null);
  const centerCardRef = useRef<HTMLDivElement>(null);
  const nextCardRef = useRef<HTMLDivElement>(null);

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

  // useEffect(() => {
  //   setTimeout(() => {
  //     if (centerCardRef && centerCardRef.current) {
  //       centerCardRef.current.style.transform = ``;
  //     }
  //   }, 500);
  // }, [cardList]);

  const showNextCardList = () => {
    if (centerCardRef && centerCardRef.current) {
      // centerCardRef.current.style.transform = `translateX(-112px)`;
    }
  };

  const showPreCardList = () => {
    if (centerCardRef && centerCardRef.current) {
      // centerCardRef.current.style.transform = `translateX(112px)`;
    }
  };

  const addCount = () => {
    setCount((prev) => {
      return prev === CARD_LIST.length - 1 ? 0 : prev + 1;
    });
    showNextCardList();
    getCardList();
  };

  const delCount = () => {
    setCount((prev) => (prev === 0 ? CARD_LIST.length - 1 : prev - 1));
    showPreCardList();
    getCardList();
  };

  return (
    <div>
      <button onClick={addCount}>add</button>
      <button onClick={delCount}>d</button>
      <Container>
        <Card ref={preCardRef} id="pre">
          {cardList[0]}
        </Card>
        <Card ref={centerCardRef} id="center">
          {cardList[1]}
        </Card>
        <Card ref={nextCardRef} id="next">
          {cardList[2]}
        </Card>
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
  background-color: white;
  height: 300px;
  border: black 1px solid;
  width: 200px;
  border-radius: 10px;
  z-index: 2;

  font-size: 40px;
  justify-content: center;
  align-items: center;
  display: flex;

  transition: 0.5s ease-in-out;
  &#pre,
  &#next {
    z-index: 1;
    background-color: #b3b3b3;
  }

  &#pre {
    margin-right: -90px;
  }

  &#next {
    margin-left: -90px;
  }
`;
