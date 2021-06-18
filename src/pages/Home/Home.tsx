import React from 'react';
import { Navbar, Footer, Card } from '../../components';

import {
  TextMain,
  TextSecondary,
  WrapperBanner,
  WrapperGlobalFeed,
  WrapperMain,
  WrapperTags,
  ButtonTags,
} from './styles';

type Props = {
  articles?: ArticlesList;
  tags?: TagsList;
  user: User;
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
            <WrapperGlobalFeed>
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
            </WrapperGlobalFeed>
            <WrapperTags>
              {tags?.map((item, index) => {
                return <ButtonTags key={index}>{item}</ButtonTags>;
              })}
            </WrapperTags>
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
