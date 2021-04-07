import React from 'react';
import styles from './Bio.module.scss';
import content from '../../content';

const Bio = () => {
  const createHTML = htmlString => ({
    __html: htmlString.replace(/\r\n/g, '<br />')
  });

  return (
    <div className={`${styles.wrapper}`}>
      <h2 className="title">{content.bandHero[0]}</h2>
      <p
        className="desc"
        dangerouslySetInnerHTML={createHTML(content.bandHero[1])}
      />
    </div>
  );
};

export default Bio;
