import React from 'react';
import styles from './SignupHero.module.scss';
import { StylesProvider } from "@material-ui/core/styles";
import Button from '@material-ui/core/Button';
import { Paper, Avatar } from "@material-ui/core";
import HowToRegIcon from '@material-ui/icons/HowToReg';

//Formik Validation
import { Formik, Form } from 'formik';
import { FormikTextField } from 'formik-material-fields';
import * as Yup from 'yup';

const SignupHero = () => {

  const handleSubmit = (e) => {
    console.log('!!!');
  }

  const SignupSchema = Yup.object().shape({
    username: Yup.string()
      .min(2, 'Too Short!')
      .max(50, 'Too Long!')
      .required('Required'),
    email: Yup.string().email('Invalid email').required('Required'),
  });

  return (
    <section className={`signup login section bg bg__pages`}>
      <div className="container">
        <div className={styles.wrapper}>
          <Avatar className={styles.icon}>
            <HowToRegIcon/>
          </Avatar>
          <h3 className={`${styles.subtitle} subtitle`}>Sign Up</h3>
          <Paper className={ styles.form }>
            <StylesProvider injectFirst>
              <Formik
                initialValues={{
                  username: '',
                  email: '',
                }}
                validationSchema={SignupSchema}
              >
                {({ isValid }) => (
                  <Form>
                    <FormikTextField
                      label='Username'
                      name='username'
                      variant="filled" />
                    <FormikTextField
                      label='Email'
                      name='email'
                      variant="filled" />
                    <Button disabled={!isValid} onClick={handleSubmit} className={`btn`} variant="contained">Sign Up</Button>
                  </Form>
                )}
              </Formik>
            </StylesProvider>
          </Paper>
        </div>
      </div>
    </section>
  );
};

export default SignupHero;