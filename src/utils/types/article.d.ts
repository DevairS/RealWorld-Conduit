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
  slug: string;
  title: string;
  createdAt: string;
  updateAt: string;
  tagList?: [string];
}[];

declare type ArticlesList = {
  articles: Article;
  articlesCount: number;
};
