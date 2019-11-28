import styled from 'styled-components';

export const Row = styled.div`
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
  height: 450px;
  width: 400px;
  padding: 0 30px 0 30px;

  .input-style {
    font-size: 15px;
    padding: 8px 15px;
    background-color: #939393;
    outline: none;
    color: #edeae7;
    float: left;

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
  }
`;

export const TextMessage = styled.p`
  font-size: 0.9em;
  text-align: left;
  width: 80%;
`;

export const ErrorMessage = styled(TextMessage)`
  font-size: 1em;
  width: 100%;
  text-align: center;
  color: #e68a00;
`;

export const Input = styled.input`
  float: left;
  font-size: 1em;
  height: 30px;
  width: 30%;
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

export const Label = styled.label`
  text-align: center;
`;

export const Button = styled.button`
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

export const Link = styled.button`
  font-size: 0.9em;
  float: right;
  margin-top: -25px;
  background-color: transparent;
  border: none;
  outline-color: #312b7f;

  :hover {
    cursor: pointer;
    color: #312b7f;
    outline-color: #312b7f;
  }
`;
