import {
  Container,
  Content,
  Infos,
} from "./styles";
import cart from "../../../assets/cart-fundo-laranja.svg";
import caixa from "../../../assets/caixa.svg";
import temporizador from "../../../assets/temporizador.svg";
import cafeFundoRoxo from "../../../assets/cafe-fundo-roxo.svg";


import imaheHome from "../../../assets/Imagem-home.png";
import { ListProducts } from "../../ListProducts";


export function Home() {
  return (
    <>
      <Container>
        <Content>
          <h1>Encontre o café perfeito para qualquer hora do dia</h1>
          <p>
            Com o Coffee Delivery você recebe seu café onde estiver, a qualquer
            hora
          </p>
          <Infos>
            <div>
              <img src={cart} />
              Compra simples e segura
            </div>
            <div>
              <img src={caixa} />
              Embalagem mantém o café intacto
            </div>
            <div>
              <img src={temporizador} />
              Entrega rápida e rastreada
            </div>
            <div>
              <img src={cafeFundoRoxo} />O café chega fresquinho até você
            </div>
          </Infos>
        </Content>
        <div>
          <img src={imaheHome} />
        </div>
      </Container>
      <ListProducts />
    </>
  );
}
