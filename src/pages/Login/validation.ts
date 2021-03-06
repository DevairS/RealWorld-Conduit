import { string, object, SchemaOf } from 'yup';

export const schemaValidation: SchemaOf<UserLogin> = object({
  email: string().email().defined('Email Obrigatório'),
  password: string().defined('Senha Obrigatória'),
}).defined();
