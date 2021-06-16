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
  validationSchema: SchemaOf<UserLogin>;
  submitForm(value: UserLogin): Promise<void>;
};

const settings: React.FC<Props> = ({ validationSchema, submitForm }) => {
  return (
    <>
      <Navbar />
      <Wrapper>
        <p>Your Settings</p>
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
                  id="url"
                  placeholder="URL of profile picture"
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
                  id="email"
                  placeholder="login"
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

                <InputArea
                  id="email"
                  placeholder="Short bio about you"
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
                  <Button type="submit">Update Settings</Button>
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

export default settings;
