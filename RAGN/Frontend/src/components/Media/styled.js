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

  margin-right: ${props => (props.icon ? '-35px' : '0')};
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
    outline: none;
    border-bottom: 1px solid #312b7f;
  }
`;
