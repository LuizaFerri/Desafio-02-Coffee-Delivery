import { useContext, useEffect, useState } from "react";
import logo from "../../assets/logo.svg";
import {
  CartContainer,
  StyledCardHeader,
  CartIcon,
  LocalizedCard,
  Quantity,
} from "./styles";
import { Link } from "react-router-dom";
import { ShoppingCart, MapPin } from "@phosphor-icons/react";
import { CartContext } from "../../Context/CartContext";

export function Header() {
  const { cart } = useContext(CartContext);
  const [totalQuantity, setTotalQuantity] = useState(0);
  useEffect(() => {
    const quantity = cart.reduce((total, item) => total + item.quantidade, 0);
    setTotalQuantity(quantity);
  }, [cart]);
  return (
    <CartContainer>
      <div>
        <Link to="/">
          <img src={logo} alt="Logo" />
        </Link>
      </div>
      <StyledCardHeader>
        <LocalizedCard>
          <MapPin weight="fill" size={20} color="#8047F8" />
          <span>Alfenas, MG</span>
        </LocalizedCard>
        <Link to="/cart">
          {totalQuantity > 0 && <Quantity>{totalQuantity}</Quantity>}
          <CartIcon>
            <ShoppingCart size={22} color="#C47F17" weight="fill" />
          </CartIcon>
        </Link>
      </StyledCardHeader>
    </CartContainer>
  );
}
