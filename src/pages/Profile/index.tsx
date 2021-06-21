import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import Profile from './Profile';
import { ArticleApi, ProfileApi } from '../../api';
import showAlert from '../../utils/helpers/Alert';

const ProfileContainer: React.FC = () => {
  const articleApi = ArticleApi.getInstance();
  const profileApi = ProfileApi.getInstance();

  const [articles, setArticles] = useState<Article>();
  const [profile, setProfile] = useState<Profile>();

  const { name } = useParams<ProfileRouteParams>();

  useEffect(() => {
    searchProfile();
  }, []);

  const searchProfile = async (): Promise<void> => {
    try {
      const profileResponse = await profileApi.getProfile(name);
      setProfile(profileResponse);
      await searchMyArticles(profileResponse);
    } catch (error) {
      showAlert({ message: error.message, type: 'error' });
    }
  };

  const searchMyArticles = async (profile?: Profile): Promise<void> => {
    try {
      const response = await articleApi.listArticles({
        author: profile?.username,
      });
      setArticles(response.articles);
    } catch (error) {
      showAlert({ message: error.message, type: 'error' });
    }
  };

  const searchFavoritedArticles = async (): Promise<void> => {
    try {
      const response = await articleApi.listArticles({
        favorited: profile?.username,
      });
      setArticles(response.articles);
    } catch (error) {
      showAlert({ message: error.message, type: 'error' });
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

  return (
    <Profile
      user={profile}
      articles={articles}
      searchMyArticles={searchMyArticles}
      searchFavoritedArticles={searchFavoritedArticles}
      favoritedArticle={favoritedArticle}
    />
  );
};

export default ProfileContainer;
