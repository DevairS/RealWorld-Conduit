import React, { useContext } from 'react';
import {
  NavItemLinks,
  TextLogo,
  Wrapper,
  WrapperItems,
  WrapperLogo,
} from './styles';
import { MenuItems, MenuItemsAuthenticated } from './menuItems';
import AuthContext from '../../Context/AuthContext';

const Navbar: React.FC = () => {
  const { authenticated } = useContext(AuthContext);
  return (
    <Wrapper>
      <WrapperLogo>
        <TextLogo>Conduit</TextLogo>
      </WrapperLogo>
      <WrapperItems>
        {authenticated
          ? MenuItemsAuthenticated.map((item, index) => {
              return (
                <li key={index}>
                  <NavItemLinks href={item.url}>{item.title}</NavItemLinks>
                </li>
              );
            })
          : MenuItems.map((item, index) => {
              return (
                <li key={index}>
                  <NavItemLinks href={item.url}>{item.title}</NavItemLinks>
                </li>
              );
            })}
      </WrapperItems>
    </Wrapper>
  );
};

export default Navbar;
