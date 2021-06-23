import styled from 'styled-components';

export const ButtonA = styled.button`
  background-color: ${(props) => props.theme.colors.primary};
  color: ${(props) => props.theme.colors.textWhite};
  padding: 16px;
  border: none;
  border-radius: 10px;
  width: 100%;
  font-size: 1.2rem;
  opacity: 1;
  cursor: pointer;
  &:hover {
    opacity: 0.7;
  }
`;
