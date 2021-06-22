import styled from 'styled-components';

export const Wrapper = styled.div`
  display: flex;
  justify-content: space-around;
  align-items: center;
  height: 70px;
  background-color: ${(props) => props.theme.colors.primary};
`;

export const WrapperLogo = styled.div`
  cursor: pointer;
`;

export const TextLogo = styled.h1`
  color: ${(props) => props.theme.colors.textReverse};
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
  color: ${(props) => props.theme.colors.textReverse};
  margin: 0px 10px;
  &:hover {
    color: ${(props) => props.theme.colors.textHover};
  }
`;

export const Button = styled.button`
  background-color: ${(props) => props.theme.colors.secundary};
  color: ${(props) => props.theme.colors.textReverse};
  padding: 5px;
  border: none;
  border-radius: 10px;
  width: 80px;

  &:hover {
    opacity: 0.7;
  }
`;
