import styled from "styled-components";

export const CounterConteiner = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: #e6e5e5;
  border-radius: 8px;
  button {
    background-color: #e6e5e5;
    display: flex;
    height: 32px;
    padding: 8px;
    justify-content: center;
    align-items: center;
    gap: 4px;
    border: none;
    color: #8047f8;
    font-weight: bold;
    border-radius: 8px;
    cursor: pointer;

    &:hover {
      background-color: #c4c4c4;
    }
  }
`;
export const ButtonCounter = styled.button`
  background-color: #e6e5e5;
  display: flex;
  height: 38px;
  padding: 8px;
  justify-content: center;
  align-items: center;
  gap: 4px;
  border: none;
  color: #8047f8;
  font-weight: bold;
  border-radius: 8px;
`;
