declare type UserLogin = {
  email: string;
  password: string;
};

declare type UserRegister = {
  username: string;
  email: string;
  password: string;
};

declare type User =
  | {
      email: string;
      token?: string;
      username: string;
      bio?: string;
      image?: string | null;
    }
  | undefined;

declare type UserResponse = {
  user: User;
};
