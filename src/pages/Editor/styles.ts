import styled from 'styled-components';
import { IconButton } from '@material-ui/core';
import { Cancel } from '@material-ui/icons';

export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
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
  width: 50%;
`;

export const Input = styled.input`
  padding: 15px;
  margin: 0px;
  border-radius: 16px;
  outline: none;
  margin-top: 10px;

  &:hover {
    border-color: #c2c2c2;
  }
`;

export const InputTag = styled.input`
  padding: 15px;
  margin: 0px;
  border: none;
  border-radius: 16px;
  outline: none;
  background: transparent;
`;

export const InputArea = styled.textarea`
  padding: 15px;
  margin: 0px;
  border-radius: 16px;
  outline: none;
  margin-top: 10px;

  &:hover {
    border-color: #c2c2c2;
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
  padding: 15px;
  background-color: green;
  color: #fff;
  border-radius: 16px;
  width: 25%;
  opacity: 1;
  &:hover {
    opacity: 0.5;
  }
`;

export const TagInputWrapper = styled.div`
  display: flex;
  flex-wrap: wrap;
  padding: 0px 8px;
  border: 1px solid #d6d8da;
  border-radius: 16px;
  outline: none;
  margin-top: 10px;

  &:hover {
    border-color: #c2c2c2;
  }
`;

export const ListTags = styled.ul`
  display: flex;
  flex-wrap: wrap;
  padding: 0px;
  margin: 8px 0px;
`;

export const ListItem = styled.li`
  display: flex;
  justify-content: center;
  align-items: center;
  width: auto;
  height: 32px;
  color: #fff;
  background-color: green;
  padding: 0px 8px;
  margin: 0px 8px 0px 0px;
  border-radius: 12px;
  font-size: 14px;
  list-style: none;
`;

export const TagName = styled.span`
  margin-top: 4px;
`;

export const TagDelete = styled(IconButton)`
  text-align: center;
  padding: 0px !important;
  margin-left: 8px !important;
`;

export const IconDelete = styled(Cancel)`
  color: #fff;
`;
