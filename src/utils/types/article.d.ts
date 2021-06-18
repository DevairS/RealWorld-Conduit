declare type ArticlesList = {
  author: {
    username: string;
    bio?: string;
    following: boolean;
    image?: string;
  };
  body?: string;
  description?: string;
  favorited: boolean;
  favoritesCount?: number;
  slug?: string;
};
