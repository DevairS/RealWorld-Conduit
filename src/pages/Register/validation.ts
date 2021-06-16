import { string, object, SchemaOf } from 'yup';

export const schemaValidation: SchemaOf<UserRegister> = object({
  username: string().min(1).max(20).defined('Username Obrigatório'),
  email: string().email().defined('Email Obrigatório'),
  password: string().min(8).defined('Senha Obrigatória'),
}).defined();
