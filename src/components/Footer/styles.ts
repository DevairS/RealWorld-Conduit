import styled from 'styled-components';

export const Wrapper = styled.div`
  display: flex;
  width: 100%;
  background: linear-gradient(#485563, #29323c);
  justify-content: center;
  align-items: center;
  height: 50px;
  position: fixed;
  bottom: 0;
  font-size: 1.2rem;
`;

export const Text = styled.p`
  color: ${(props) => props.theme.colors.textWhite};
`;

export const Link = styled.a`
  text-decoration: none;
  color: ${(props) => props.theme.colors.textWhite};
`;
