import { Minus, Plus } from "@phosphor-icons/react";
import { ButtonCounter, CounterConteiner } from "./styles.js";

// eslint-disable-next-line react/prop-types
const Counter = ({ quantity, onIncrement, onDecrement }) => {
  return (
    <CounterConteiner>
      <ButtonCounter onClick={onDecrement}>
        <Minus size={20} color="#8047F8" />
      </ButtonCounter>{" "}
      {quantity || 0}{" "}
      <ButtonCounter onClick={onIncrement}>
        <Plus size={20} color="#8047F8" />
      </ButtonCounter>
    </CounterConteiner>
  );
};

export default Counter;
