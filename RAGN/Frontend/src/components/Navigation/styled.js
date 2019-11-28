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

export const Image = styled.img`
  width: 15%;
  height: 15%;
`;

export const Pages = styled.th`
  color: black;
  float: right;
  font-family: 'Lato', Helvetica, sans-serif;
  font-size: 20px;
  margin: ${props => (props.contact ? '25px 100px 0 0' : '25px 30px 0 0')};
  position: relative;
  text-decoration: none;
  z-index: 1;
`;

export const SideLinks = styled.button`
  color: white;
  font-family: 'Lato', Helvetica, sans-serif;
  display: inline-block;
  margin-top: ${props => (props.resume ? '30px' : '')};
  background: none;
  border: none;
  outline: none;
`;

export const Links = styled(SideLinks)`
  ::after {
    content: '';
    display: block;
    width: 0;
    height: 2px;
    background: white;
    transition: width 0.3s;
    margin-top: 4px;
  }

  :hover {
    color: white;
    opacity: 1;
    cursor: pointer;
  }

  :hover::after {
    width: 100%;
    outline: none;
  }
`;

export const List = styled.tr`
  background-color: none;
  list-style-type: none;

  &:hover ${Links} {
    opacity: 0.5;
  }

  &:hover ${Links}:hover {
    opacity: 1;
  }
`;
