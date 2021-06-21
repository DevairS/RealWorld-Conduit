import React from 'react';
import { Formik } from 'formik';
import { SchemaOf } from 'yup';
import { Footer, Navbar } from '../../components';
import {
  WrapperTop,
  Image,
  Button,
  WrapperFollow,
  ArticleTitle,
  Author,
  WrapperBottom,
  WrapperComments,
  WrapperComment,
  WrapperAuthorComment,
  WrapperContent,
  WrapperTags,
  Tag,
  Divider,
  Form,
  Input,
  TextErro,
  WrapperButton,
} from './styles';

type Props = {
  article?: Article;
  comments?: ArticleComment;
  handleChangeFollow(username: string, state: boolean): void;
  submitForm(comment: NewComment, slug?: string): void;
  validationSchema: SchemaOf<NewComment>;
};

const Article: React.FC<Props> = ({
  article,
  comments,
  handleChangeFollow,
  submitForm,
  validationSchema,
}) => {
  return (
    <>
      <Navbar />
      <WrapperTop>
        <ArticleTitle>{article?.title}</ArticleTitle>
        <WrapperFollow>
          <Image
            src={article?.author.image}
            width="40"
            height="40"
            alt="imageAuthor"
          />
          <Author>{article?.author.username}</Author>

          <Button type="button">Seguir {article?.author.username}</Button>
          <Button type="button">Favorita Artigo</Button>
        </WrapperFollow>
      </WrapperTop>
      <WrapperBottom>
        <WrapperContent>
          <p>{article?.title}</p>
          <WrapperTags>
            {article?.tagList?.map((item, index) => {
              return <Tag key={index}>{item}</Tag>;
            })}
          </WrapperTags>
          <Divider />
          <WrapperComments>
            <Formik
              initialValues={{ body: '' }}
              onSubmit={async (values) => submitForm(values, article?.slug)}
              validationSchema={validationSchema}
            >
              {(props) => {
                const { values, touched, errors, handleChange, handleSubmit } =
                  props;
                return (
                  <Form onSubmit={handleSubmit}>
                    <Input
                      id="body"
                      placeholder="Faça seu comentário sobre esse artigo"
                      type="text"
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
                    <WrapperButton>
                      <Button type="submit">Cadastrar</Button>
                    </WrapperButton>
                  </Form>
                );
              }}
            </Formik>

            {comments?.map((item, index) => {
              return (
                <WrapperComment key={index}>
                  <WrapperAuthorComment>
                    <Image
                      src={item.author.image}
                      width="20"
                      height="20"
                      alt="imageAuthor"
                    />
                    <p>{item.author.username}</p>

                    <Button
                      type="button"
                      onClick={() => {
                        handleChangeFollow(
                          item.author.username,
                          item.author.following,
                        );
                      }}
                    >
                      Seguir
                    </Button>
                  </WrapperAuthorComment>
                  <p>{item.body}</p>
                </WrapperComment>
              );
            })}
          </WrapperComments>
        </WrapperContent>
      </WrapperBottom>
      <Footer />
    </>
  );
};

export default Article;
