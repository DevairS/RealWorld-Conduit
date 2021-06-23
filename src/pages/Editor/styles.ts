import styled from 'styled-components';
import { IconButton, Paper as _Paper } from '@material-ui/core';
import { Cancel } from '@material-ui/icons';

export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-top: 60px;
  @media (max-width: 375px) {
    margin: 30px 0px 20px 0px;
  }
`;

export const TextPrimary = styled.h2`
  font-weight: bold;
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

export const InputTag = styled.input`
  width: 30%;
  padding: 15px;
  margin: 0px;
  border: none;
  border-radius: 16px;
  outline: none;
  background: transparent;
  @media (max-width: 375px) {
    width: 100%;
  }
`;

export const TextErro = styled.p`
  font-size: 0.7rem;
`;

export const WrapperButton = styled.div`
  display: flex;
  justify-content: flex-end;
  margin-top: 15px;
`;

export const TagInputWrapper = styled.div`
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  margin: 0px;
  border-radius: 5px;
  outline: none;
  margin-top: 10px;
  border: 1px solid rgba(85, 94, 141, 0.2);
  background-color: #fff;
`;

export const ListTags = styled.ul`
  display: flex;
  flex-wrap: wrap;
  padding: 0px;
  margin: 0px;
`;

export const ListItem = styled.li`
  display: flex;
  justify-content: center;
  align-items: center;
  width: auto;
  height: 32px;
  color: ${(props) => props.theme.colors.textWhite};
  background-color: ${(props) => props.theme.colors.textLight};
  padding: 0px 8px;
  margin-left: 8px;
  border-radius: 12px;
  font-size: 0.9rem;
  list-style: none;
  cursor: pointer;
  @media (max-width: 375px) {
    font-size: 0.5rem;
    height: 20px;
    margin-left: 4px;
    padding: 0px 4px;
  }
`;

export const TagName = styled.span`
  margin: 0px;
`;

export const TagDelete = styled(IconButton)`
  text-align: center;
  padding: 0px !important;
  margin-left: 8px !important;
`;

export const IconDelete = styled(Cancel)`
  color: ${(props) => props.theme.colors.text};
  font-size: 20px !important;
`;
