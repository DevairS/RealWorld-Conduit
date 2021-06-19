declare type Article = {
  author: {
    username: string;
    bio?: string;
    following: boolean;
    image: string;
  };
  body: string;
  description?: string;
  favorited: boolean;
  favoritesCount?: number;
  title: string;
  createdAt: string;
  updateAt: string;
  tagList?: TagList;
}[];

declare type ArticlesList = {
  articles: Article;
  articlesCount: number;
};

declare type ArticleCreate = {
  title: string;
  body: string;
  description: string;
  tagList?: TagList;
};
