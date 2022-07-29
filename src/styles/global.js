import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
    *{
        margin: 0;
        padding: 0;
        box-sizing: border-box;
    }

    ul, ol, li{
        list-style: none;
    }

    img{
        max-width: 100%;
    }

    body{
        background: red;
    }

`