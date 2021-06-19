import React, { KeyboardEvent, useState } from 'react';
import { ArticleApi } from '../../api';
import showAlert from '../../utils/helpers/Alert';
import Editor from './Editor';
import { schemaValidation } from './validation';

const EditorContainer: React.FC = () => {
  const articleApi = ArticleApi.getInstance();

  const [tagsList, setTagsList] = useState<TagsList>([]);
  const handleChangeTags = (event: KeyboardEvent<HTMLInputElement>): void => {
    const target = event.target as HTMLInputElement;
    const { value } = target;
    let isTagExist = false;

    const filteredTags = tagsList.filter((tag) => {
      if (tag === value) {
        showAlert({
          message: 'Você não pode adicionar um tag igual',
          type: 'error',
        });
        isTagExist = true;
      }
      return tag !== value;
    });

    if (value === '' || isTagExist) {
      showAlert({
        message: `Você não pode adicionar um tag ${
          isTagExist ? 'já existente' : 'vazia'
        }`,
        type: 'error',
      });
      return;
    }

    setTagsList([...filteredTags, value]);
  };

  const deleteTag = (removeTagIndex: number): void => {
    setTagsList([...tagsList.filter((_, index) => index !== removeTagIndex)]);
  };

  const submit = async (values: ArticleCreate): Promise<void> => {
    try {
      await articleApi.createArticle(values, tagsList);
      showAlert({ message: 'Artigo publicado com sucesso', type: 'success' });
    } catch (error) {
      showAlert({ message: 'Error ao publicar o artigo', type: 'error' });
    }
  };

  return (
    <Editor
      validationSchema={schemaValidation}
      submitForm={submit}
      handleChangeTags={handleChangeTags}
      tagsList={tagsList}
      deleteTag={deleteTag}
    />
  );
};

export default EditorContainer;
