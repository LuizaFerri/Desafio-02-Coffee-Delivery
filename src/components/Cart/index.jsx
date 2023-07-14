import {
  Conteiner,
  Title,
  ContainerPedido,
  ContainerPagamento,
  CoffeeCard,
  // eslint-disable-next-line no-unused-vars
  Divider,
  Total,
  Counter,
  CoffeeInfo,
  AlignItems,
  ButtonCounter,
  CoffeeImage,
  ButtonsPaymentContainer,
  ButtonPagamento,
  DeliveryAddress,
  Form,
  Caption,
  Error,
  InputRua,
} from "./styles.js";
import {
  CurrencyDollar,
  CreditCard,
  Bank,
  Money,
  Trash,
  Minus,
  Plus,
  MapPinLine,
} from "@phosphor-icons/react";
import { CartContext } from "../../Context/CartContext.jsx";
import { useContext, useState } from "react";
import { useNavigate } from "react-router-dom";

export function Cart() {
  const [formError, setFormError] = useState(null);
  const navigate = useNavigate();

  const handleConfirmClick = () => {
    if (
      !address.cep ||
      !address.logradouro ||
      !address.numero ||
      !address.complemento ||
      !address.bairro ||
      !address.cidade ||
      !address.estado ||
      !paymentMethod
    ) {
      setFormError("Preencha todos os campos");
    } else if (!cart.length) {
      setFormError("Adicione itens ao carrinho");
    } else {
      {
        setFormError(null);
        navigate("/success");
      }
    }
  };
  const taxa = 9.9;
  const {
    cart,
    removeFromCart,
    address,
    setAddress,
    paymentMethod,
    setPaymentMethod,
  } = useContext(CartContext);
  const totalCart = cart.reduce(
    (total, item) => total + item.produto.price * item.quantidade,
    0
  );
  const total = totalCart > 0 ? totalCart + taxa : 0;

  const handleAddressChange = (e) => {
    setAddress({
      ...address,
      [e.target.name]: e.target.value,
    });
  };

  const handlePaymentChange = (method) => {
    setPaymentMethod(method);
  };

  return (
    <Conteiner>
      <div>
        <h1>Complete seu pedido</h1>
        <form>
          <DeliveryAddress>
            <Title>
              <MapPinLine size={20} color="#C47F17" /> Endereço de entrega
            </Title>
            <Caption>informe o endereço onde deseja receber seu pedido</Caption>
            <Form>
              <input
                type="number"
                name="cep"
                placeholder="CEP"
                value={address.cep}
                required
                onChange={handleAddressChange}
              />
              <InputRua
                type="text"
                name="logradouro"
                placeholder="Rua"
                value={address.logradouro}
                required
                onChange={handleAddressChange}
              />
              <input
                type="number"
                name="numero"
                placeholder="Número"
                value={address.numero}
                required
                onChange={handleAddressChange}
              />
              <input
                type="text"
                name="complemento"
                placeholder="Complemento"
                required
                value={address.complemento}
                onChange={handleAddressChange}
              />
              <input
                type="text"
                name="bairro"
                placeholder="Bairro"
                value={address.bairro}
                required
                onChange={handleAddressChange}
              />
              <input
                type="text"
                name="cidade"
                placeholder="Cidade"
                value={address.cidade}
                required
                onChange={handleAddressChange}
              />
              <input
                type="text"
                name="estado"
                placeholder="UF"
                value={address.estado}
                required
                onChange={handleAddressChange}
              />
            </Form>
          </DeliveryAddress>
        </form>
        <ContainerPagamento>
          <Title>
            <CurrencyDollar size={20} color="#8047F8" />
            Pagamento
          </Title>
          <span>
            O pagamento é feito na entrega. Escolha a forma que deseja pagar:
          </span>
          <ButtonsPaymentContainer>
            <ButtonPagamento
              selected={paymentMethod === "Cartão de crédito"}
              onClick={() => handlePaymentChange("Cartão de crédito")}
            >
              <CreditCard size={20} color="#8047F8" />
              Cartão de crédito
            </ButtonPagamento>
            <ButtonPagamento
              selected={paymentMethod === "Cartão de débito"}
              onClick={() => handlePaymentChange("Cartão de débito")}
            >
              <Bank size={20} color="#8047F8" />
              Cartão de débito
            </ButtonPagamento>
            <ButtonPagamento
              selected={paymentMethod === "Dinheiro"}
              onClick={() => handlePaymentChange("Dinheiro")}
            >
              <Money size={20} color="#8047F8" />
              Dinheiro
            </ButtonPagamento>
          </ButtonsPaymentContainer>
        </ContainerPagamento>
      </div>
      <div>
        <h1>Cafés selecionados</h1>
        <ContainerPedido>
          <CoffeeInfo>
            {cart.map((item) => (
              <CoffeeCard key={item.produto.id}>
                <CoffeeImage src={item.produto.image} alt={item.produto.name} />
                <AlignItems>
                  <h2>{item.produto.name}</h2>
                  <div>
                    <Counter>
                      <ButtonCounter>
                        <Minus />
                      </ButtonCounter>
                      {item.quantidade}
                      <ButtonCounter>
                        <Plus />
                      </ButtonCounter>
                    </Counter>
                    <button onClick={() => removeFromCart(item.produto.id)}>
                      <Trash size={20} color="#8047F8" />
                      Remover
                    </button>
                    <p>
                      R$ {(item.produto.price * item.quantidade).toFixed(2)}
                    </p>
                  </div>
                </AlignItems>
              </CoffeeCard>
            ))}
            <Total>
              <div>
                <h2>Total de itens</h2> <p>R$ {total.toFixed(2)}</p>
              </div>
              <div>
                <h2>Entrega </h2> <p>{total > 0 ? taxa.toFixed(2) : "0.00"}</p>
              </div>
              <div>
                <h1>Total</h1>
                <span>R$ {total > 0 ? total.toFixed(2) : "0.00"}</span>
              </div>
              <button onClick={handleConfirmClick}>Confirmar</button>
            </Total>
            <Error> {formError && <p>{formError}</p>}</Error>
          </CoffeeInfo>
        </ContainerPedido>
      </div>
    </Conteiner>
  );
}
