import styled from "styled-components";

export const Container = styled.div`
    display: flex;
    width: 80%;
    margin: 0 auto;
    justify-content: center;
    align-items: center;
    h1{
        font-family: "baloo 2";
        font-weight: extra-bold;
        font-size:  48px;
    }

`

export const ContentTitle = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    gap: 16px;
    margin-bottom: 80px;
`

const BaseTitle = styled.span`
    display: flex;
    width: 588px;
    flex-direction: column;
    align-items: flex-start;
    gap: 16px;
`

export const Title = styled(BaseTitle)`
        font-size: 48px;
        font-family: Baloo 2;
        font-style: normal;
        font-weight: 800;
        line-height: 130%;
        color:#272221;
`

export const SubTitle = styled(BaseTitle)`
        font-size: 20px;
        font-family: Roboto;
        font-style: normal;
        font-weight: 400;
        line-height: 130%;
        color: #403937
`

export const Content = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    width: 80%;
    margin: 0 auto;
    margin-bottom: 80px;

`;

export const Infos = styled.div`
    display: grid;
    grid-template-columns: 1fr 1fr;
    grid-gap: 20px;

    div{
        display: flex;
       align-items: center;
        
    }
    img{
        margin-right: 10px;
    }

    span{
        margin-left: 12px;
        font-size: 16px;
    }

`;

const BaseIcon = styled.div`
    display: flex;
    padding: 8px;
    justify-content: center;
    align-items: center;
    gap: 8px;

    border-radius: 1000px;
`

export const IconCart = styled(BaseIcon)`
    background-color: #C47F17;
`

export const IconPackage = styled(BaseIcon)`
    background-color: #574F4D;
`

export const IconTimer = styled(BaseIcon)`
    background-color: #DBAC2C;
`
export const IconCoffee = styled(BaseIcon)`
    background-color: #8047F8;
`