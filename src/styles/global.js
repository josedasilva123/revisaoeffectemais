import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
    *{
        font-family: Arial, Helvetica, sans-serif;
        margin: 0;
        padding: 0;
        box-sizing: border-box;
    }

    ul, ol, li{
        list-style: none;
    }
    button{
        display: inline-flex;
        align-items: center;
        justify-content: center;
        height: 38px;
        padding: 0 1rem;
    }

    img{
        max-width: 100%;
    }

    body{
        background: red;
    }

`