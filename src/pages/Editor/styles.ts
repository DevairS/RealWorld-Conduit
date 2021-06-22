import styled from 'styled-components';
import { IconButton } from '@material-ui/core';
import { Cancel } from '@material-ui/icons';

export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
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
  width: 50%;
`;

export const InputTag = styled.input`
  width: 30%;
  padding: 15px;
  margin: 0px;
  border: none;
  border-radius: 16px;
  outline: none;
  background: transparent;
`;

export const TextErro = styled.p`
  font-size: 0.7rem;
`;

export const WrapperButton = styled.div`
  display: flex;
  justify-content: flex-end;
`;

export const TagInputWrapper = styled.div`
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  margin: 0px;
  border-radius: 5px;
  outline: none;
  margin-top: 10px;
  border: 1px solid ${(props) => props.theme.colors.secundary};

  &:hover {
    border-color: #d6d8da;
  }
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
  font-size: 14px;
  list-style: none;
  cursor: pointer;
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
