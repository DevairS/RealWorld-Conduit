import React, { useContext, useState } from 'react';
import { faBars, faTimes } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  TextLogo,
  LogoDot,
  Wrapper,
  WrapperLogo,
  MenuIcon,
  NavMenu,
  NavMenuActive,
  NavLinks,
} from './styles';
import { Button } from '../index';
import { MenuItems, MenuItemsAuthenticated } from './menuItems';
import AuthContext from '../../Context/AuthContext';

type Props = {
  page?: string;
};

const Navbar: React.FC<Props> = ({ page }) => {
  const { user, handleLogout } = useContext(AuthContext);

  const [clicked, setClicked] = useState(false);

  const handleClick = (): void => {
    setClicked(!clicked);
  };
  return (
    <Wrapper elevation={4}>
      <a href="/" style={{ textDecoration: 'none' }}>
        <WrapperLogo>
          <TextLogo>
            Condu<LogoDot>.</LogoDot>it
          </TextLogo>
        </WrapperLogo>
      </a>

      <MenuIcon onClick={handleClick}>
        {!clicked ? (
          <FontAwesomeIcon icon={faBars} />
        ) : (
          <FontAwesomeIcon icon={faTimes} />
        )}
      </MenuIcon>

      {!clicked ? (
        <NavMenu>
          {user ? (
            <>
              {MenuItemsAuthenticated.map((item, index) => {
                return (
                  <li key={index} style={{ alignSelf: 'center' }}>
                    <NavLinks actived={page === item.title} href={item.url}>
                      {item.title}
                    </NavLinks>
                  </li>
                );
              })}
              <li style={{ alignSelf: 'center' }}>
                <NavLinks
                  actived={page === user.username}
                  href={`/profile/${user.username}`}
                >
                  {user.username}
                </NavLinks>
              </li>
              <Button type="button" text="Logout" onClick={handleLogout} />
            </>
          ) : (
            <>
              {MenuItems.map((item, index) => {
                return (
                  <li key={index}>
                    <NavLinks actived={page === item.title} href={item.url}>
                      {item.title}
                    </NavLinks>
                  </li>
                );
              })}
            </>
          )}
        </NavMenu>
      ) : (
        <NavMenuActive>
          {user ? (
            <>
              {MenuItemsAuthenticated.map((item, index) => {
                return (
                  <li key={index}>
                    <NavLinks actived={page === item.title} href={item.url}>
                      {item.title}
                    </NavLinks>
                  </li>
                );
              })}
              <NavLinks
                actived={page === user.username}
                href={`/profile/${user.username}`}
              >
                {user.username}
              </NavLinks>
              <Button type="button" text="Logout" onClick={handleLogout} />
            </>
          ) : (
            <>
              {MenuItems.map((item, index) => {
                return (
                  <li key={index}>
                    <NavLinks actived={page === item.title} href={item.url}>
                      {item.title}
                    </NavLinks>
                  </li>
                );
              })}
            </>
          )}
        </NavMenuActive>
      )}
    </Wrapper>
  );
};

export default Navbar;
