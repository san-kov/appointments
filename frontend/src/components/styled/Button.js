import styled from 'styled-components'

export default styled.button`
  width: 100px;
  height: 30px;
  background: #42aaf4;
  border: 0;
  outline: none;
  color: white;
  font-weight: bold;
  cursor: pointer;
  transition: all 0.1s ease;

  &:hover {
    transform: scale(1.04);
  }
`
