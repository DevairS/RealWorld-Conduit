import styled from 'styled-components';

export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  margin-top: 60px;
`;

export const TextPrimary = styled.h2`
  font-weight: bold;
`;

export const TextSecondary = styled.a`
  cursor: pointer;
  text-decoration: none;
  color: green;
`;

export const Form = styled.form`
  display: flex;
  flex-direction: column;
  width: 25%;
`;

export const Input = styled.input`
  padding: 15px;
  margin: 0px;
  border-radius: 16px;
  outline: none;
  margin-top: 10px;
  border: 1px solid black;

  &:hover {
    border-color: #d6d8da;
  }
`;

export const TextErro = styled.p`
  font-size: 0.7rem;
`;

export const WrapperButton = styled.div`
  display: flex;
  justify-content: flex-end;
`;

export const Button = styled.button`
  margin-top: 10px;
  padding: 15px;
  background-color: ${(props) => props.theme.colors.secundary};
  color: ${(props) => props.theme.colors.textReverse};
  border: none;
  border-radius: 16px;
  width: 25%;
  opacity: 1;
  &:hover {
    opacity: 0.7;
  }
`;
