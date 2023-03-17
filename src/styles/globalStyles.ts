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

    body {
        background: var(--grey-200);
    }

    :root {
        --purple: #AD1FEA;
        --white: #fff;
        --blue: #4661E6;
        --white-200: #F2F4FE;
        --red: #d73737;
        --grey-200: #f7f8fd;
        --grey-400: #CFD7FF;
        --dark-600: #3A4374; 
        
        --font-normal: 400;
        --font-medium: 500;
        --font-semibold: 600;
        --font-bold: 700;
        --text-xxs: 1.3rem;
        --text-xs: 1.4rem;
        --text-sm: 1.5rem;
        --text-md: 1.6rem;
        --text-lg: 1.8rem;
        --text-xl: 2rem;
        --text-2xl: 2.4rem;
        --text-3xl: 3.2rem;

        --rouded: 0.5rem;
        --rouded-xl: 1rem;
        --rounded-2xl: 1.6rem;
        --rounded-3xl: 2.4rem;
        --transition: all 0.2s ease-in-out;
    }
`;
