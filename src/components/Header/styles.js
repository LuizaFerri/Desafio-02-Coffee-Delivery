import styled from "styled-components";

export const CartContainer = styled.header`
    display: flex;
    align-items: center;
    justify-content: space-around;
    margin-top:32px;
    margin-bottom: 80px;
`;
export const StyledCardHeader = styled.div`
    display: flex;
    align-items: center;`;

export const CartIcon = styled.div`
    display: inline-flex;
    padding: 8px;
    justify-content: center;
    align-items: center;
    gap: 4px;
    background-color: #F1E9C9;
    border-radius: 6px;

    span{
        display: flex;
        width: 20px;
        height: 20px;
        justify-content: center;
        align-items: center;
        position: relative;
       
        border-radius: 1000px;
        background-color: #C47F17;

        font-size: 12px;
        font-weight: 700;
        color: #FFFFFF;
    }
`;

export const LocalizedCard = styled.div`
    width: 143px;
    height: 38px;
    background-color:#EBE5F9;
    display: flex;
    align-items: center;
    justify-content: center;
    border-radius: 8px;
    margin-right: 12px;

   span{
        margin-left: 5px;
    }
`
