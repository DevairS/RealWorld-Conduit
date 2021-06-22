declare type Article = {
  author: {
    username: string;
    bio?: string;
    following: boolean;
    image: string;
  };
  body: string;
  description?: string;
  slug: string;
  favorited: boolean;
  favoritesCount: number;
  title: string;
  createdAt: string;
  updateAt: string;
  tagList?: TagList[];
};

declare type Articles = Article[];

declare type ArticlesList = {
  articles: Articles;
  articlesCount: number;
};

declare type ArticleCreate = {
  title: string;
  body?: string;
  description: string;
  tagList?: TagList;
};

declare type QueryArticles = {
  author: string;
  tag: string;
  favorited: string;
};

declare type ArticleRouteParams = {
  slug: string;
};

declare type NewComment = { body: string };

declare type ArticleComment = {
  author: {
    username: string;
    bio?: string;
    following: boolean;
    image: string;
  };
  body: string;
  id: number;
  createdAt: string;
  updateAt: string;
}[];
