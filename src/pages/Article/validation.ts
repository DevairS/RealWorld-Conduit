import { string, object, SchemaOf } from 'yup';

export const schemaValidation: SchemaOf<NewComment> = object({
  body: string().defined('Comente algo'),
}).defined();
