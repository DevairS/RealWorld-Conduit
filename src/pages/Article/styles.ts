import styled from 'styled-components';
import { Divider as _Divider } from '@material-ui/core';

interface ButtonProps {
  logged: boolean;
}

export const WrapperTop = styled.div`
  background-color: ${(props) => props.theme.colors.secondary};
  display: flex;
  flex-direction: column;
  height: 200px;
  justify-content: center;
  padding: 0px 350px;
`;

export const ArticleTitle = styled.h2`
  color: ${(props) => props.theme.colors.textWhite};
  font-size: 2rem;
  margin-bottom: 20px;
`;

export const Author = styled.a`
  color: ${(props) => props.theme.colors.textWhite};
  margin: 0px;
  text-decoration: none;
  &:hover {
    text-decoration: underline;
  }
`;

export const WrapperFollow = styled.div`
  display: flex;
  align-items: center;
  p {
    color: ${(props) => props.theme.colors.textWhite};
  }
`;

export const ButtonFollow = styled.button`
  margin-left: 30px;
  padding: 5px;
  border: 1px solid ${(props) => props.theme.colors.textLight};
  background-color: ${(props) => props.theme.colors.secondary};
  border-radius: 2px;
  font-size: 0.8rem;
  color: ${(props) => props.theme.colors.textLight};
  cursor: pointer;

  &:hover {
    background-color: ${(props) => props.theme.colors.textLight};
    color: ${(props) => props.theme.colors.textWhite};
  }
`;

export const ButtonFavorited = styled.button<ButtonProps>`
  margin-left: 30px;
  padding: 5px;
  border: 1px solid
    ${(props) => (props.logged ? 'red' : props.theme.colors.primary)};
  background-color: ${(props) => props.theme.colors.secondary};
  border-radius: 2px;
  font-size: 0.8rem;
  color: ${(props) => (props.logged ? 'red' : props.theme.colors.primary)};
  cursor: pointer;

  &:hover {
    background-color: ${(props) =>
      props.logged ? 'red' : props.theme.colors.primary};
    color: ${(props) => props.theme.colors.textWhite};
  }
`;

export const Image = styled.img`
  border-radius: 50%;
`;

export const WrapperBottom = styled.div`
  display: flex;
  justify-content: center;
  margin: 20px 0px;
`;

export const Body = styled.p`
  white-space: pre-wrap;
  font-size: 1.2rem;
  color: ${(props) => props.theme.colors.secondary};
`;

export const WrapperContent = styled.div`
  display: flex;
  flex-direction: column;
  width: 50%;
`;

export const WrapperTags = styled.div`
  display: flex;
  margin-bottom: 40px;
`;

export const Tag = styled.p`
  border: 1px solid ${(props) => props.theme.colors.secondary};
  border-radius: 16px;
  padding: 5px;
  margin: 5px;
`;

export const Divider = styled(_Divider)``;

export const WrapperComments = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const WrapperComment = styled.div`
  display: flex;
  flex-direction: column;
  width: 70%;
  margin-bottom: 100px;
  align-items: center;
`;

export const WrapperAuthorComment = styled.div`
  display: flex;
  align-items: center;
  background-color: ${(props) => props.theme.colors.backgroundHover};
  width: 100%;
  padding: 10px;
`;

export const Form = styled.form`
  display: flex;
  flex-direction: column;
  width: 70%;
  margin: 40px 0px;
  background-color: ${(props) => props.theme.colors.backgroundHover};
  padding-bottom: 10px;
`;

export const TextErro = styled.p``;

export const Input = styled.textarea`
  width: 100%;
  padding: 10px 10px 20px 10px;
  resize: vertical;
  border: 1px solid ${(props) => props.theme.colors.backgroundHover};
`;

export const WrapperButton = styled.div``;
