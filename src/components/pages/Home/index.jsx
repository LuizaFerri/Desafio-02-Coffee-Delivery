import {
  Container,
  Content,
  Infos,
  IconCart,
  IconPackage,
  IconTimer,
  IconCoffee,
  SubTitle,
  Title,
  ContentTitle,
} from "./styles";
import { ShoppingCart, Package, Timer, Coffee } from "@phosphor-icons/react";

import imaheHome from "../../../assets/Imagem-home.png";
import { ListProducts } from "../../ListProducts";

export function Home() {
  return (
    <>
      <Container>
        <Content>
          <ContentTitle>
            <Title>Encontre o café perfeito para qualquer hora do dia</Title>
            <SubTitle>
              Com o Coffee Delivery você recebe seu café onde estiver, a
              qualquer hora
            </SubTitle>
          </ContentTitle>
          <Infos>
            <div>
              <IconCart>
                <ShoppingCart weight="fill" color="#fff" />
              </IconCart>
              <span>Compra simples e segura</span>
            </div>
            <div>
              <IconPackage>
                <Package weight="fill" color="#fff" />
              </IconPackage>
              <span>Embalagem mantém o café intacto</span>
            </div>
            <div>
              <IconTimer>
                <Timer weight="fill" color="#fff" />
              </IconTimer>
              <span>Entrega rápida e rastreada</span>
            </div>
            <div>
              <IconCoffee>
                <Coffee weight="fill" color="#fff" />
              </IconCoffee>
              <span>O café chega fresquinho até você</span>
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
