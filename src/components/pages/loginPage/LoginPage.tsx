import React, { useEffect } from 'react';
import * as Yup from 'yup';
import { Formik } from 'formik';
import { useDispatch, useSelector } from 'react-redux';
import { useHistory } from 'react-router-dom';

import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import TextField from '@material-ui/core/TextField';
import FormHelperText from '@mui/material/FormHelperText';

import { RootState } from '../../../types/types';
import { loginInitiate } from '../../../redux/actions/authActions';
import Spinner from '../../common/spinner/Spinner';
import styles from './LoginPage.module.scss';

export default function LoginPage() {
  let history = useHistory();
  let dispatch: any = useDispatch();
  const { user, error, loading } = useSelector((state: RootState) => state.auth);

  useEffect(() => {
    if (user) {
      history.push('/');
    }
  }, [history, user]);

  return (
  
    <div className={styles.container}>
      {loading ? (
        <Spinner />
      ) : (
        <Formik
          initialValues={{ email: '', password: '' }}
          validationSchema={Yup.object({
            email: Yup.string().email().required('Це поле є обов`язковим.'),
            password: Yup.string().required('Це поле є обов`язковим.'),
          })}
          onSubmit={(values, actions) => {
            actions.setSubmitting(false);
            actions.resetForm();
            dispatch(loginInitiate(values.email, values.password));
          }}
        >
          {(formik) => (
            <form onSubmit={formik.handleSubmit}>
              <Card color="primary" className={styles.form}>
                <CardContent>
                  <Typography gutterBottom variant="h5" component="h2">
                    Увійти
                  </Typography>

                  {error ? <FormHelperText error={true}>{error}</FormHelperText> : null}

                  <div className={styles.inputsBlock}>
                    <TextField
                      id="email"
                      {...formik.getFieldProps('email')}
                      className={styles.emailInput}
                      label="Електронна пошта"
                      variant="outlined"
                      color="primary"
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
      )}
    </div>
  );
}
