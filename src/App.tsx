import { useState } from "react";
import styled, { css } from "styled-components";

const list = [
  "../card1.png",
  "../card2.png",
  "../card3.png",
  "../card4.png",
  "../card5.png",
];

export default function App() {
  const [tempList, setTempList] = useState([
    "../card4.png",
    "../card5.png",
    "../card1.png",
    "../card2.png",
    "../card3.png",
  ]);

  const before = () => {
    const temp = tempList;
    const end = tempList[tempList.length - 1];
    temp.length = tempList.length - 1;
    temp.splice(0, 0, end);
    setTempList([...temp]);
  };

  const after = () => {
    const temp = tempList;
    const start = temp.shift() ?? "";
    temp.splice(temp.length, 0, start);
    setTempList([...temp]);
  };

  return (
    <Wrap>
      <button onClick={before}>뒤로</button>
      <button onClick={after}>앞으로</button>
      <Cards>
        {list.map((data, index) => (
          <Card
            key={index}
            // style={{ marginLeft: `${tempList.indexOf(_) * 100}px` }}
            index={tempList.indexOf(data)}
            len={Math.floor(list.length / 2)}
            bg={data}
          ></Card>
        ))}
      </Cards>
    </Wrap>
  );
}

const Wrap = styled.div`
  display: flex;
  & button {
    background-color: grey;
    cursor: pointer;
  }
`;

const Card = styled.div`
  width: 200px;
  height: 290px;
  display: flex;
  justify-content: center;
  align-items: center;
  position: absolute;
  margin-top: 100px;
  background-repeat: no-repeat;
  background-size: cover;
  background-position: center;
  transition: 0.5s;

  ${({ index, len, bg }: { index: number; len: number; bg: string }) => {
    console.log(index, len);
    return css`
      margin-left: ${len + 1 >= index && len - 1 <= index
        ? index * 210
        : len * 210}px;
      opacity: ${len + 1 >= index && len - 1 <= index ? "1" : "0"};
      background-image: url(${bg});
    `;
  }}
`;

const Cards = styled.div`
  width: 300px;
`;
