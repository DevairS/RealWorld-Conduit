import React from 'react';
import { Navbar, Footer, Card } from '../../components';

import {
  TextMain,
  TextSecondary,
  WrapperBanner,
  WrapperCenter,
  WrapperSelect,
  Select,
  WrapperMain,
  WrapperRight,
  ButtonTags,
  WrapperLeft,
  WrapperTags,
} from './styles';

type Props = {
  articles?: Article;
  tags?: TagsList;
  user?: User;
  searchGlobalArticles(): void;
  searchFeedArticles(): void;
  favoritedArticle(slug: string, state: boolean): void;
  changeArticles(tag: string): void;
};

const Home: React.FC<Props> = ({
  articles,
  tags,
  user,
  searchFeedArticles,
  searchGlobalArticles,
  favoritedArticle,
  changeArticles,
}) => {
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
              <WrapperSelect>
                <Select onClick={searchGlobalArticles}>Todos os Artigos</Select>
                <Select onClick={searchFeedArticles}>
                  Artigos do seu feed
                </Select>
              </WrapperSelect>
              {articles.length ? <div /> : <p>Nenhum artigo aqui</p>}
              {articles.map((item, index) => {
                return (
                  <Card
                    key={index}
                    userName={item.author.username}
                    userText1={item.title}
                    userText2={item.description}
                    userImg={item.author.image}
                    createDate={item.createdAt}
                    tags={item.tagList}
                    favorited={item.favorited}
                    favoritesCount={item.favoritesCount}
                    favoritedArticle={favoritedArticle}
                    slug={item.slug}
                  />
                );
              })}
            </WrapperCenter>
            <WrapperRight>
              <p>Populares Tags</p>
              <WrapperTags>
                {tags?.map((item, index) => {
                  return (
                    <ButtonTags
                      onClick={() => changeArticles(item)}
                      key={index}
                    >
                      {item}
                    </ButtonTags>
                  );
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
