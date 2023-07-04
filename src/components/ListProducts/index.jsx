import { useContext, useState } from "react";
import { CartContext } from "../../Context/CartContext";
import {
  ContainerCoffe,
  CoffeCart,
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

export function ListProducts() {
  const { addToCart } = useContext(CartContext);
  const [quantity, setQuantity] = useState(
    produtos.reduce((acc, produto) => {
      acc[produto.id] = 1;
      return acc;
    }, {})
  );

  const incrementQuantity = (produtoId) => {
    setQuantity((prevState) => ({
      ...prevState,
      [produtoId]: prevState[produtoId] + 1,
    }));
  };

  const decrementQuantity = (produtoId) => {
    setQuantity((prevState) => ({
      ...prevState,
      [produtoId]: Math.max(prevState[produtoId] - 1, 0),
    }));
  };

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
                <Price> R${produto.price.toFixed(2)} </Price>
                <Counter>
                  <button onClick={() => decrementQuantity(produto.id)}>
                    <Minus size={20} color="#8047F8" />
                  </button>{" "}
                  {quantity[produto.id] || 0}{" "}
                  <button onClick={() => incrementQuantity(produto.id)}>
                    <Plus size={20} color="#8047F8" />
                  </button>
                </Counter>
                <CoffeCart
                  onClick={() => addToCart(produto, quantity[produto.id])}
                  title="Adicionar ao carrinho"
                >
                  <ShoppingCart size={22} color="#ffffff" weight="fill" />
                </CoffeCart>
              </CartPrice>
            </ContainerCoffeDescription>
          </ContainerCoffe>
        ))}
      </ContainerCoffes>
    </Container>
  );
}
