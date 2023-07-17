import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

export const ContainerCoffes = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr 1fr;
  grid-gap: 40px;
  margin-top: 80px;

  @media (max-width: 1327px) {
    grid-template-columns: 1fr 1fr 1fr;
  }

  @media (max-width: 1000px) {
    grid-template-columns: 1fr 1fr;
  }

  @media (max-width: 700px) {
    grid-template-columns: 1fr;
  }
`;

export const ImageCoffe = styled.img`
  position: relative;
  transform: translateY(-50px);
  width: 120px;
  height: 120px;
`;

export const ContainerCoffe = styled.div`
  background-color: #f3f2f2;
  width: 256px;
  height: 320px;
  border-radius: 6px 36px 6px 36px;
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-bottom: 40px;
  padding: 10px;
`;

export const CoffeCart = styled.button`
  background-color: #4b2995;
  width: 38px;
  border-radius: 8px;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  height: 38px;
  cursor: pointer;
  border: none;

  &:hover {
    background-color: #8047f8;
  }
`;

export const ContainerCoffeDescription = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  p {
    text-align: center;
    font-size: 14px;
    color: #8d8686;
    padding: 0 10px;
  }
  div {
    display: flex;
  }
`;

export const Tags = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: #f1e9c9;
  color: #c47f17;
  max-width: 81px;
  border-radius: 8px;
  font-size: 10px;
  font-weight: bold;
  padding: 2px;
  margin-bottom: 5px;
`;

export const CartPrice = styled.div`
  display: flex;
  justify-content: space-evenly;
  width: 100%;
  align-items: center;
`;

export const Price = styled.div`
  text-align: right;
  font-size: 18px;
  font-family: Roboto;
  line-height: 130%;
  color: #574f4d;
  font-weight: bolder;
`;
