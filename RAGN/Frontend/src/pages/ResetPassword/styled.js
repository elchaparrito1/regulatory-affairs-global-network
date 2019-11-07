import styled from 'styled-components';

export const Row = styled.div`
  align-items: center;
  display: flex;
  justify-content: center;
  margin-top: 15px;
  &::after {
    content: '';
    clear: both;
    display: table;
    margin: 0 auto;
  }
`;

function getWidthString(span) {
  if (!span) return;

  let width = (span / 12) * 100;
  return `width ${width}%;`;
}

export const Column = styled.div`
  float: center;
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
  height: 460px;
  width: 400px;
  padding: 30px 30px 0 30px;
  position: relative;
  transform: translateY(30%);

  .input-style {
    font-size: 15px;
    padding: 8px 15px;
    background-color: #939393;
    outline: none;
    color: #edeae7;
    float: center;

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

export const Input = styled.input`
  margin: 0 auto;
  font-size: 1em;
  height: 30px;
  width: 100%;
  margin-bottom: 15px;
  background: transparent;
  border: none;
  border-bottom: 1px solid #000000;
  float: left;

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
  font-size: 15px;
  padding: 8px 15px;
  background-color: #939393;
  outline: none;
  color: #edeae7;
  float: right;

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

export const TextMessage = styled.p`
  font-size: 1em;
  text-align: left;
`;

export const Image = styled.img`
  width: 65%;
  height: 65%;
  margin: 0 auto;
`;

export const Label = styled.label`
  margin-right: 10px;
  align-items: left;
  display: flex;
  justify-content: left;
`;

export const FormLabel = styled(Label)`
  font-size: 0.9em;
  align-items: left;
  display: flex;
  justify-content: left;

  :focus {
    color: #312b7f;
  }
`;
