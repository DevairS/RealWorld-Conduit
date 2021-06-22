import styled from 'styled-components';

export const Wrapper = styled.div`
  display: flex;
  width: 100%;
  background-color: #525252;
  justify-content: center;
  align-items: center;
  height: 30px;
  position: fixed;
  bottom: 0;
`;

export const Text = styled.p`
  color: ${(props) => props.theme.colors.textReverse};
`;

export const Link = styled.a`
  text-decoration: none;
  color: ${(props) => props.theme.colors.textReverse};
`;
