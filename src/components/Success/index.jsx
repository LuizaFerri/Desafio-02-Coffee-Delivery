import { useContext } from "react";
import { CartContext } from "../../Context/CartContext";
import motorcycleMen from "../../assets/Illustration.png";
import {
  SuccessContainer,
  Title,
  SubTitle,
  SuccessTitles,
  ContainerInfos,
} from "./styles.js";

export function SuccessPage() {
  const { address, paymentMethod } = useContext(CartContext);


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
              Entrega em:{" "}
              <b>{`Rua ${address.logradouro}, ${address.numero} ${address.bairro} - ${address.cidade}, ${address.estado}`}</b>
            </span>
          </div>
          <div>
            <span>Previsão de entrega:</span> <b>20 min - 30 min </b>
          </div>
          <div>
            <span>Pagamento na entrega </span> <b>{paymentMethod}</b>
          </div>
        </ContainerInfos>
      </div>
      <div>
        <img src={motorcycleMen} alt="Ilustração de um entregador de moto" />
      </div>
    </SuccessContainer>
  );
}
