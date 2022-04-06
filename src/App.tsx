import { useState } from "react";
import styled from "styled-components";

let list = [1, 2, 3, 4, 5];

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
      {list.map((_, index) => (
        <Card
          key={index}
          style={{ marginLeft: `${tempList.indexOf(_) * 100}px` }}
        >
          {_}
        </Card>
      ))}
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
`;
