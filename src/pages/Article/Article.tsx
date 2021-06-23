import React from 'react';
import { Formik } from 'formik';
import { SchemaOf } from 'yup';
import { Footer, Navbar, Button } from '../../components';
import {
  WrapperTop,
  Image,
  ButtonFollow,
  ButtonFavorited,
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
  Body,
} from './styles';

type Props = {
  article?: Article;
  comments?: ArticleComment;
  handleChangeFollow(): void;
  submitForm(comment: NewComment, slug?: string): void;
  validationSchema: SchemaOf<NewComment>;
  userLogged?: User;
  deleteArticle(slug: string): void;
};

const Article: React.FC<Props> = ({
  article,
  comments,
  handleChangeFollow,
  submitForm,
  userLogged,
  deleteArticle,
}) => {
  const date = article?.createdAt.split('T', 1);
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
          <div>
            <Author href={`/profile/${article?.author.username}`}>
              {article?.author.username}
            </Author>
            <p>{date}</p>
          </div>

          {userLogged?.username === article?.author.username ? (
            <div>
              <a href={`editor/${article?.slug}`}>
                <ButtonFollow type="button">Editar artigo</ButtonFollow>
              </a>
              <ButtonFavorited
                logged={userLogged?.username === article?.author.username}
                type="button"
                onClick={() => deleteArticle(article ? article.slug : '')}
              >
                Deletar Artigo
              </ButtonFavorited>
            </div>
          ) : (
            <div>
              <ButtonFollow type="button" onClick={handleChangeFollow}>
                Seguir {article?.author.username}
              </ButtonFollow>
              <ButtonFavorited
                logged={userLogged?.username === article?.author.username}
                type="button"
              >
                Favorita Artigo
              </ButtonFavorited>
            </div>
          )}
        </WrapperFollow>
      </WrapperTop>
      <WrapperBottom>
        <WrapperContent>
          <Body>{article?.body}</Body>
          <WrapperTags>
            {article?.tagList?.map((item, index) => {
              return <Tag key={index}>{item}</Tag>;
            })}
          </WrapperTags>
          <Divider />
          {userLogged ? (
            <WrapperComments>
              <Formik
                initialValues={{ body: '' }}
                onSubmit={async (values) => submitForm(values, article?.slug)}
              >
                {(props) => {
                  const {
                    values,
                    touched,
                    errors,
                    handleChange,
                    handleSubmit,
                  } = props;
                  return (
                    <Form onSubmit={handleSubmit}>
                      <Input
                        id="body"
                        placeholder="Faça seu comentário sobre esse artigo"
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
                        <Button type="submit" text="Comentar" />
                      </WrapperButton>
                    </Form>
                  );
                }}
              </Formik>

              {comments?.map((item, index) => {
                return (
                  <WrapperComment key={index}>
                    <Input value={item.body} />
                    <WrapperAuthorComment>
                      <Image
                        src={item.author.image}
                        alt="userComent"
                        width="20"
                        height="20"
                      />
                      {item.author.username}
                    </WrapperAuthorComment>
                  </WrapperComment>
                );
              })}
            </WrapperComments>
          ) : (
            <div />
          )}
        </WrapperContent>
      </WrapperBottom>
      <Footer />
    </>
  );
};

export default Article;
