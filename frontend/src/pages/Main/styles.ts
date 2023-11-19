import { styled } from "styled-components";

export const MainContainer = styled.div`
    display: flex;
    background-color: #fff;
    height: 100vh;
    width: 100vw;
    align-items: center;
    flex-direction: row;
    gap: 5rem;
    padding: 0 5rem;
    div.cadastrar{
        display: flex;
        flex-direction: column;
        h1{
            font-size: 2rem;
            margin-bottom: 1rem;
            color: #000;
        }
        form {
            display: flex;
            flex-direction: column;
            gap: 1rem;
            input {
                padding: 1rem;
                border-radius: 0.5rem;
                border: 1px solid #ccc;
                font-size: 1rem;
                /* remove default outline */
                outline: none;
                &:focus {
                    border-color: #000;
                }
            }
            select{
                padding: 1rem;
                border-radius: 0.5rem;
                border: 1px solid #ccc;
                font-size: 1rem;
                /* remove default outline */
                outline: none;
                &:focus {
                    border-color: #000;
                }
            }
        }
    }
    div.listar {
        display: flex;
        flex-direction: column;
        h1{
            font-size: 2rem;
            margin-bottom: 1rem;
            color: #000;
        }
        span, tr, th{
            color: #000;
        }
        table {
            border-collapse: collapse;
            width: 100%;
            th, td {
                text-align: left;
                padding: 1rem;
                border-bottom: 1px solid #ccc;
            }
            tr:hover {
                background-color: #ddd;
            }
            th {
                background-color: #000;
                color: #fff;
            }
        }
    }
`;
