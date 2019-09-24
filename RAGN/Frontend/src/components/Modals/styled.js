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

export const Modal = styled.div`
  display: block;
  position: fixed;
  z-index: 1;
  left: 0;
  top: 0;
  height: 100%;
  width: 100%;
  overflow: auto;
  background-color: rgba(0, 0, 0, 0.5);
`;

export const ModalContent = styled.div`
  margin: 10% auto;
  width: 60%;
  box-shadow: 0 5px 8px 0 rgba(0, 0, 0, 0.2), 0 7px 20px 0 rgba(0, 0, 0, 0.17);
  animation-name: modalopen;
  animation-duration: var(--modal-duration);

  @media only screen and (min-width: 320px) and (max-width: 1024px) {
    width: 100%;
  }
`;

export const ModalHeader = styled.div`
  background: #edeae7;
  padding: 10px 40px;
  color: black;
  margin: 0 auto;
`;

export const ModalFooter = styled.div`
  background: #edeae7;
  padding: 10px;
  color: black;
  text-align: center;
`;

export const ModalBody = styled.div`
  padding: 10px 20px;
  background: #edeae7;
  margin: 0 auto;
`;

export const Close = styled.span`
  color: #ccc;
  float: right;
  font-size: 30px;
  color: black;
  cursor: pointer;

  :hover,
  focus {
    color: #003366;
  }
`;

export const Button = styled.button`
  border: none;
  background-color: #939393;
  color: white;
  cursor: pointer;
  font-size: 15px;
  padding: 8px 15px;
  float: right;
  font-family: 'Montserrat', sans-serif;
  outline: none;

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

  @media only screen and (min-width: 320px) and (max-width: 1024px) {
    border: none;
    color: none;
  }
`;

//For the EmailModal code
export const Container = styled.div`
  border-radius: 5px;
`;
