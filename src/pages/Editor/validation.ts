import { string, object, SchemaOf } from 'yup';

export const schemaValidation: SchemaOf<ArticleCreate> = object({
  title: string().defined('Titulo Obrigatório'),
  description: string().defined('Descrição Obrigatória'),
  body: string(),
  tagList: string(),
}).defined();
