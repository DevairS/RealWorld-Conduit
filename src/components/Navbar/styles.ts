import styled from 'styled-components';

export const Wrapper = styled.div`
  display: flex;
  justify-content: space-around;
  align-items: center;
  height: 70px;
`;

export const WrapperLogo = styled.div`
  cursor: pointer;
`;

export const TextLogo = styled.h1`
  color: green;
  font-size: 1.4rem;
`;

export const WrapperItems = styled.div`
  display: flex;
  list-style: none;
  justify-content: center;
  align-items: center;
`;

export const NavItemLinks = styled.a`
  cursor: pointer;
  text-decoration: none;
  color: #c3c3c3;
  margin: 0px 10px;
  &:hover {
    color: #9b9b9b;
  }

  &:active {
    color: black;
  }
`;

export const Button = styled.button`
  background-color: green;
  color: #fff;
  padding: 5px;
  opacity: 1;
  border-radius: 12px;
  width: 80px;

  &:hover {
    opacity: 0.5;
  }
`;
