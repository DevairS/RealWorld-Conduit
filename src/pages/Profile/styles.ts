import styled from 'styled-components';

export const WrapperUser = styled.div`
  display: flex;
  background-color: ${(props) => props.theme.colors.backgroundHover};
  height: 250px;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  margin-bottom: 50px;
`;

export const Image = styled.img`
  border-radius: 50%;
`;

export const NameUser = styled.h3`
  font-weight: bold;
  margin: 0px;
  font-size: 1.4rem;
`;

export const BioUser = styled.p`
  font-size: 1.1rem;
  margin: 0px;
`;

export const WrapperEdit = styled.div`
  display: flex;
  width: 60%;
  margin-top: 20px;
  justify-content: flex-end;
`;

export const Button = styled.button`
  padding: 2px;
  border: 1px solid ${(props) => props.theme.colors.secundary};
  background-color: ${(props) => props.theme.colors.background};
  border-radius: 2px;
  font-size: 0.8rem;
  opacity: 1;
  color: ${(props) => props.theme.colors.secundary};
  cursor: pointer;
  &:hover {
    opacity: 0.7;
  }
`;

export const WrapperArticles = styled.div`
  display: flex;
  justify-content: center;
`;

export const WrapperArticlesCenter = styled.div`
  display: flex;
  width: 50%;
  flex-direction: column;
`;

export const WrapperSelect = styled.div`
  display: flex;
  margin-bottom: 20px;
`;

export const Select = styled.button`
  padding: 2px;
  border: 1px solid ${(props) => props.theme.colors.secundary};
  background-color: ${(props) => props.theme.colors.background};
  border-radius: 2px;
  font-size: 0.8rem;
  opacity: 1;
  color: ${(props) => props.theme.colors.secundary};
  cursor: pointer;
  margin-right: 40px;

  &:hover {
    background-color: ${(props) => props.theme.colors.primary};
    color: ${(props) => props.theme.colors.textWhite};
  }
`;

export const WrapperCard = styled.div``;
