import styled from 'styled-components';
import { Divider as _Divider } from '@material-ui/core';

export const WrapperTop = styled.div`
  background-color: black;
  display: flex;
  flex-direction: column;
  height: 250px;
  align-items: center;
  justify-content: center;
`;

export const ArticleTitle = styled.h2`
  color: ${(props) => props.theme.colors.text};
`;

export const Author = styled.p`
  color: ${(props) => props.theme.colors.text};
  margin: 0px;
`;

export const WrapperFollow = styled.div`
  display: flex;
  align-items: center;
`;

export const Button = styled.button`
  padding: 10px;
  width: 200px;
  margin: 0px 5px;
`;

export const Image = styled.img`
  border-radius: 50%;
`;

export const WrapperBottom = styled.div`
  display: flex;
  justify-content: center;
`;

export const WrapperContent = styled.div`
  display: flex;
  flex-direction: column;
  width: 50%;
`;

export const WrapperTags = styled.div`
  display: flex;
`;

export const Tag = styled.p`
  border: 1px solid black;
  border-radius: 16px;
  padding: 5px;
  margin: 5px;
`;

export const Divider = styled(_Divider)``;

export const WrapperComments = styled.div`
  display: flex;
  flex-direction: column;
`;

export const WrapperComment = styled.div`
  display: flex;
  flex-direction: column;
  border: 1px solid black;
  width: 100%;
`;

export const WrapperAuthorComment = styled.div`
  display: flex;
  align-items: center;
`;

export const Form = styled.form`
  margin: 40px 0px;
`;

export const TextErro = styled.p``;

export const Input = styled.input`
  width: 100%;
  padding: 10px 0px;
`;

export const WrapperButton = styled.div``;
