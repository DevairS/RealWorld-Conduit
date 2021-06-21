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
      <a href="/" style={{ textDecoration: 'none' }}>
        <WrapperLogo>
          <TextLogo>Conduit</TextLogo>
        </WrapperLogo>
      </a>
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
            <li>
              <NavItemLinks href={`/profile/${user.username}`}>
                {user.username}
              </NavItemLinks>
            </li>
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
        <Button type="button" onClick={handleLogout}>
          Logout
        </Button>
      </WrapperItems>
    </Wrapper>
  );
};

export default Navbar;
