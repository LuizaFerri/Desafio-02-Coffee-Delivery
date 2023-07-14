import styled from "styled-components";

export const SuccessContainer = styled.div`
  display: flex;
  width: calc(100% - 160px);
  justify-content: center;
  align-items: center;


  @media (max-width: 1407px) {
    width: 100%;
   
  }

  @media (max-width: 1104px) {
    flex-direction: column;
    gap: 40px;
  }

  div{
    @media (max-width: 625px) {
      display: flex;
      align-items: center;
      justify-content: center;
      flex-direction: column;
    }
  }
`;

export const SuccessTitles = styled.div`
  display: flex;
  width: 552px;
  flex-direction: column;
  flex-shrink: 0;

  @media (max-width: 1407px) {
    width: 400px;
    padding: 0 40px;
  }
`;

export const Title = styled.span`
  font-size: 32px;
  font-family: Baloo 2;
  font-style: normal;
  font-weight: 800;
  line-height: 130%;
  color: #c47f17;

  @media (max-width: 648px) {
    font-size: 24px;
  }
`;

export const SubTitle = styled.span`
  font-size: 20px;
  font-family: Roboto;
  font-style: normal;
  font-weight: 400;
  line-height: 130%;
  color: #403937;

  @media (max-width: 648px) {
    font-size: 16px;
  }
`;

export const ContainerInfos = styled.div`
  margin-right: 102px;
  display: flex;
  width: 526px;
  padding: 40px;
  flex-direction: column;
  align-items: flex-start;
  margin-top: 40px;
  gap: 32px;
  border-radius: 6px 36px 6px 36px;
  border: 2px solid #8047f8;

  span{
    display: flex;
    align-items: center;
    gap: 8px;
  }

  b{
    margin-left: 60px;
  }

  @media (max-width: 1407px) {
    width: 500px;
    padding: 50px;
    margin-right: 0;
  }

  @media (max-width: 648px) {
    width: 300px;
  }
`;

const BaseIcon = styled.div`
  display: flex;
  padding: 8px;
  justify-content: center;
  align-items: center;
  gap: 8px;
  width: 32px;
  height: 32px;
  border-radius: 1000px;
`;

export const IconTimer = styled(BaseIcon)`
  background-color: #dbac2c;
`;

export const IconMoney = styled(BaseIcon)`
  background-color: #c47f17;
`;

export const IconMap = styled(BaseIcon)`
  background-color: #8047f8;
`;


export const Error = styled.div`
  display: flex;
  width: 100%;
  justify-content: center;
  align-items: center;
  gap: 8px;
  font-size: 20px;
  font-weight: bold;
  flex-direction: column;

  img{
    width: 500px;
  }

`