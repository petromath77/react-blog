import React from 'react';
import { StylesProvider } from "@material-ui/core/styles";
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import styles from './ContactForm.module.scss';
import content from '../../content';

const ContactForm = () => {
  return (
    <div className={`${styles['form-wrapper']}`}>
      <div className="container">
        <div className={styles.wrapper}>
        <h3 className={`subtitle`}>Contact for Hire</h3>
        </div>
      </div>
      <form className={`${styles.form} form`}>
        <StylesProvider injectFirst>
          {content.inputLabels.map((item, index) => (
            <TextField
              id="filled-secondary"
              label={item}
              variant="filled" key={index} />
          ))}
          <TextField
            id="filled-secondary"
            label="Message:"
            multiline
            rows= "4"
            variant="filled" />
          <Button className={`${styles.button} btn`} variant="contained">Send Message</Button>
        </StylesProvider>
      </form>
    </div>
  );
};

export default ContactForm;