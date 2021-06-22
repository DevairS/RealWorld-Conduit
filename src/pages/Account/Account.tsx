import { Formik } from 'formik';
import React from 'react';
import { SchemaOf } from 'yup';
import { Footer, Navbar, Input, Button, InputArea } from '../../components';
import { TextPrimary, Form, TextErro, Wrapper, WrapperButton } from './styles';

type Props = {
  userLogged: UserUpdate;
  validationSchema: SchemaOf<UserUpdate>;
  submitForm(value: UserUpdate): Promise<void>;
};

const account: React.FC<Props> = ({
  userLogged,
  validationSchema,
  submitForm,
}) => {
  return (
    <>
      <Navbar />
      <Wrapper>
        <TextPrimary>Dados da sua conta</TextPrimary>
        <Formik
          initialValues={userLogged}
          onSubmit={submitForm}
          validationSchema={validationSchema}
        >
          {(props) => {
            const { values, touched, errors, handleChange, handleSubmit } =
              props;
            return (
              <Form onSubmit={handleSubmit}>
                <Input
                  id="image"
                  placeholder="URL da sua foto de perfil"
                  type="text"
                  value={values.image}
                  onChange={handleChange}
                />
                {errors.image && touched.image && (
                  <TextErro>{errors.image}</TextErro>
                )}

                <Input
                  id="username"
                  placeholder="Seu login"
                  type="text"
                  value={values.username}
                  onChange={handleChange}
                />
                {errors.username && touched.username && (
                  <TextErro>{errors.username}</TextErro>
                )}

                <InputArea
                  id="bio"
                  placeholder="Um breve biografia sobre você"
                  value={values.bio}
                  onChange={handleChange}
                />
                {errors.bio && touched.bio && <TextErro>{errors.bio}</TextErro>}
                <Input
                  id="email"
                  placeholder="Seu email"
                  type="text"
                  value={values.email}
                  onChange={handleChange}
                />
                {errors.email && touched.email && (
                  <TextErro>{errors.email}</TextErro>
                )}
                <Input
                  id="password"
                  placeholder="Nova senha"
                  type="password"
                  value={values.password}
                  onChange={handleChange}
                />
                {errors.password && touched.password && (
                  <TextErro>{errors.password}</TextErro>
                )}
                <WrapperButton>
                  <Button type="submit" text="Confirme as mudanças" />
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

export default account;
