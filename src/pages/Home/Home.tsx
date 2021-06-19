import React from 'react';
import { Navbar, Footer, Card } from '../../components';

import {
  TextMain,
  TextSecondary,
  WrapperBanner,
  WrapperCenter,
  WrapperMain,
  WrapperRight,
  ButtonTags,
  WrapperLeft,
  WrapperTags,
} from './styles';

type Props = {
  articles?: ArticlesList;
  tags?: TagsList;
  user?: User;
};

const Home: React.FC<Props> = ({ articles, tags, user }) => {
  return (
    <>
      <Navbar />
      {user ? (
        <div />
      ) : (
        <WrapperBanner>
          <TextMain>Conduit</TextMain>
          <TextSecondary>A place to share your knowledge.</TextSecondary>
        </WrapperBanner>
      )}

      {articles ? (
        <>
          <WrapperMain>
            <WrapperLeft />
            <WrapperCenter>
              {articles.articles.map((item, index) => {
                return (
                  <Card
                    key={index}
                    userName={item.author.username}
                    userText1={item.title}
                    userText2={item.description}
                    userImg={item.author.image}
                    createDate={item.createdAt}
                    tags={item.tagList}
                  />
                );
              })}
            </WrapperCenter>
            <WrapperRight>
              <p>Populares Tags</p>
              <WrapperTags>
                {tags?.map((item, index) => {
                  return <ButtonTags key={index}>{item}</ButtonTags>;
                })}
              </WrapperTags>
            </WrapperRight>
          </WrapperMain>
        </>
      ) : (
        <h1>carregando...</h1>
      )}
      <Footer />
    </>
  );
};

export default Home;
