import styled from 'styled-components';
import { Paper } from '@material-ui/core';

interface NavItemProps {
  actived: boolean;
}

export const Wrapper = styled(Paper)`
  display: flex;
  justify-content: space-around;
  align-items: center;
  background-color: #fff;
  height: 8vh;
`;

export const WrapperLogo = styled.div`
  cursor: pointer;
`;

export const TextLogo = styled.h1`
  font-family: 'Teko', sans-serif;
  font-weight: normal;
  color: ${(props) => props.theme.colors.text};
  font-size: 3rem;
  @media (max-width: 375px) {
    font-size: 2rem;
  }
`;

export const LogoDot = styled.span`
  color: ${(props) => props.theme.colors.primary};
  font-size: 3rem;
  @media (max-width: 375px) {
    font-size: 2rem;
  }
`;

export const MenuIcon = styled.div`
  display: none;
  font-size: 2rem;
  cursor: pointer;
  color: ${(props) => props.theme.colors.primary};
  @media (max-width: 960px) {
    display: block;
    position: absolute;
    top: -8px;
    right: 0;
    transform: translate(-100%, 60%);
  }
  @media (max-width: 320px) {
    top: -16px;
  }
`;

export const NavLinks = styled.a<NavItemProps>`
  cursor: pointer;
  color: ${(props) => props.theme.colors.primary};
  text-decoration: none;
  padding: 0.5rem 1rem;
  font-size: 1.4rem;
  color: ${(props) => props.theme.colors.text};
  text-decoration: ${(props) => (props.actived ? 'underline' : 'none')};
  text-decoration-color: ${(props) => props.theme.colors.primary};

  &:hover {
    color: ${(props) => props.theme.colors.primary};
    transition: all 0.2s ease-out;
  }

  @media (max-width: 960px) {
    text-align: center;
    color: #fff;
    padding: 20px;
    width: 100%;
    display: table;
  }
  @media (max-width: 375px) {
    font-size: 1rem;
  }
`;

export const NavMenu = styled.div`
  display: grid;
  grid-template-columns: repeat(5, auto);
  grid-gap: 5px;
  list-style: none;
  text-align: center;
  width: 70vw;
  justify-content: end;

  @media (max-width: 960px) {
    display: flex;
    flex-direction: column;
    width: 100%;
    height: 500px;
    position: absolute;
    top: 80px;
    right: -100%;
    opacity: 1;
    transition: all 0.5s ease;
    display: none;
    box-shadow: 10px 10px 10px 10px rgba(0, 0, 0, 1);
  }
`;

export const NavMenuActive = styled.div`
  @media (max-width: 960px) {
    background-color: ${(props) => props.theme.colors.primary};
    left: 0;
    opacity: 1;
    transition: all 0.5s ease;
    z-index: 1;
    display: flex;
    flex-direction: column;
    width: 100%;
    position: absolute;
    top: 50px;
    opacity: 1;
    transition: all 0.5s ease;
  }
`;
