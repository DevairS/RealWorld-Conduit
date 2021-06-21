import React from 'react';
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
  user?: Profile;
  articles?: Article;
  searchFavoritedArticles(): void;
  searchMyArticles(user?: Profile): void;
  favoritedArticle(slug: string, state: boolean): void;
};

const Profile: React.FC<Props> = ({
  user,
  articles,
  searchFavoritedArticles,
  searchMyArticles,
  favoritedArticle,
}) => {
  return (
    <>
      <Navbar />
      <WrapperUser>
        <Image width="80" height="80" alt="imageUser" src={user?.image} />
        <NameUser>{user?.username}</NameUser>
        <BioUser>{user?.bio}</BioUser>
        <WrapperEdit>
          <a href="/settings">
            <Button type="button">Edite seu perfil</Button>
          </a>
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
