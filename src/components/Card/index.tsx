import React from 'react';

import { Image, Wrapper, WrapperImage, TextCard, WrapperInfor } from './styles';

type Props = {
  userImg?: string;
  userName: string;
  userText1: string;
  userText2: string;
};

const Card: React.FC<Props> = ({ userName, userText1, userText2, userImg }) => {
  return (
    <Wrapper>
      <WrapperImage>
        <Image src={userImg} alt="imageUser" width="78" height="78" />
        <p>{userName}</p>
      </WrapperImage>
      <WrapperInfor>
        <TextCard>{userText1}</TextCard>
        <TextCard>{userText2}</TextCard>
      </WrapperInfor>
    </Wrapper>
  );
};

export default Card;
