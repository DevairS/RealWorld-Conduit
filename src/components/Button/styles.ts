import styled from 'styled-components';

export const ButtonA = styled.button`
  background-color: ${(props) => props.theme.colors.primary};
  color: ${(props) => props.theme.colors.textWhite};
  margin-top: 10px;
  padding: 10px;
  border: none;
  border-radius: 5px;
  width: 30%;
  font-size: 1.2rem;
  opacity: 1;
  cursor: pointer;
  &:hover {
    opacity: 0.7;
  }
`;
