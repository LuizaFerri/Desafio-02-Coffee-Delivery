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

`;

