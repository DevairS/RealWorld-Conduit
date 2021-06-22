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

export const TextErro = styled.p`
  font-size: 0.7rem;
`;

export const WrapperButton = styled.div`
  display: flex;
  justify-content: flex-end;
`;
