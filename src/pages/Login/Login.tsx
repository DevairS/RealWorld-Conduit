import React from 'react';
import { Formik } from 'formik';
import { SchemaOf } from 'yup';
import { Navbar, Footer, Input, Button } from '../../components';
import {
  Form,
  TextErro,
  TextPrimary,
  TextSecondary,
  Wrapper,
  WrapperButton,
} from './styles';

type Props = {
  validationSchema: SchemaOf<UserLogin>;
  submitForm(value: UserLogin): Promise<void>;
};

const Login: React.FC<Props> = ({ validationSchema, submitForm }) => {
  return (
    <>
      <Navbar />
      <Wrapper>
        <TextPrimary>Entrar</TextPrimary>
        <TextSecondary href="/register">
          Click aqui para cadastra-se
        </TextSecondary>
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
                  <Button type="submit" text="Entrar" />
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
