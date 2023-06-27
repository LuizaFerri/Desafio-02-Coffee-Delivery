import {
  ContainerCoffe,
  ContainerCoffeCart,
  ContainerCoffes,
  Container,
  ImageCoffe,
  Tags,
  ContainerCoffeDescription,
  CartPrice,
  Price,
  Counter,
} from "./styles";
import produtos from "../../cafes.json";
import { Minus, Plus } from "@phosphor-icons/react";
import { ShoppingCart } from "@phosphor-icons/react";
import { Link } from "react-router-dom";

export function ListProducts() {
  return (
    <Container>
      <h2>Nossos cafés</h2>
      <ContainerCoffes>
        {produtos.map((produto) => (
          <ContainerCoffe key={produto.id}>
            <ImageCoffe src={produto.image} />
            <ContainerCoffeDescription>
              <div>
                {produto.tags.map((tag, index) => (
                  <Tags key={index}>{tag}</Tags>
                ))}
              </div>
              <h3>{produto.name}</h3>
              <p>{produto.description}</p>
              <CartPrice>
                <Price> R${produto.price} </Price>
                <Counter>
                  <button>
                    <Minus size={20} color="#8047F8" />
                  </button>{" "}
                  1{" "}
                  <button>
                    <Plus size={20} color="#8047F8" />
                  </button>
                </Counter>
                <ContainerCoffeCart>
                  <Link to="/cart">
                    <ShoppingCart size={22} color="#ffffff" weight="fill" />
                  </Link>
                </ContainerCoffeCart>
              </CartPrice>
            </ContainerCoffeDescription>
          </ContainerCoffe>
        ))}
      </ContainerCoffes>
    </Container>
  );
}
