import React from 'react';
import {
  NavItemLinks,
  TextLogo,
  Wrapper,
  WrapperItems,
  WrapperLogo,
} from './styles';
import { MenuItems } from './menuItems';

const Navbar: React.FC = () => {
  return (
    <Wrapper>
      <WrapperLogo>
        <TextLogo>Conduit</TextLogo>
      </WrapperLogo>
      <WrapperItems>
        {MenuItems.map((item, index) => {
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
