import { Formik } from 'formik';
import React, { KeyboardEvent } from 'react';
import { SchemaOf } from 'yup';
import { Footer, Navbar } from '../../components';
import {
  Button,
  Form,
  Input,
  InputArea,
  TextErro,
  Wrapper,
  WrapperButton,
  TagInputWrapper,
  ListItem,
  ListTags,
  TagName,
  InputTag,
  TagDelete,
  IconDelete,
} from './styles';

type Props = {
  validationSchema: SchemaOf<ArticleCreate>;
  submitForm(value: ArticleCreate): Promise<void>;
  handleChangeTags(tag: KeyboardEvent<HTMLInputElement>): void;
  tagsList: TagsList;
  deleteTag(removeTagIndex: number): void;
};

const Editor: React.FC<Props> = ({
  validationSchema,
  submitForm,
  handleChangeTags,
  tagsList,
  deleteTag,
}) => {
  return (
    <>
      <Navbar />
      <Wrapper>
        <Formik
          initialValues={{ title: '', description: '', body: '' }}
          onSubmit={submitForm}
          validationSchema={validationSchema}
        >
          {(props) => {
            const { values, touched, errors, handleChange, handleSubmit } =
              props;
            return (
              <Form onSubmit={handleSubmit}>
                <Input
                  id="title"
                  placeholder="Artigo título"
                  type="text"
                  value={values.title}
                  onChange={handleChange}
                  className={
                    errors.title && touched.title
                      ? 'text-input error'
                      : 'text-input'
                  }
                />
                {errors.title && touched.title && (
                  <TextErro>{errors.title}</TextErro>
                )}

                <Input
                  id="description"
                  placeholder="Sobre o que é o artigo"
                  type="text"
                  value={values.description}
                  onChange={handleChange}
                  className={
                    errors.description && touched.description
                      ? 'text-input error'
                      : 'text-input'
                  }
                />
                {errors.description && touched.description && (
                  <TextErro>{errors.description}</TextErro>
                )}

                <InputArea
                  id="body"
                  placeholder="Escreva seu artigo"
                  value={values.body}
                  onChange={handleChange}
                  className={
                    errors.body && touched.body
                      ? 'text-input error'
                      : 'text-input'
                  }
                />
                {errors.body && touched.body && (
                  <TextErro>{errors.body}</TextErro>
                )}

                <TagInputWrapper>
                  <ListTags>
                    {tagsList.map((item, index) => {
                      return (
                        <ListItem key={index}>
                          <TagName>{item}</TagName>
                          <TagDelete onClick={() => deleteTag(index)}>
                            <IconDelete />
                          </TagDelete>
                        </ListItem>
                      );
                    })}
                  </ListTags>

                  <InputTag
                    id="tag"
                    placeholder="Adicione sua Tag separada por enter"
                    onKeyUp={(e) => {
                      return e.key === 'Enter' ? handleChangeTags(e) : null;
                    }}
                  />
                </TagInputWrapper>

                <WrapperButton>
                  <Button
                    type="button"
                    onClick={(e) => {
                      return e ? handleSubmit() : null;
                    }}
                  >
                    Publica artigo
                  </Button>
                </WrapperButton>
              </Form>
            );
          }}
        </Formik>
      </Wrapper>
      <Footer />
    </>
  );
};

export default Editor;
