import React, { useCallback, useState } from 'react';

import {
  Image,
  Wrapper,
  WrapperImage,
  WrapperFavorite,
  WrapperInfoUser,
  WrapperBottom,
  TitleArticle,
  WrapperTop,
  UserName,
  DateCreate,
  DescriptionArticle,
  WrapperTags,
  Tag,
  ButtonFavorited,
  Link,
  FavoriteIcon,
  Avatar,
} from './styles';

type Props = {
  userImg?: string;
  userName: string;
  userText1?: string;
  userText2?: string;
  createDate: string;
  tags?: TagsList;
  favorited: boolean;
  favoritesCount: number;
  slug: string;
  favoritedArticle(slug: string, state: boolean): void;
};

const Card: React.FC<Props> = ({
  userName,
  userText1,
  userText2,
  userImg,
  createDate,
  tags,
  favorited,
  favoritesCount,
  favoritedArticle,
  slug,
}) => {
  const user = localStorage.getItem('user');
  const date = createDate.split('T', 1);
  const [favoritedState, setFavoritedState] = useState(favorited);
  const [countFavorited, setCountFavorited] = useState(favoritesCount);
  const [shouldUseAvatar, setShouldUseAvatar] = useState(false);

  const handleChangeFavorited = (): void => {
    if (favoritedState) {
      setCountFavorited(countFavorited - 1);
    } else {
      setCountFavorited(countFavorited + 1);
    }
    setFavoritedState(!favoritedState);
    favoritedArticle(slug, favoritedState);
  };

  const onError = useCallback(() => {
    setShouldUseAvatar(true);
  }, []);

  return (
    <Wrapper elevation={3}>
      <WrapperTop>
        <Link href={`/profile/${userName}`}>
          <WrapperImage>
            {shouldUseAvatar ? (
              <Avatar alt="user" />
            ) : (
              <Image
                src={userImg}
                alt="User"
                width="50"
                height="50"
                onError={onError}
              />
            )}
            <WrapperInfoUser>
              <UserName>{userName}</UserName>
              <DateCreate>{date}</DateCreate>
            </WrapperInfoUser>
          </WrapperImage>
        </Link>
        {user ? (
          <WrapperFavorite>
            <ButtonFavorited
              onClick={handleChangeFavorited}
              favorited={favoritedState}
            >
              <FavoriteIcon favorited={favoritedState} />
              {countFavorited}
            </ButtonFavorited>
          </WrapperFavorite>
        ) : (
          <div />
        )}
      </WrapperTop>
      <WrapperBottom>
        <Link href={`/article/${slug}`}>
          <TitleArticle>{userText1}</TitleArticle>
          <DescriptionArticle>{userText2}</DescriptionArticle>
        </Link>
      </WrapperBottom>
      <WrapperTags>
        {tags?.map((item, index) => {
          return <Tag key={index}>{item}</Tag>;
        })}
      </WrapperTags>
    </Wrapper>
  );
};

export default Card;
