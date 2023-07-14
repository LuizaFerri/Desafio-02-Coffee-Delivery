import { useContext } from "react";
import { CartContext } from "../../Context/CartContext";
import { MapPin, Timer, CurrencyDollarSimple } from "@phosphor-icons/react";
import motorcycleMen from "../../assets/Illustration.png";
import empty from "../../assets/empty.jpg";
import {
  SuccessContainer,
  Title,
  SubTitle,
  SuccessTitles,
  ContainerInfos,
  IconTimer,
  IconMoney,
  IconMap,
  Error,
} from "./styles.js";

export function SuccessPage() {
  const { address, paymentMethod } = useContext(CartContext);
  if (!address || !paymentMethod) {
    return <Error>Você não possui pedidos
      <img src={empty} alt="Ilustração de um carrinho de compras vazio" />
    </Error>;
  }
  return (
    <SuccessContainer>
      <div>
        <SuccessTitles>
          <Title>Uhu! Pedido confirmado</Title>
          <SubTitle>
            Agora é só aguardar que logo o café chegará até você
          </SubTitle>
        </SuccessTitles>
        <ContainerInfos>
          <div>
            <span>
              <IconMap>
                <MapPin color="#fff" weight="fill" size={18} />
              </IconMap>
              Entrega em:{" "}
            </span>
            <b>{`Rua ${address.logradouro}, ${address.numero} ${address.bairro} - ${address.cidade}, ${address.estado}`}</b>
          </div>
          <div>
            <span>
              <IconTimer>
                <Timer color="#fff" weight="fill" size={18} />
              </IconTimer>
              Previsão de entrega:
            </span>{" "}
            <b>20 min - 30 min </b>
          </div>
          <div>
            <span>
              <IconMoney>
                <CurrencyDollarSimple color="#fff" size={18} />
              </IconMoney>
              Pagamento na entrega{" "}
            </span>{" "}
            <b>{paymentMethod}</b>
          </div>
        </ContainerInfos>
      </div>
      <div>
        <img src={motorcycleMen} alt="Ilustração de um entregador de moto" />
      </div>
    </SuccessContainer>
  );
}
