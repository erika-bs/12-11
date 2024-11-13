import { useState } from 'react';
import styled from 'styled-components';


export default function Counter() {
  const [count, setCount] = useState(0);

  function handleClick() {
    setCount(count + 1);
  }

  return (
    <Button onClick={handleClick}>
      vc me clicou {count} vezes.
    </Button>
  );
}


const Button = styled.button`
  background-color: violet;
  margin-top:20px;
  margin-bottom:20px;
  border-radius: 5px solid;
  color: white;
  padding:5px;
`