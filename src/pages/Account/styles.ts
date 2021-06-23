import styled from 'styled-components';
import { Paper as _Paper } from '@material-ui/core';

export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-top: 60px;
`;

export const TextPrimary = styled.h2`
  font-weight: bold;
`;

export const TextSecondary = styled.p`
  margin-top: 12px;
  text-align: center;
  color: ${(props) => props.theme.colors.textLight};
  width: 70%;
`;

export const Paper = styled(_Paper)`
  display: flex;
  flex-direction: column;
  width: 30%;
  align-items: center;
  justify-content: center;
  padding: 40px;
  border-radius: 10px;
  @media (max-width: 960px) {
    width: 70%;
    margin-bottom: 30px;
  }
  @media (max-width: 375px) {
    width: 90%;
    padding: 20px;
  }
`;

export const Form = styled.form`
  display: flex;
  flex-direction: column;
  width: 100%;
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

export const InputArea = styled.textarea`
  padding: 15px;
  margin: 0px;
  border-radius: 16px;
  outline: none;
  margin-top: 10px;
  border: 1px solid black;
  resize: vertical;

  &:hover {
    border-color: #d6d8da;
  }
`;

export const TextErro = styled.p`
  font-size: 0.7rem;
`;

export const WrapperButton = styled.div`
  display: flex;
  margin-top: 24px;
  width: 100%;
`;

export const Button = styled.button`
  margin-top: 10px;
  padding: 15px;
  background-color: ${(props) => props.theme.colors.secondary};
  color: ${(props) => props.theme.colors.text};
  border: none;
  border-radius: 16px;
  width: 40%;
  opacity: 1;
  &:hover {
    opacity: 0.7;
  }
`;
