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
import { UserApi } from '../../api';

const Navbar: React.FC = () => {
  const userApi = new UserApi();
  const { authenticated, handleLogout } = useContext(AuthContext);

  const testBuscaUser = async (): Promise<void> => {
    try {
      await userApi.getUser();
    } catch (error) {
      console.log('funçao1', error);
    }
  };
  return (
    <Wrapper>
      <WrapperLogo>
        <TextLogo>Conduit</TextLogo>
      </WrapperLogo>
      <WrapperItems>
        {authenticated ? (
          <>
            {MenuItemsAuthenticated.map((item, index) => {
              return (
                <li key={index}>
                  <NavItemLinks href={item.url}>{item.title}</NavItemLinks>
                </li>
              );
            })}
            <button type="button" onClick={handleLogout}>
              Logout
            </button>
            <button type="button" onClick={testBuscaUser}>
              busca user
            </button>
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
