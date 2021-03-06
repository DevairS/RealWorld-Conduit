import styled from 'styled-components';
import { Favorite } from '@material-ui/icons';
import { Paper, Avatar as _Avatar } from '@material-ui/core';

interface PropsButtonFavorited {
  favorited: boolean;
}
export const Wrapper = styled(Paper)`
  display: flex;
  flex-direction: column;
  justify-content: center;
  width: 100%;
  min-height: 180px;
  margin-bottom: 8px;
  padding: 8px;

  @media (max-width: 375px) {
    min-height: 150px;
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

export const Avatar = styled(_Avatar)`
  &.MuiAvatar-root {
    width: 50px;
    height: 50px;
  }
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
  color: ${(props) => props.theme.colors.primary};
  margin: 0px;
  font-size: 1.2rem;
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
  padding: 10px 65px 0px 65px;
  &:hover {
    background-color: ${(props) => props.theme.colors.backgroundHover};
  }
`;

export const TitleArticle = styled.p`
  margin: 0px;
  font-weight: bold;
  font-size: 1.4rem;

  @media (max-width: 375px) {
    font-size: 1.2rem;
  }
`;

export const DescriptionArticle = styled.p`
  margin: 0px;
  @media (max-width: 375px) {
    font-size: 0.8rem;
  }
`;

export const WrapperTags = styled.div`
  display: flex;
  justify-content: flex-end;
  flex-flow: row wrap;
  margin: 0px 5px 5px 5px;
  align-items: center;
`;

export const Tag = styled.p`
  margin: 4px;
  padding: 4px;
  border-radius: 10px;
  color: ${(props) => props.theme.colors.primary};
  border: 1px solid ${(props) => props.theme.colors.primary};
  @media (max-width: 375px) {
    font-size: 0.5rem;
  }
`;

export const ButtonFavorited = styled.button<PropsButtonFavorited>`
  display: flex;
  justify-content: space-evenly;
  align-items: center;
  width: 40px;
  height: 30px;
  color: ${(props) => (props.favorited ? '#fff' : props.theme.colors.primary)};
  border: 1px solid ${(props) => props.theme.colors.primary};
  background-color: ${(props) =>
    props.favorited ? props.theme.colors.primary : '#fff'};

  border-radius: 10%;
  cursor: pointer;
  opacity: 1;
  &:hover {
    opacity: 0.8;
  }
`;
export const FavoriteIcon = styled(Favorite)<PropsButtonFavorited>`
  font-size: 1rem !important;
  color: ${(props) =>
    props.favorited ? '#fff' : props.theme.colors.primary} !important;
`;

export const Link = styled.a`
  text-decoration: none;
  color: ${(props) => props.theme.colors.text};
`;
