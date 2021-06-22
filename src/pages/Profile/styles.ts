import styled from 'styled-components';

export const WrapperUser = styled.div`
  display: flex;
  background-color: ${(props) => props.theme.colors.background};
  height: 250px;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  margin-top: 60px;
`;

export const Image = styled.img`
  border-radius: 50%;
`;

export const NameUser = styled.h3`
  font-weight: bold;
  margin: 0px;
`;

export const BioUser = styled.p`
  font-size: 1.4rem;
  margin: 0px;
`;

export const WrapperEdit = styled.div`
  display: flex;
  width: 80%;
  justify-content: flex-end;
`;

export const Button = styled.button`
  width: 200px;
  padding: 10px;
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
`;

export const Select = styled.button`
  cursor: pointer;
  text-decoration: none;
  color: #c3c3c3;
  margin-right: 15px;
  &:hover {
    color: #9b9b9b;
  }

  &:active {
    color: black;
  }
`;

export const WrapperCard = styled.div``;
