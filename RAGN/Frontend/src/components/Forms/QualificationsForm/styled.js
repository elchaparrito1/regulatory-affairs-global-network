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

export const Input = styled.input`
  /* margin: 0 auto; */
  font-size: 1em;
  height: 30px;
  width: 75%;
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

export const Box = styled.div`
  background-color: #edeae7;
  box-shadow: 0 0 4px rgba(0, 0, 0, 0.2);
  width: 65%;
  transition: transform 0.2s;
  word-wrap: break-word;
  overflow-wrap: break-word;
  text-overflow: ellipsis;
  overflow: hidden;
  word-break: break-word;

  :hover {
    transform: scale(1.1);
  }
`;

export const Remove = styled.button`
  color: #ccc;
  font-size: 20px;
  color: black;
  cursor: pointer;
  margin-left: 5px;
  margin-right: 5px;
  border: none;
  background-color: transparent;
  text-align: center;
  outline-color: #312b7f;

  :hover,
  focus {
    color: #312b7f;
    outline-color: #312b7f;
  }
`;

export const Span = styled.button`
  font-size: 35px;
  background-color: transparent;
  outline-color: #312b7f;
  color: #939393;
  border: 0;

  :hover {
    cursor: pointer;
    background-color: transparent;
    border: 0;
    color: #312b7f;
    outline-color: #312b7f;
  }

  :active {
    outline-color: #312b7f;
    border: 0;
  }
`;

export const Label = styled.label`
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

export const TextMessage = styled.p`
  font-size: 0.8em;
  text-align: left;
  margin-top: ${props => (props.box ? '-10px' : '-13px')};
  margin-right: 195px;
`;
