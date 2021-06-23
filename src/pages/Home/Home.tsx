import React, { useMemo } from 'react';
import { Navbar, Footer, Card, Loading } from '../../components';

import {
  Wrapper,
  TextMain,
  TextSecondary,
  WrapperBanner,
  WrapperCenter,
  WrapperSelect,
  Select,
  Select2,
  WrapperMain,
  WrapperRight,
  ButtonTags,
  WrapperLeft,
  WrapperTags,
  WrapperLoading,
  Title,
} from './styles';

type Props = {
  articles?: Articles;
  tags?: TagsList;
  user?: User;
  searchGlobalArticles(): void;
  searchFeedArticles(): void;
  favoritedArticle(slug: string, state: boolean): void;
  changeArticles(tag: string): void;
  activedButton: boolean;
};

const Home: React.FC<Props> = ({
  articles,
  tags,
  user,
  searchFeedArticles,
  searchGlobalArticles,
  favoritedArticle,
  changeArticles,
  activedButton,
}) => {
  const renderArticles = useMemo(
    () =>
      articles?.map((item, index) => (
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
      )),
    [articles],
  );

  return (
    <>
      <Navbar page="Home" />
      {user ? (
        <div />
      ) : (
        <WrapperBanner>
          <TextMain>Conduit</TextMain>
          <TextSecondary>
            Um lugar para compartilhar seu conhecimento
          </TextSecondary>
        </WrapperBanner>
      )}

      <Wrapper>
        {articles ? (
          <>
            <WrapperMain>
              <WrapperLeft />
              <WrapperCenter>
                <WrapperSelect>
                  <Select
                    actived={activedButton}
                    onClick={searchGlobalArticles}
                  >
                    Todos os Artigos
                  </Select>
                  {user ? (
                    <Select2
                      actived={activedButton}
                      onClick={searchFeedArticles}
                    >
                      Artigos do seu feed
                    </Select2>
                  ) : (
                    <div />
                  )}
                </WrapperSelect>
                {articles.length ? <div /> : <p>Nenhum artigo aqui</p>}
                {renderArticles}
              </WrapperCenter>
              <WrapperRight>
                <Title>Tags Populares</Title>
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
          <WrapperLoading>
            <Loading />
          </WrapperLoading>
        )}
      </Wrapper>
      <Footer />
    </>
  );
};

export default Home;
