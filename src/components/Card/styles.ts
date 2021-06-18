import styled from 'styled-components';

export const Wrapper = styled.div`
  display: flex;
  width: 100%;
  height: 150px;
  border: 1px solid black;
  border-radius: 6px;
  margin-bottom: 20px;
  flex-direction: column;
`;

export const WrapperTop = styled.div`
  display: flex;
  justify-content: space-between;
  margin: 5px 5px 0px 5px;
`;

export const WrapperImage = styled.div`
  display: flex;
`;

export const Image = styled.img`
  border-radius: 40px;
`;

export const WrapperInfoUser = styled.div`
  display: flex;
  flex-direction: column;
  margin-left: 10px;
`;

export const WrapperFavorite = styled.div`
  display: flex;
`;

export const UserName = styled.p`
  color: green;
  margin: 0px;
`;

export const DateCreate = styled.p`
  font-size: 0.8rem;
`;

export const WrapperBottom = styled.div`
  display: flex;
  flex-direction: column;
  margin: 0px 10px;
`;

export const TitleArticle = styled.p`
  margin: 0px;
  font-weight: bold;
`;

export const DescriptionArticle = styled.p`
  margin: 0px;
`;

export const WrapperTags = styled.div`
  display: flex;
  justify-content: flex-end;
  margin: 0px 5px 5px 5px;
`;

export const Tag = styled.p`
  border: 1px solid grey;
  margin: 2px;
  padding: 1px;
`;
