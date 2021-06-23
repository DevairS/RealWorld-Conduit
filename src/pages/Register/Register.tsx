import { Formik } from 'formik';
import React from 'react';
import { SchemaOf } from 'yup';
import { Navbar, Footer, Input, Button } from '../../components';

import {
  Form,
  TextErro,
  TextPrimary,
  TextSecondary,
  Wrapper,
  WrapperButton,
  Paper,
} from './styles';

type Props = {
  validationSchema: SchemaOf<UserRegister>;
  submitForm(value: UserRegister): Promise<void>;
};

const Register: React.FC<Props> = ({ validationSchema, submitForm }) => {
  return (
    <>
      <Navbar page="Cadastrar" />
      <Wrapper>
        <Paper elevation={4}>
          <TextPrimary>Cadastro</TextPrimary>

          <TextSecondary>Crie sua conta e já comece a postar!</TextSecondary>
          <Formik
            initialValues={{ username: '', email: '', password: '' }}
            onSubmit={submitForm}
            validationSchema={validationSchema}
          >
            {(props) => {
              const { values, touched, errors, handleChange, handleSubmit } =
                props;
              return (
                <Form onSubmit={handleSubmit}>
                  <Input
                    id="username"
                    placeholder="Username"
                    type="username"
                    value={values.username}
                    onChange={handleChange}
                  />
                  {errors.username && touched.username && (
                    <TextErro>{errors.username}</TextErro>
                  )}
                  <Input
                    id="email"
                    placeholder="email"
                    type="text"
                    value={values.email}
                    onChange={handleChange}
                  />
                  {errors.email && touched.email && (
                    <TextErro>{errors.email}</TextErro>
                  )}
                  <Input
                    id="password"
                    placeholder="password"
                    type="password"
                    value={values.password}
                    onChange={handleChange}
                  />
                  {errors.password && touched.password && (
                    <TextErro>{errors.password}</TextErro>
                  )}

                  <WrapperButton>
                    <Button type="submit" text="Cadastrar" />
                  </WrapperButton>
                </Form>
              );
            }}
          </Formik>
        </Paper>
      </Wrapper>
      <Footer />
    </>
  );
};

export default Register;
