import React from 'react';
import { Link } from 'react-router-dom';
import content from '../../content';
import styles from './ContactSection.module.scss';

const ContactItem = props => {
  const { item, title } = props;

  return (
    <li className={styles.item}>
      <ul className={styles.sublist}>
        <h3 className={`${styles.title} subtitle`}>{title}</h3>
        {Object.values(item)[0].map((subitem, index) => (
          <li className={styles.subitem} key={index}>
            <span className={styles['subitem-text']}>{subitem.name}</span>
            <span className={styles['subitem-text']}>{subitem.phone}</span>
            <Link className={styles['subitem-link']} to="#">{subitem.email}</Link>
          </li>
        ))}
      </ul>
    </li>
  );
};

const ContactList = () => {
  return (
    <>
      <ul className={styles.list}>
        {content.contactList.map((item, index) => (
          <ContactItem item={item} title={Object.keys(item)[0]} key={index} />
        ))}
      </ul>
    </>
  );
};

const ContactSection = () => {
  return (
    <section className={`${styles.contact} section bg bg__pages`}>
      <div className="container">
        <div className={styles.wrapper}>
          <h2 className={`title`}>Get in touch</h2>
          <ContactList />
        </div>
      </div>
    </section>
  );
};

export default ContactSection;