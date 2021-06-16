import { Formik } from 'formik';
import React from 'react';
import { SchemaOf } from 'yup';
import { Navbar, Footer } from '../../components';

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

type Props = {
  validationSchema: SchemaOf<UserRegister>;
  submitForm(value: UserRegister): Promise<void>;
};

const Register: React.FC<Props> = ({ validationSchema, submitForm }) => {
  return (
    <>
      <Navbar />
      <Wrapper>
        <TextPrimary>Sign in</TextPrimary>
        <TextSecondary href="/login">Have an account</TextSecondary>
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
                  className={
                    errors.username && touched.username
                      ? 'text-input error'
                      : 'text-input'
                  }
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
                  <Button type="submit">Sign up</Button>
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

export default Register;
