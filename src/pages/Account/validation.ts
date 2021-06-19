import { string, object, SchemaOf } from 'yup';

export const schemaValidation: SchemaOf<UserUpdate> = object({
  username: string().defined('Nome do usuário Obrigatório'),
  bio: string(),
  email: string().email().defined('Email Obrigatório'),
  image: string(),
  password: string(),
}).defined();
