import React from 'react';
import styles from './Login.module.scss';
import { StylesProvider } from "@material-ui/core/styles";
import Button from '@material-ui/core/Button';
import { TextField } from 'material-ui-formik-components/TextField'
import { Paper, Avatar } from "@material-ui/core";
import LockRounded from "@material-ui/icons/LockRounded";
import { Formik, Field } from 'formik';
import { useHistory } from "react-router-dom";

const Login = () => {
  const history = useHistory();
  
  function validateUsername(value) {
    let error;
    if (!value || value === 'admin') {
      error = 'Enter valid username!';
    }
    return error;
  }

  function validateUserPass(value) {
    let error;
    if (!value || value.length <3 || value.length >8 ) {
      error = 'Incorrect password!';
    }
    return error;
  }

  const handleSubmit = () => {
    history.push('/profile');
  }

  return (
    <section className={`${styles.login} login section bg bg__pages`}>
      <div className="container">
        <div className={styles.wrapper}>
          <Avatar className={styles.icon}>
            <LockRounded/>
          </Avatar>
          <h3 className={`${styles.subtitle} subtitle`}>Sign In</h3>
          <Formik
            initialValues={{
              username: '',
              password: ''
            }}
            validateOnBlur
            >
            {({ isValid, dirty }) => (
              <form onSubmit={ handleSubmit }>
                <Paper className={ styles.form }>
                  <StylesProvider injectFirst>

                      <Field component={TextField}
                          validate={validateUsername}
                          label='Username'
                          name='username'
                          variant="filled" />
                      <Field component={TextField}
                          validate={validateUserPass}
                          label='Password'
                          name='password'
                          variant="filled" />
                      <Button type='submit' disabled={!(dirty && isValid)} className={!(dirty && isValid) ? `${styles.button} btn btn__disabled` : `${styles.button} btn`} variant="contained">Sign In</Button>
                    </StylesProvider>
                  </Paper>
              </form>
            )}
          </Formik>
        </div>
      </div>
    </section>
  );
};

export default Login;