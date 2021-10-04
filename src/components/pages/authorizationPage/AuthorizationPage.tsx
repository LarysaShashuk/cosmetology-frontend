import React from 'react';
import * as Yup from 'yup';
import { Formik } from 'formik';

import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import TextField from '@material-ui/core/TextField';

import styles from './AuthorizationPage.module.scss';

export default function AuthorizationPage() {
  return (
    <div className={styles.container}>
      <Formik
        initialValues={{ email: '', password: '' }}
        validationSchema={Yup.object({
          email: Yup.string().email().required('Це поле є обов`язковим.'),
          password: Yup.string()
            .required('Це поле є обов`язковим.')
            .min(3, 'Пароль повинен включати, щонаймеше 3 символи.')
            .matches(/(?=.*[0-9])/, 'Пароль повинен містити цифру.')
            .matches(/(?=.*[A-Z])/, 'Пароль повинен містити велику літеру.')
            .matches(/(?=.*[a-z])/, 'Пароль повинен містити малу літеру'),
        })}
        onSubmit={(values, actions) => {
          actions.setSubmitting(false);
          actions.resetForm();
          console.log(values);
        }}
      >
        {(formik) => (
          <form onSubmit={formik.handleSubmit}>
            <Card className={styles.form}>
              <CardContent>
                <Typography gutterBottom variant="h5" component="h2">
                  Увійти
                </Typography>

                <div className={styles.inputsBlock}>
                  <TextField
                    id="email"
                    {...formik.getFieldProps('email')}
                    className={styles.emailInput}
                    label="Електронна пошта"
                    variant="outlined"
                    size="small"
                    error={formik.touched.email && formik.errors.email ? true : false}
                    helperText={
                      formik.touched.email && formik.errors.email ? formik.errors.email : null
                    }
                  />

                  <TextField
                    id="password"
                    {...formik.getFieldProps('password')}
                    className={styles.passwordInput}
                    label="Пароль"
                    variant="outlined"
                    type="password"
                    size="small"
                    error={formik.touched.password && formik.errors.password ? true : false}
                    helperText={
                      formik.touched.password && formik.errors.password
                        ? formik.errors.password
                        : null
                    }
                  />
                </div>
              </CardContent>

              <div className={styles.submitButton}>
                <Button
                  disabled={!formik.isValid}
                  size="small"
                  variant="contained"
                  color="primary"
                  type="submit"
                >
                  Надіслати
                </Button>
              </div>
            </Card>
          </form>
        )}
      </Formik>
    </div>
  );
}
