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
  font-size: 0.7em;
  height: 30px;
  width: 85%;
  background: transparent;
  border: none;
  border-bottom: 1px solid #000000;
  float: right;

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

  :hover {
    transform: scale(1.1);
  }
`;

export const Close = styled.span`
  color: #ccc;
  font-size: 30px;
  color: black;
  cursor: pointer;
  margin-left: 5px;

  :hover,
  focus {
    color: #312b7f;
  }
`;
