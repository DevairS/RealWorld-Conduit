import styled from 'styled-components';

interface PropsButtonFavorited {
  favorited: boolean;
}
export const Wrapper = styled.div`
  display: flex;
  width: 100%;
  min-height: 150px;
  flex-direction: column;
  border-top: 1px solid ${(props) => props.theme.colors.secundary};
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
  color: ${(props) => props.theme.colors.text};
`;

export const WrapperBottom = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  height: 100%;
  padding: 10px 10px 0px 10px;
  &:hover {
    background-color: ${(props) => props.theme.colors.backgroundHover};
  }
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
  align-items: center;
`;

export const Tag = styled.p`
  margin: 2px;
  padding: 1px 3px;
  border-radius: 10px;
  border: 1px solid ${(props) => props.theme.colors.secundary};
`;

export const ButtonFavorited = styled.button<PropsButtonFavorited>`
  width: 40px;
  height: 40px;
  color: ${(props) => props.theme.colors.textReverse};
  background-color: ${(props) =>
    props.favorited ? '#49b675' : props.theme.colors.secundary};
  border-radius: 30%;
  cursor: pointer;
  opacity: 1;
  &:hover {
    opacity: 0.8;
  }
`;

export const Link = styled.a`
  text-decoration: none;
  color: ${(props) => props.theme.colors.text};
`;
