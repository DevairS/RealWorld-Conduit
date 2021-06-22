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
  color: ${(props) => props.theme.colors.primary};
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
  color: ${(props) => props.theme.colors.textLight};
  padding: 0px 10px;
  white-space: pre;
  &:hover {
    color: ${(props) => props.theme.colors.text};
  }
`;
