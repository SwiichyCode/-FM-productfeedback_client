import { createGlobalStyle } from "styled-components";

export const GlobalStyles = createGlobalStyle`
    * {
        margin: 0;
        padding: 0;
        box-sizing: border-box;
    }

    body, button, input {
        font-family: 'Jost', sans-serif;
    }

    html {
        font-size: 62.5%;
    }

    :root {
        --purple: #AD1FEA;
        --white: #fff;
        --white-200: #F2F4FE;
        --red: #d73737;
        --grey-200: #f7f8fd;
        --dark-600: #3A4374; 

        --font-normal: 400;
        --font-semibold: 600;
        --font-bold: 700;
        --text-xxs: 1.3rem;
        --text-xs: 1.4rem;
        --text-sm: 1.5rem;

        --rouded: 0.5rem;
        --rouded-xl: 1rem;
        --transition: all 0.2s ease-in-out;
    }
`;
