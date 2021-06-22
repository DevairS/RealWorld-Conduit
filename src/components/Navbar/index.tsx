import React, { useContext } from 'react';
import Switch from 'react-switch';
import { ThemeContext } from 'styled-components';
import { shade } from 'polished';
import {
  NavItemLinks,
  TextLogo,
  Wrapper,
  WrapperItems,
  WrapperLogo,
} from './styles';

import { Button } from '../index';
import { MenuItems, MenuItemsAuthenticated } from './menuItems';
import AuthContext from '../../Context/AuthContext';

const Navbar: React.FC = () => {
  const { user, handleLogout } = useContext(AuthContext);
  const { colors, title } = useContext(ThemeContext);

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
            <Button type="button" text="Logout" onClick={handleLogout} />
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

        {/* <Switch
          onChange={toggleTheme}
          checked={title === 'dark'}
          checkedIcon={false}
          uncheckedIcon={false}
          height={10}
          width={40}
          handleDiameter={20}
          offColor={shade(0.15, colors.primary)}
          onColor={colors.secundary}
        /> */}
      </WrapperItems>
    </Wrapper>
  );
};

export default Navbar;
