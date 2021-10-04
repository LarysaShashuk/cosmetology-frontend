import React from 'react';
import * as Yup from 'yup';
import { Formik } from 'formik';
import cx from 'classnames';

import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import TextField from '@material-ui/core/TextField';

import { ArticleFormPropsType } from '../../types/types';
import styles from './ArticleForm.module.scss';

export default function ArticleForm(props: ArticleFormPropsType) {
  const { initialValues, handleReduxAction, heading, handleClose, isAddingArticle, isArticlePage } =
    props;
  const createId = () => new Date().getTime().toString();

  return (
    <div className={cx(!isArticlePage && styles.blockWrap)}>
      <Formik
        initialValues={initialValues}
        validationSchema={Yup.object({
          title: Yup.string()

            .required('Це поле є обов`язковим.')
            .min(5, 'Назва має містити, щонайменше 5 символів'),
          text: Yup.string().required('Це поле є обов`язковим.'),
        })}
        onSubmit={(values, actions) => {
          actions.setSubmitting(false);
          actions.resetForm();

          if (isAddingArticle) {
            actions.setFieldValue('id', createId());
          }
          handleClose();
          handleReduxAction(values);
        }}
      >
        {(formik) => (
          <form onSubmit={formik.handleSubmit}>
            <Card className={styles.form}>
              <CardContent>
                {heading && (
                  <Typography gutterBottom variant="h5" component="h2">
                    {heading}
                  </Typography>
                )}

                <div className={styles.inputsBlock}>
                  <TextField
                    id="title"
                    {...formik.getFieldProps('title')}
                    className={styles.titleInput}
                    label="Заголовок"
                    variant="outlined"
                    multiline
                    size="small"
                    error={formik.touched.title && formik.errors.title ? true : false}
                    helperText={
                      formik.touched.title && formik.errors.title ? formik.errors.title : null
                    }
                  />

                  <TextField
                    id="text"
                    {...formik.getFieldProps('text')}
                    className={styles.textInput}
                    label="Текст"
                    variant="outlined"
                    multiline
                    size="small"
                    rows={20}
                    error={formik.touched.text && formik.errors.text ? true : false}
                    helperText={
                      formik.touched.text && formik.errors.text ? formik.errors.text : null
                    }
                  />
                </div>
              </CardContent>

              <CardActions>
                <div className={styles.buttonWrap}>
                  <Button
                    className={styles.submitButton}
                    disabled={!formik.isValid}
                    size="small"
                    variant="contained"
                    color="primary"
                    type="submit"
                  >
                    Зберегти
                  </Button>
                  <Button
                    className={styles.closeButton}
                    size="small"
                    variant="contained"
                    color="secondary"
                    onClick={() => {
                      formik.resetForm();
                      handleClose();
                    }}
                  >
                    Скасувати
                  </Button>
                </div>
              </CardActions>
            </Card>
          </form>
        )}
      </Formik>
    </div>
  );
}
