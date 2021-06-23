import styled from 'styled-components';
import { Paper as _Paper } from '@material-ui/core';

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
`;

export const Form = styled.form`
  display: flex;
  align-items: center;
  flex-direction: column;
  width: 100%;
  background-color: #fff;
`;

export const TextErro = styled.p`
  font-size: 0.7rem;
`;

export const WrapperButton = styled.div`
  display: flex;
  margin-top: 24px;
  width: 100%;
`;
