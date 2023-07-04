import styled from "styled-components";

export const SuccessContainer = styled.div`
  display: flex;
  width: calc(100% - 160px);
  justify-content: center;
`;

export const SuccessTitles = styled.div`
  display: flex;
  width: 552px;
  flex-direction: column;
  flex-shrink: 0;
`;

export const Title = styled.span`
  font-size: 32px;
  font-family: Baloo 2;
  font-style: normal;
  font-weight: 800;
  line-height: 130%;
  color: #c47f17;
`;

export const SubTitle = styled.span`
  font-size: 20px;
  font-family: Roboto;
  font-style: normal;
  font-weight: 400;
  line-height: 130%;
  color: #403937;
`;

export const ContainerInfos = styled.div`
  display: flex;
  width: 526px;
  padding: 40px;
  flex-direction: column;
  align-items: flex-start;
  margin-top: 40px;
  gap: 32px;
  border-radius: 6px 36px 6px 36px;
    border: 2px solid #8047F8;
`;
