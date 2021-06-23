import React, { useContext, useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import Profile from './Profile';
import { ArticleApi, ProfileApi, UserApi } from '../../api';
import showAlert from '../../utils/helpers/Alert';
import AuthContext from '../../Context/AuthContext';

const ProfileContainer: React.FC = () => {
  const userApi = UserApi.getInstance();
  const articleApi = ArticleApi.getInstance();
  const profileApi = ProfileApi.getInstance();
  const { user } = useContext(AuthContext);

  const [articles, setArticles] = useState<Articles>();
  const [profile, setProfile] = useState<Profile>();
  const [follow, setFollow] = useState(false);
  const [activedButton, setActivedButton] = useState(true);

  const { name } = useParams<ProfileRouteParams>();

  useEffect(() => {
    searchProfile();
  }, [follow]);

  const searchProfile = async (): Promise<void> => {
    try {
      const profileResponse = await profileApi.getProfile(name);
      setProfile(profileResponse);
      setFollow(profileResponse.following);
      await searchMyArticles(profileResponse);
    } catch (error) {
      showAlert({ message: 'Perfil não encontrado', type: 'error' });
    }
  };

  const searchMyArticles = async (profile?: Profile): Promise<void> => {
    try {
      const response = await articleApi.listArticles({
        author: profile?.username,
      });
      setActivedButton(true);
      setArticles(response.articles);
    } catch (error) {
      showAlert({ message: 'Artigo não encontrado', type: 'error' });
    }
  };

  const searchFavoritedArticles = async (): Promise<void> => {
    try {
      const response = await articleApi.listArticles({
        favorited: profile?.username,
      });
      setActivedButton(false);
      setArticles(response.articles);
    } catch (error) {
      showAlert({
        message: 'Erro ao buscar os artigos favoritos',
        type: 'error',
      });
    }
  };

  const favoritedArticle = async (
    slug: string,
    state: boolean,
  ): Promise<void> => {
    try {
      if (state) {
        await articleApi.unfavoritedArticle(slug);
      } else {
        await articleApi.favoritedArticle(slug);
      }
    } catch (error) {
      showAlert({ message: error.message, type: 'error' });
    }
  };

  const handleChangeFollow = async (
    username: string,
    state: boolean,
  ): Promise<void> => {
    try {
      if (username) {
        if (state) {
          await userApi.unfollowUser(username);
          setFollow(!follow);
        } else {
          await userApi.followUser(username);
          setFollow(!follow);
        }
      }
    } catch (error) {
      showAlert({ message: 'Erro no follow', type: 'error' });
    }
  };

  return (
    <Profile
      user={profile}
      articles={articles}
      searchMyArticles={searchMyArticles}
      searchFavoritedArticles={searchFavoritedArticles}
      favoritedArticle={favoritedArticle}
      userLogged={user}
      handleChangeFollow={handleChangeFollow}
      follow={follow}
      activedButton={activedButton}
    />
  );
};

export default ProfileContainer;
