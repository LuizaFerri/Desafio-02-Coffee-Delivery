import logo from "../../assets/logo.svg";
import {
  CartContainer,
  StyledCardHeader,
  CartIcon,
  LocalizedCard,
} from "./styles";
import { Link } from "react-router-dom";
import { ShoppingCart, MapPin } from "@phosphor-icons/react";

export function Header() {
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
          <CartIcon>
            <ShoppingCart size={22} color="#C47F17" weight="fill" />
          </CartIcon>
        </Link>
      </StyledCardHeader>
    </CartContainer>
  );
}
