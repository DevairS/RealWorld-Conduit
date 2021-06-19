import React, { useContext } from 'react';
import {
  NavItemLinks,
  TextLogo,
  Wrapper,
  WrapperItems,
  WrapperLogo,
  Button,
} from './styles';
import { MenuItems, MenuItemsAuthenticated } from './menuItems';
import AuthContext from '../../Context/AuthContext';

const Navbar: React.FC = () => {
  const { user, handleLogout } = useContext(AuthContext);

  return (
    <Wrapper>
      <WrapperLogo>
        <TextLogo>Conduit</TextLogo>
      </WrapperLogo>
      <WrapperItems>
        {user ? (
          <>
            {MenuItemsAuthenticated.map((item, index) => {
              return (
                <li key={index}>
                  <NavItemLinks href={item.url}>{item.title}</NavItemLinks>
                </li>
              );
            })}
            <Button type="button" onClick={handleLogout}>
              Logout
            </Button>
          </>
        ) : (
          MenuItems.map((item, index) => {
            return (
              <li key={index}>
                <NavItemLinks href={item.url}>{item.title}</NavItemLinks>
              </li>
            );
          })
        )}
      </WrapperItems>
    </Wrapper>
  );
};

export default Navbar;
