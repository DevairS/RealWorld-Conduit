import React, { useState } from 'react';
import { Footer, Navbar, Card } from '../../components';
import {
  WrapperUser,
  Image,
  NameUser,
  BioUser,
  WrapperEdit,
  Button,
  Select,
  WrapperArticles,
  WrapperArticlesCenter,
  WrapperSelect,
  WrapperCard,
} from './styles';

type Props = {
  userLogged?: User;
  user?: Profile;
  articles?: Articles;
  searchFavoritedArticles(): void;
  searchMyArticles(user?: Profile): void;
  favoritedArticle(slug: string, state: boolean): void;
  handleChangeFollow(username: string, state: boolean): void;
  follow: boolean;
};

const Profile: React.FC<Props> = ({
  user,
  articles,
  searchFavoritedArticles,
  searchMyArticles,
  favoritedArticle,
  userLogged,
  handleChangeFollow,
  follow,
}) => {
  return (
    <>
      <Navbar />
      <WrapperUser>
        <Image width="80" height="80" alt="imageUser" src={user?.image} />
        <NameUser>{user?.username}</NameUser>
        <BioUser>{user?.bio}</BioUser>
        <WrapperEdit>
          {userLogged?.username === user?.username ? (
            <a href="/settings">
              <Button type="button">Edite seu perfil</Button>
            </a>
          ) : (
            <Button
              type="button"
              onClick={() => {
                user ? handleChangeFollow(user.username, user.following) : null;
              }}
            >
              {follow ? 'Deixar de seguir' : 'Seguir'}
            </Button>
          )}
        </WrapperEdit>
      </WrapperUser>
      <WrapperArticles>
        <WrapperArticlesCenter>
          <WrapperSelect>
            <Select onClick={() => searchMyArticles(user)}>
              Artigos Publicados
            </Select>
            <Select onClick={searchFavoritedArticles}>Artigos favoritos</Select>
          </WrapperSelect>
          <WrapperCard>
            {articles?.length ? <div /> : <p>Nenhum artigo aqui</p>}
            {articles?.map((item, index) => {
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
          </WrapperCard>
        </WrapperArticlesCenter>
      </WrapperArticles>
      <Footer />
    </>
  );
};

export default Profile;
