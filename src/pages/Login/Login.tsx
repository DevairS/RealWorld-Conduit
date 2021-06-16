import React from 'react';
import { Formik } from 'formik';
import { SchemaOf } from 'yup';
import {
  Button,
  Form,
  Input,
  TextErro,
  TextPrimary,
  TextSecondary,
  Wrapper,
  WrapperButton,
} from './styles';
import { Navbar, Footer } from '../../components';

type Props = {
  validationSchema: SchemaOf<UserLogin>;
  submitForm(value: UserLogin): Promise<void>;
};

const Login: React.FC<Props> = ({ validationSchema, submitForm }) => {
  return (
    <>
      <Navbar />
      <Wrapper>
        <TextPrimary>Sign in</TextPrimary>
        <TextSecondary href="/register">Need an account</TextSecondary>
        <Formik
          initialValues={{ email: '', password: '' }}
          onSubmit={submitForm}
          validationSchema={validationSchema}
        >
          {(props) => {
            const { values, touched, errors, handleChange, handleSubmit } =
              props;
            return (
              <Form onSubmit={handleSubmit}>
                <Input
                  id="email"
                  placeholder="email"
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
                  placeholder="password"
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
                  <Button type="submit">Cadastrar</Button>
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

export default Login;
