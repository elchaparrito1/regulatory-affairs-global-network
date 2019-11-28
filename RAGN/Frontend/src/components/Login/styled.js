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

export const Text = styled.p`
  font-size: 2em;
  text-align: center;
`;

export const TextMessage = styled.p`
  font-size: 0.8em;
  text-align: right;
  color: red;
  margin-top: -15px;
  margin-right: ${props => (props.password ? '40px' : '5px')};
`;

export const LoginMessage = styled(TextMessage)`
  color: #e68a00;
  text-align: left;
  font-size: 1em;
`;

export const Input = styled.input`
  margin: 0 auto;
  font-size: 1em;
  height: 30px;
  width: 99%;
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
  outline-color: #312b7f;
  color: #edeae7;

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

export const TextSelection = styled.p`
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
  width: 30px;
  height: 30px;
  outline: none;

  :hover {
    cursor: pointer;
    outline: none;
  }
`;

export const P = styled.p`
  font-size: 0.9em;
  float: right;
  margin-top: 10px;

  :hover {
    cursor: pointer;
    color: #312b7f;
  }
`;
