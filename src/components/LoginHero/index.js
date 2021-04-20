import React, { useState } from 'react';
import styles from './LoginHero.module.scss';
import { StylesProvider } from "@material-ui/core/styles";
import Button from '@material-ui/core/Button';
import { Paper, Avatar } from "@material-ui/core";
import LockRounded from "@material-ui/icons/LockRounded";
import { Redirect } from 'react-router-dom';
import { NavLink } from 'react-router-dom';
import axios from 'axios';

//Formik Validation
import { Formik, Form } from 'formik';
import { FormikTextField } from 'formik-material-fields';
import * as Yup from 'yup';

//Redux
import { useDispatch } from 'react-redux';
import { setIsLoggedIn } from '../../actions/user';

const LoginHero = () => {
  const [username, setUserName] = useState('');
  const [email, setUserEmail] = useState('');
  const [redirect, setRedirect] = useState(false);
  const [error, setError] = useState(false);
  const dispatch = useDispatch();

  const SignupSchema = Yup.object().shape({
    username: Yup.string()
      .min(2, 'Too Short!')
      .max(50, 'Too Long!')
      .required('Required'),
    email: Yup.string().email('Invalid email').required('Required'),
  });

  const handleSubmit = (e) => {
    axios({
      method: 'get',
      url: `https://jsonplaceholder.typicode.com/users`,
      withCredentials: true,
      headers: {
        'content-type': 'application/x-www-form-urlencoded',
      },
    }).then(response => {
      if (response.data.errors) {
        setError(response.data.errors);
      } else {
        response.data.forEach((el) => {
          console.log(el.email);
          if (el.email.toLowerCase() === email.toLowerCase() && el.username.toLowerCase() === username.toLowerCase()) {
            console.log('true');
            setRedirect(true);
            dispatch(setIsLoggedIn(true));
            localStorage.setItem('isLoggedIn', true);
          } else {
            console.log('false');
            setError(true);
            setTimeout(() => {
              setError(false);
            }, 2000);
          }
        })
      }
    });
  }

  return (
    <>
      {redirect ? (
        <Redirect to="/profile" />
      ) : (
        <section className={`${styles.login} login section bg bg__pages`}>
          <div className="container">
            <div className={styles.wrapper}>
              <Avatar className={styles.icon}>
                <LockRounded/>
              </Avatar>
              <h3 className={`${styles.subtitle} subtitle`}>Sign In</h3>
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
                          onChange={(e) => setUserName(e.target.value)}
                          label='Username'
                          name='username'
                          variant="filled" />
                        <FormikTextField
                          onChange={(e) => setUserEmail(e.target.value)}
                          label='Email'
                          name='email'
                          variant="filled" />
                        {error ? <div className='error show'>Invalid Username or Email</div> : <div className='error hide'>Invalid Username or Email</div> }
                        <Button disabled={!isValid} onClick={handleSubmit} className={`btn`} variant="contained">Sign In</Button>
                      </Form>
                    )}
                  </Formik>
                    <div className={ styles.or }>or</div>
                  <NavLink exact to='/signup'>
                    <Button onClick={handleSubmit} className='btn' variant="contained">Sign Up</Button>
                  </NavLink>
                </StylesProvider>
              </Paper>
            </div>
          </div>
        </section>
      )}
    </>
  );
};

export default LoginHero;