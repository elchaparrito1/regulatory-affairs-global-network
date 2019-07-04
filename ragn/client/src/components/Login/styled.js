import styled from "styled-components";

export const Row = styled.div`
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
    height: 400px;
    width: 400px;
    padding: 0 30px 0 30px;
`;

export const Text = styled.p`
    font-size: 2em;
    font-family: 'Montserrat', sans-serif;
    text-align: center;
`;

export const TextMessage = styled.p`
    font-size: 0.8em;
    font-family: 'Montserrat', sans-serif;
    text-align: right;
    color: red;
    margin-top: -15px;
`;

export const Input = styled.input`
    font-family: 'Montserrat', sans-serif;
    margin: 0 auto;
    font-size: 1em;
    height: 30px;
    width: 99%;
    margin-bottom: 15px;

    background: transparent;
    border: none;
    border-bottom: 1px solid #000000;
    
    
    :focus {
        border-color: #312b7f;
        outline: 0 none;
    }
`;

export const Label = styled.label`
    font-family: 'Montserrat', sans-serif;
    text-align: center;
`;

export const Button = styled.button`
    font-family: 'Montserrat', sans-serif;
    font-size: 15px;
    padding: 8px 15px;
    background-color: #939393;
    outline: none;
    color: #edeae7;
    
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

export const TextSelection = styled.p`
    font-family: 'Montserrat', sans-serif;
    font-size: 0.9em;
    display: block;
    margin-left: 5px;

    :hover {
        color: #312b7f;
        opacity: 1;
        cursor: pointer;
    }

    :hover::after {
        width: 100%;
        outline: none;
    }

`;

export const Icon = styled.img`
    width: 20px;

    @media only screen and (min-width: 320px) and (max-width: 767px) {
        height: ${props => props.chevron ? "30px" : "90px;"};
        width: ${props => props.chevron ? "30px" : "90px;"};
    }

    @media only screen and (min-width: 767px) and (max-width: 1024px) {
        height: ${props => props.chevron ? "40px" : "100px;"};
        width: ${props => props.chevron ? "40px" : "100px;"};
    }
`;

export const P = styled.p`
    font-family: 'Montserrat', sans-serif;
    font-size: 20px;
    color: ${props => props.error ? "red" : "black"}
`;

