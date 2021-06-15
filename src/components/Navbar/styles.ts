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
  display: grid;
  grid-template-columns: repeat(3, auto);
  grid-gap: 20px;
  list-style: none;
  text-align: center;
`;

export const NavItemLinks = styled.a`
  cursor: pointer;
  text-decoration: none;
  color: #c3c3c3;
  &:hover {
    color: #9b9b9b;
  }

  &:active {
    color: black;
  }
`;
