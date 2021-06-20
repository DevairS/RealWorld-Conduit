import styled from 'styled-components';

interface PropsButtonFavorited {
  favorited: boolean;
}
export const Wrapper = styled.div`
  display: flex;
  width: 100%;
  min-height: 150px;
  flex-direction: column;
  border: 1px solid #c4c4c4;
  &:hover {
    background-color: #f5f5f5;
  }
`;

export const WrapperTop = styled.div`
  display: flex;
  justify-content: space-between;
  margin: 5px 5px 0px 5px;
`;

export const WrapperImage = styled.div`
  display: flex;
  align-items: center;
`;

export const Image = styled.img`
  border-radius: 50%;
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
  margin: 0px 65px;
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

export const ButtonFavorited = styled.button<PropsButtonFavorited>`
  width: 40px;
  height: 40px;
  color: #fff;
  background-color: ${(props) => (props.favorited ? 'green' : 'grey')};
  border-radius: 50%;
  cursor: pointer;
  opacity: 1;
  &:hover {
    opacity: 0.8;
  }
`;
