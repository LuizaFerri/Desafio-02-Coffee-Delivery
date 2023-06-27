import styled from "styled-components";

export const Conteiner = styled.div`
    gap: 32px;
    display: flex;
    max-width: calc(100% - 400px); 
    margin-bottom: 40px;
    padding: 0 200px;
    h1{
        font-size: 18px;
    font-family: Baloo 2;
    font-weight: 700;
    line-height: 130%;
    }


    @media (max-width: 768px) {
        flex-direction: column;
        padding: 0 20px;
        max-width: 100%;
    }

`;


export const DeliveryAddress = styled.div`
    background-color: #F3F2F2;
    border-radius: 6px;
    display: flex;
    padding: 38px;
    flex-direction: column;
    align-items: flex-start;
    align-self: stretch;

    input{

        display: flex;
        width: 200px;
        padding: 12px;
        align-items: center;
        gap: 4px;
        border-radius: 4px;
        border: 1px solid  #E6E5E5;
        background:  #EDEDED;
    }


    @media (max-width: 768px) {
        padding: 20px;
    }
`;

export const Title = styled.div`
        font-size: 16px;
        font-family: Roboto;
        line-height: 130%;
        color:#403937;
        display: flex;
        align-items: center;
        justify-content: center;

        img{
            margin-right: 8px;
        }
        
`;

export const Caption = styled.div`
    font-size: 14px;
    font-family: Roboto;
    line-height: 130%;
    color:#574F4D;
    margin-bottom: 32px;
    margin-left: 32px;
`;


export const Form = styled.div`
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    gap: 16px;
    align-self: stretch;
`

export const ContainerPedido = styled.div`
    background-color: #F3F2F2;
    display: flex;
    width: 448px;
    padding: 40px;
    flex-direction: column;
    align-items: flex-start;
    gap: 24px;
    border-radius: 6px 44px;
`;

export const ContainerPagamento = styled.div`
    display: flex;
    padding: 40px;
    flex-direction: column;
    align-items: flex-start;
    align-self: stretch;
    background-color: #F3F2F2;
    margin-top: 40px;
        button{
            display: flex;
            padding: 16px;
            align-items: center;
            gap: 12px;
            flex: 1 0 0;
            border-radius: 6px;
            background-color: #E6E5E5;
            border: none;
            cursor: pointer;
            height: 51px;
            width: 179px;
            font-size: 12px;
            line-height: 160%;
            text-transform: uppercase;
        }

        span{
            line-height: 130%;
            font-size: 14px;
            margin-bottom: 32px;
            color:#574F4D;
            margin-top: 5px;
        }
`

export const CoffeeCard = styled.div`
    display: flex;
    padding: 8px 4px;
    align-items: center;
    align-self: stretch;
    gap: 20px;

    h2{
        font-size: 16px;
        font-family: Roboto;
        line-height: 130%;
        color:#403937
    }

`;

export const CoffeeImage = styled.img`
        width: 64px;
        height: 64px;
`;

export const AlignItems   = styled.div`
        display: flex;
        flex-direction: column;
        width: 100%;

        div{
            display: flex;
            justify-content: space-around;
            align-items: center;
        }
        button{
            display: flex;
            height: 32px;
            padding: 0px 8px;
            justify-content: center;
            align-items: center;
            gap: 4px;
            border-radius: 6px;
            background-color: #E6E5E5;
            border: none;
        }
        p{
            color:#574F4D;
            font-size: 16px;
            font-weight: 700;
        }
`

export const CoffeeInfo = styled.div`
    width: 100%;
`

export const Divider = styled.div`
        width: 100%;
        height: 1px;
        align-self: stretch;
        background-color: #E6E5E5;
        
`

export const Total = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: space-between;

    div{
        display: flex;
        justify-content: space-between;
        align-items: center;
    }
    h2{
        font-size: 14px;
        font-family: Roboto;
        line-height: 130%;
        color:#574F4D;
    }
    h1{
        font-size: 20px;
        font-family: Roboto;
        font-weight: 700;
        line-height: 130%;
        color:#403937
    }
    span{
            font-size: 20px;
            font-weight: bold;
            color: #403937
        }

    button{
        display: flex;
        padding: 12px 8px;
        justify-content: center;
        align-items: center;
        gap: 4px;
        align-self: stretch;
        border-radius: 6px;
        background-color: #DBAC2C;
        border: none;
        font-size: 14px;
        font-family: Roboto;
        font-weight: 700;
        line-height: 160%;
        text-transform: uppercase;
        color:#FFFFFF;
        cursor: pointer;

        &:hover{
            background-color: #C69D2B;
        }
    }
`

export const Counter = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    background-color:#E6E5E5;
    border-radius: 8px;
`
export const ButtonCounter = styled.button`
  background-color: #E6E5E5;
        display: flex;
        height: 38px;
        padding: 8px;
        justify-content: center;
        align-items: center;
        gap: 4px;
        border: none;
        color:#8047F8;
        font-weight: bold;
        border-radius: 8px;
`

export const ButtonsPagamento = styled.div`
    display: flex;
    gap:20px

`
