import styled from 'styled-components';
import { CircularProgress } from '@material-ui/core';

export const WrapperLoading = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: black;
`;

export const LoadingCircular = styled(CircularProgress)``;
