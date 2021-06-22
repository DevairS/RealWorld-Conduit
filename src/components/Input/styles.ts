import styled from 'styled-components';

export const InputA = styled.input`
  width: 100%;
  padding: 15px;
  margin: 0px;
  border-radius: 5px;
  outline: none;
  margin-top: 15px;
  border: 1px solid ${(props) => props.theme.colors.secundary};

  &:hover {
    border-color: #d6d8da;
  }
`;
