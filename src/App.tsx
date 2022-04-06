import { useState } from "react";
import styled, { css } from "styled-components";

const list = [1, 2, 3, 4, 5];

export default function App() {
  const [tempList, setTempList] = useState([4, 5, 1, 2, 3]);

  const before = () => {
    const temp = tempList;
    const end = tempList[tempList.length - 1];
    temp.length = tempList.length - 1;
    temp.splice(0, 0, end);
    setTempList([...temp]);
  };

  const after = () => {
    const temp = tempList;
    const start = temp.shift() ?? -1;
    temp.splice(temp.length, 0, start);
    setTempList([...temp]);
  };

  return (
    <Wrap>
      <button onClick={before}>뒤로</button>
      <button onClick={after}>앞으로</button>
      <Cards>
        {list.map((_, index) => (
          <Card
            key={index}
            // style={{ marginLeft: `${tempList.indexOf(_) * 100}px` }}
            index={tempList.indexOf(_)}
            len={Math.floor(list.length / 2)}
          >
            {_}
          </Card>
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
  width: 100px;
  height: 100px;
  display: flex;
  justify-content: center;
  align-items: center;
  border: 1px solid grey;
  position: absolute;
  margin-top: 100px;
  transition: 0.5s;

  ${({ index, len }: { index: number; len: number }) => {
    console.log(index, len);
    return css`
      margin-left: ${len + 1 >= index && len - 1 <= index
        ? index * 100
        : len * 100}px;
      opacity: ${len + 1 >= index && len - 1 <= index ? "1" : "0"};
    `;
  }}
`;

const Cards = styled.div`
  width: 300px;
`;
