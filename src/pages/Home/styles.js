import styled from "styled-components"

export const Wrapper = styled.div`
    width: 100%;
    height: 100vh;
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;

    @media (max-width: 425px) {
        .logo{
            width: 263px;
            margin-top: 100px
        }
    }

`

export const Card = styled.div`
    background: #fff;
    width: 580px;
    border-radius: 8px;
    padding: 20px;
    margin-top: 15px;
    box-shadow: 0 6px 10px 0 rgba(0,0,0,0.20);

    h2 {
        font-size: 22px;
        color: #392D2D;
        margin-bottom: 10px;
    }

    @media (max-width: 425px) {
        width: 314px;
        margin-bottom: 50px;

        .meme {
            width: 314px
        }
    }

    @media (max-width: 320px) {
        width: 250px;
        margin-bottom: 50px;

        .meme {
            width: 250px
        }
    }
`

export const Templates = styled.div`
    width: 100%;
    height: 180px;
    background-color: #D1D1D1;
    border-radius: 8px; 
    overflow-x: auto;
    margin-bottom: 30px;
    
    button {
        background: transparent;
        margin-right: 10px;
        margin-left: 15px;
        margin-top: 15px;
        border: 2px solid transparent;


        &.selected {
        border-color: #E9D842
    }
        
        img {
            width: 53px;
            height: 53px;
        }
    }
`

export const Form = styled.form`
    input {
        width: 100%;
        height: 40px;
        border-radius: 8px; 
        border: 1px solid #DBDBDB;
        font-size: 14px;
        margin-bottom: 10px
    }
    input::-webkit-input-placeholder {
        padding: 15px
    }
`

export const Button = styled.button`
    width: 100%;
    height: 40px;
    border-radius: 8px; 
    border: 0;
    background: #E9D842;
    color: black;
    font-weight: bold;
    transition: background 0.2s ease-in;
    font-size: 14px;


    &:hover {
        background: #CABC3E;
    }
`