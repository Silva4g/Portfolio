import styled from 'styled-components';
import Flicking from '@egjs/react-flicking';

export const Container = styled(Flicking)`
  width: 90%;
  height: 100vh;
  background: inherit;
  border-radius: 5px;
  margin: auto;
  display: flex;
  align-items: center;
  justify-content: center;

  > div {
    border-radius: 5px;
    width: 103%;
    background: inherit;
    height: 100%;
  }
`;
