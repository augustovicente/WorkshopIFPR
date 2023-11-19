import { createGlobalStyle } from "styled-components";

export default createGlobalStyle`
    * {
        margin: 0;
        padding: 0;
        box-sizing: border-box;
    }

    input, button {
        border: 0;
    }

    *,
    *::after,
    *::before {
        box-sizing: border-box;
        padding: 0;
        margin: 0;
    }

    html {
        overflow-x: hidden;
    }

    body {
        position: relative;
        font-family: ${({ theme }) => theme.fontFamily.default}, sans-serif;
        font-size: 1rem; // 16px
        text-rendering: optimizeLegibility;
        -webkit-font-smoothing: antialiased !important;
        font-weight: 400;
        width: 100%;
    }
    html, body, #root, .App {
        height: 100%;
    }

    input[type=number]::-webkit-inner-spin-button,
    input[type=number]::-webkit-outer-spin-button {
        -webkit-appearance: none;
        margin: 0;
    }

    button, textarea, a, span, p, strong {
        font-family: 'Inter', sans-serif;
    }

    .ant-radio-wrapper {
        color: white;
    }

    .slick-dots-bottom {
        display: flex !important;
        gap: 18px !important;
        li {
            &.slick-active {
                width: 16px !important;
            }

            button {
                height: 10px !important;
                min-width: 32px;
                border-radius: 25px !important;
            }
        }
    }

    @media (max-width: 767px) {
        html {
            font-size: 0.875rem;
        }
    }

    @media (max-width: 380px) {
        html {
            font-size: 0.75rem;
        }
    }
`;
