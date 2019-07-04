import styled from "styled-components";
import Select from "react-select";

export const Row = styled.div`
    align-items: center;
    display: flex;
    justify-content: center;
    &::after {
        content: "";
        clear: both;
        display: table;
    }
`;

function getWidthString(span) {
    if (!span) return;

    let width = span / 12 * 100;
    return `width ${width}%;`;
}

export const Column = styled.div`
    float: left;
    ${({ xs }) => (xs ? getWidthString(xs) : "width: 100%")};

    @media only screen and (min-width: 768px) {
        ${({ sm }) => sm && getWidthString(sm)};
    }

    @media only screen and (min-width: 992px) {
        ${({ md }) => md && getWidthString(md)};
    }

    @media only screen and (min-width: 1200px) {
        ${({ lg }) => lg && getWidthString(lg)};
    }

`;

export const Box = styled.div`
    margin: 0 auto;
    background-color: #edeae7;
    box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2);
    height: 70px;
    width: 400px;
    padding: 0 30px 0 30px;
    
    align-items: center;
    display: flex;
    justify-content: center;
`;

export const Label = styled.label`
    font-family: 'Montserrat', sans-serif;
    margin-right: 10px;

    align-items: center;
    display: flex;
    justify-content: center;
`;

export const FormLabel = styled(Label)`
    align-items: left;
    display: flex;
    justify-content: left;

    :focus {
        color: #312b7f;
    }
`;

export const Input = styled.input`
    font-family: 'Montserrat', sans-serif;
    margin: 0 auto;
    font-size: 1em;
    height: 30px;
    width: 95%;
    margin-bottom: 15px;
    

    background: transparent;
    border: none;
    border-bottom: 1px solid #000000;
    
    ::placeholder {
        padding: 5px;
    }

    :focus {
        ::placeholder {
            color: #312b7f;
        }
        color: #312b7f;
        outline: none;
        border-bottom: 1px solid #312b7f;
    }
`;

export const Button = styled.button`
    font-family: 'Montserrat', sans-serif;
    font-size: 15px;
    padding: 8px 15px;
    background-color: #939393;
    outline: none;
    color: #edeae7;
    margin-left: 10px;
    
    :hover {
        cursor: pointer;
        background-color: #312b7f;
        color: white;
        outline: none;
    }

    :active {
        outline: none;
        border: 0;
    }
`;

export const Selector = styled(Select)`
    width: 50%;

    input:active {
        color: white;
        cursor: pointer;
    }
`;