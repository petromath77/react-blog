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
        <h3 className={`${styles.subtitle} subtitle`}>Contact for Hire</h3>
        <form className={`${styles.form} form`}>
          <StylesProvider injectFirst>
            {content.inputLabels.map((item, index) => (
              <TextField
                label={item}
                variant="filled" key={index} />
            ))}
            <TextField
              label="Message:"
              multiline
              rows= "4"
              variant="filled" />
            <Button className={`${styles.button} btn`} variant="contained">Send Message</Button>
          </StylesProvider>
        </form>
      </div>
    </div>
  );
};

export default ContactForm;