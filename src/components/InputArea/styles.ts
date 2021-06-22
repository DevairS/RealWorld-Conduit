import styled from 'styled-components';

export const TextArea = styled.textarea`
  width: 100%;
  padding: 15px;
  margin: 0px;
  border-radius: 5px;
  outline: none;
  margin-top: 15px;
  border: 1px solid ${(props) => props.theme.colors.secundary};
  resize: vertical;

  &:hover {
    border-color: #d6d8da;
  }
`;
