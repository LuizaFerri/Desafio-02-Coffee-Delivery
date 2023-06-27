import {
  Conteiner,
  DeliveryAddress,
  Title,
  Caption,
  Form,
  ContainerPedido,
  ContainerPagamento,
  CoffeeCard,
  Divider,
  Total,
  Counter,
  CoffeeInfo,
  AlignItems,
  ButtonCounter,
  CoffeeImage,
  ButtonsPagamento,
} from "./styles.js";
import {
  MapPinLine,
  CurrencyDollar,
  CreditCard,
  Bank,
  Money,
  Trash,
  Minus,
  Plus
} from "@phosphor-icons/react";

const coffee = [
  {
    id: 1,
    name: "Expresso Tradicional",
    price: 9.9,
    description: "O tradicional café feito com água quente e grãos moídos",
    tags: ["TRADICIONAL"],
    image: "https://www.datocms-assets.com/60403/1687639458-type-expresso.png",
  },
  {
    id: 2,
    name: "Expresso Americano",
    price: 9.9,
    description: "Expresso diluído, menos intenso que o tradicional",
    tags: ["TRADICIONAL"],
    image: "https://www.datocms-assets.com/60403/1687639454-type-americano.png",
  },
];

export function Cart() {
  return (
    <Conteiner>
      <div>
        <h1>Complete seu pedido</h1>
        <DeliveryAddress>
          <Title>
            <MapPinLine size={20} color="#C47F17" /> Endereço de entrega
          </Title>
          <Caption> informe o endereço onde deseja receber seu pedido</Caption>
          <Form>
            <input type="number" placeholder="CEP" />
            <input type="text" placeholder="Rua" />
            <input type="number" placeholder="Número" />
            <input type="text" placeholder="Complemento" />
            <input type="text" placeholder="Bairro" />
            <input type="text" placeholder="Cidade" />
            <input type="text" placeholder="UF" />
          </Form>
        </DeliveryAddress>
        <ContainerPagamento>
          <Title>
            {" "}
            <CurrencyDollar size={20} color="#8047F8" />
            Pagamento
          </Title>
          <span>
            O pagamento é feito na entrega. Escolha a forma que deseja pagar:
          </span>
          <ButtonsPagamento>
            <button>
              <CreditCard size={20} color="#8047F8" />
              Cartão de crédito
            </button>
            <button>
              <Bank size={20} color="#8047F8" />
              Cartão de débito
            </button>
            <button>
              <Money size={20} color="#8047F8" />
              Dinheiro
            </button>
          </ButtonsPagamento>
        </ContainerPagamento>
      </div>
      <div>
        <h1>Cafés selecionados</h1>
        <ContainerPedido>
          <CoffeeInfo>
            {coffee.map((item) => (
              <>
                <CoffeeCard key={item.id}>
                  <CoffeeImage src={item.image} alt={item.name} />
                  <AlignItems>
                    <h2>{item.name}</h2>
                    <div>
                      <Counter>
                        <ButtonCounter><Minus/></ButtonCounter> 1{" "}
                        <ButtonCounter><Plus/></ButtonCounter>
                      </Counter>
                      <button>
                        <Trash size={20} color="#8047F8"/>
                        Remover
                      </button>
                      <p>R$ {item.price.toFixed(2)}</p>
                    </div>
                  </AlignItems>
                </CoffeeCard>
                <Divider />
              </>
            ))}
            <Total>
              <div>
                <h2>Total de itens</h2> <p>R$ 9,90</p>
              </div>
              <div>
                <h2>Entrega </h2> <p>R$ 9,90</p>
              </div>
              <div>
                <h1>Total</h1> <span>R$ 9,90</span>
              </div>
              <button>Confirmar</button>
            </Total>
          </CoffeeInfo>
        </ContainerPedido>
      </div>
    </Conteiner>
  );
}
