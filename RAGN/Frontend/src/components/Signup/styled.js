import styled from 'styled-components';
import Select from 'react-select';

export const Row = styled.div`
  align-items: center;
  display: flex;
  justify-content: center;
  &::after {
    content: '';
    clear: both;
    display: table;
  }
`;

function getWidthString(span) {
  if (!span) return;

  let width = (span / 12) * 100;
  return `width ${width}%;`;
}

export const Column = styled.div`
  float: left;
  ${({ xs }) => (xs ? getWidthString(xs) : 'width: 100%')};

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
  margin-right: 40px;
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
  margin: 0 auto;
  font-size: 1em;
  height: 30px;
  width: 75%;
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
    outline-color: #312b7f;
    border-bottom: 1px solid #312b7f;
  }
`;

export const Button = styled.button`
  font-size: 15px;
  padding: 8px 15px;
  background-color: #939393;
  color: #edeae7;
  margin-left: 40px;
  border: 0;
  outline-color: #312b7f;

  :hover {
    cursor: pointer;
    background-color: #312b7f;
    color: white;
    outline-color: #312b7f;
  }

  :active {
    outline-color: #312b7f;
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

export const TextMessage = styled.p`
  font-size: 0.8em;
  text-align: right;
  margin-top: -25px;
  margin-right: 15px;
`;
