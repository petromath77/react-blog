import React from 'react';
import content from '../../content';
import styles from './Login.module.scss';
import { StylesProvider } from "@material-ui/core/styles";
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import { Paper, Avatar } from "@material-ui/core";
import LockRounded from "@material-ui/icons/LockRounded";

const Login = () => {
  return (
    <section className={`${styles.login} login section bg bg__pages`}>
      <div className="container">
        <div className={styles.wrapper}>
          <Avatar className={styles.icon}>
            <LockRounded/>
          </Avatar>
          <h3 className={`${styles.subtitle} subtitle`}>Sign In</h3>
          <Paper className={ styles.form }>
            <StylesProvider injectFirst>
              {content.loginLabels.map((item, index) => (
                <TextField
                  label={item}
                  variant="filled" key={index} />
              ))}
              <Button className={`${styles.button} btn`} variant="contained">Sign In</Button>
            </StylesProvider>
          </Paper>
        </div>
      </div>
    </section>
  );
};

export default Login;