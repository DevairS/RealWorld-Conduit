import { Formik } from 'formik';
import React from 'react';
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
} from './styles';

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
        <p>Sua conta</p>
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
                  className={
                    errors.image && touched.image
                      ? 'text-input error'
                      : 'text-input'
                  }
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
                  className={
                    errors.username && touched.username
                      ? 'text-input error'
                      : 'text-input'
                  }
                />
                {errors.username && touched.username && (
                  <TextErro>{errors.username}</TextErro>
                )}

                <InputArea
                  id="bio"
                  placeholder="Um breve biografia sobre você"
                  value={values.bio}
                  onChange={handleChange}
                  className={
                    errors.bio && touched.bio
                      ? 'text-input error'
                      : 'text-input'
                  }
                />
                {errors.bio && touched.bio && <TextErro>{errors.bio}</TextErro>}
                <Input
                  id="email"
                  placeholder="Seu email"
                  type="text"
                  value={values.email}
                  onChange={handleChange}
                  className={
                    errors.email && touched.email
                      ? 'text-input error'
                      : 'text-input'
                  }
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
                  className={
                    errors.password && touched.password
                      ? 'text-input error'
                      : 'text-input'
                  }
                />
                {errors.password && touched.password && (
                  <TextErro>{errors.password}</TextErro>
                )}
                <WrapperButton>
                  <Button type="submit">Confirme as mudanças</Button>
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
