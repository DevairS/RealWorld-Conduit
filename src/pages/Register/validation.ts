import { string, object, SchemaOf } from 'yup';

export const schemaValidation: SchemaOf<User> = object({
  username: string().defined('Username Obrigatório'),
  email: string().email().defined('Email Obrigatório'),
  password: string().defined('Senha Obrigatória'),
}).defined();
