import styled from "styled-components";

export const CartContainer = styled.header`
  display: flex;
  align-items: center;
  justify-content: space-around;
  margin-top: 32px;
  margin-bottom: 80px;
`;
export const StyledCardHeader = styled.div`
  display: flex;
  align-items: center;
`;

export const CartIcon = styled.div`
  display: inline-flex;
  padding: 8px;
  justify-content: center;
  align-items: center;
  gap: 4px;
  background-color: #f1e9c9;
  border-radius: 6px;
`;

export const LocalizedCard = styled.div`
  width: 143px;
  height: 38px;
  background-color: #ebe5f9;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 8px;
  margin-right: 12px;

  span {
    margin-left: 5px;
  }
`;

export const Quantity = styled.div`
  display: flex;
  width: 20px;
  height: 20px;
  justify-content: center;
  align-items: center;
  position: absolute;
  top: 25px;
  margin-left: 25px;
  border-radius: 1000px;
  background-color: #c47f17;
  font-size: 12px;
  font-weight: 700;
  color: #ffffff;
`;
