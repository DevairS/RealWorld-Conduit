import React from 'react';

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
} from './styles';

type Props = {
  userImg?: string;
  userName: string;
  userText1?: string;
  userText2?: string;
  createDate?: string;
  tags?: [string];
};

const Card: React.FC<Props> = ({
  userName,
  userText1,
  userText2,
  userImg,
  createDate,
  tags,
}) => {
  return (
    <Wrapper>
      <WrapperTop>
        <WrapperImage>
          <Image src={userImg} alt="imageUser" width="50" height="50" />
          <WrapperInfoUser>
            <UserName>{userName}</UserName>
            <DateCreate>{createDate}</DateCreate>
          </WrapperInfoUser>
        </WrapperImage>
        <WrapperFavorite>
          <p>favorite</p>
        </WrapperFavorite>
      </WrapperTop>

      <WrapperBottom>
        <TitleArticle>{userText1}</TitleArticle>
        <DescriptionArticle>{userText2}</DescriptionArticle>
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
